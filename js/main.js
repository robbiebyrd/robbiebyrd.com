const history = [];
var position = 0;
var idleTime = 0;
// Increment the idle time counter every minute.

jQuery(function () {
    history.push('http://robbiebyrd.com/homepage');
    updateBrowser('http://robbiebyrd.com/homepage');
    jQuery('.favorite').on('click touch', function () {
        clickURL(jQuery(this).data('url'));
    });
    jQuery('.forward_button').on('click touch', function () {
        move(1);
    });
    jQuery('.back_button').on('click touch', function () {
        move(-1);
    });
    jQuery('.home_button').on('click touch', function () {
        updateBrowser('http://robbiebyrd.com/homepage');
    });
    jQuery('#resetIcons').on('click touch', function () {
        resetDesktopIcons();
    });
    jQuery('#sortIcons').on('click touch', function () {
        sortDesktopIcons();
    });

    var idleInterval = setInterval(timerIncrement, 300000); // 5 minutes

    // Zero the idle timer on mouse movement.
    jQuery(this).on('mousemove keypress', function (e) {
        idleTime = 0;
        $('.screensaver').addClass('hidden');
    });

    const static_windows = {
        'about-page-content': markdown(data["system://about"])
    };

    for (const [key, value] of Object.entries(static_windows)) {
        jQuery("#" + key).html(value);
    }

    // This is a test
    jQuery( document ).on( "ajaxStart", function() {
        var a = jQuery("div.logo.toolbar_button > img");
        a.attr("src", "img/netscape/status.gif");
    });
    jQuery( document ).on( "ajaxStop", function() {
        var a = jQuery("div.logo.toolbar_button > img");
        a.attr("src", "img/netscape/icon.png");
    });

    jQuery("div.location_go button.go_button").on("click touch", function() {
        clickURL(jQuery(".location_input input").val());
    });

    jQuery('.location_input input').bind("enterKey",function(e){
        clickURL(jQuery(this).val());
    });
    jQuery('.location_input input').keyup(function(e){
        if(e.keyCode == 13)
        {
            jQuery(this).trigger("enterKey");
        }
    });

});

function clickURL(url) {
    if (url != history[position]) {
        position += 1;
        location.value = url;
        history.push(url);
        updateBrowser(url);
    }
}

function updateBrowser(url) {
    var display = '#internet .inner .inner-content';
    var location = '.location_input input';
    var location_status = '.netscape_footer label';
    var browserProxyURL = 'http://theoldnet.com/get?year=2001&noscripts=true&decode=true&url='
    if (url in data) {
        jQuery(display).html(markdown(data[url]));
        jQuery(location).val(url);
        jQuery(location_status).html(url);
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
        var strippedURL = url.replace(/^https?:\/\//, '');
        var loadURL = browserProxyURL + strippedURL;
        jQuery(display).load(loadURL, function () {
            jQuery(display).find("a").attr("href", function(index, href) {
                return browserProxyURL + href.replace(/^https?:\/\//, '');
            });
            jQuery(location_status).html(url);
        });
        jQuery(location).val(url);
        jQuery(location_status).html("Loading " + url + "...");
    } else {
        jQuery(display).html("<h1>404</h1><p>Page not found</p>");
        jQuery(location).val(url);
        jQuery(location_status).html(url);
    }
    jQuery('.inner-content a').hover(
        function() {
            var location_status = '.netscape_footer label';
            jQuery(location_status).attr("data-oldref", jQuery(location_status).html())
            jQuery(location_status).html(this.href);
        }, function() {
            var location_status = '.netscape_footer label';
            jQuery(location_status).html(jQuery(location_status).attr("data-oldref"));
        }
    );
    jQuery('.inner-content a').click(
        function() {
            console.log(this.href);
            clickURL(this.href);
            return false;
        }
    );

}

function move(p) {
    if (position + p >= 0 && position + p < history.length) {
        position = position + p;
        updateBrowser(history[position]);
    }
}

function resetDesktopIcons() {
    jQuery('.icon').removeAttr('style');
}

function sortDesktopIcons() {
    var mylist = $('#icon-holder');
    var listitems = mylist.children('div').get();
    listitems.sort(function (a, b) {
        var compA = $(a)
            .attr('id')
            .toUpperCase();
        var compB = $(b)
            .attr('id')
            .toUpperCase();
        return compA < compB ? -1 : compA > compB ? 1 : 0;
    });
    $.each(listitems, function (idx, itm) {
        mylist.append(itm);
    });
}

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime >= 1) {
        // 20 minutes
        $('.screensaver').removeClass('hidden');
    }
}
