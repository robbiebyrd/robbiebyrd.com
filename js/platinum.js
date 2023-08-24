function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

function secondsToTimeFormatted() {
    var d = new Date();
    d.setHours(d.getHours()); // Eastern Time Zone adjustment
    return dateFormatter(d);
}

function dateFormatter(d) {
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds + " " + ampm;
}

function boot() {
    // Play the boot sound
    jQuery("#sound_boot").trigger("play");
    // Hide the button and overlay
    jQuery("#boot").addClass("hidden");
    jQuery("#boot-button").removeClass("hidden");
}

function clock() {
    // Init and set the clock
    jQuery("#time").text(secondsToTimeFormatted());
    setInterval(function () {
        jQuery("#time").text(secondsToTimeFormatted());
    }, 1000);
}

function enableAppMenu() {
    jQuery(".draggable-window.content:not('.hidden')").each(function () {
        jQuery("<li id='appmenu-" + jQuery(this).attr('id') + "'><img src='" + jQuery(this).data("window-icon") + "' />" + jQuery(this).data("window-name") + "</li>").appendTo("#application-switcher");
    });
}

function updateAppMenu() {
    jQuery("#application-switcher").empty()
    enableAppMenu()
    var index_highest = 0;
    // more effective to have a class for the div you want to search and 
    // pass that to your selector
    $(".content").each(function () {
        // always use a radix when using parseInt
        var index_current = parseInt($(this).css("zIndex"), 10);
        if (index_current > index_highest) {
            index_highest = index_current;
        }
    });

    jQuery("#application-switcher li").on("click", function () {
        if (!jQuery(this).hasClass("disabled")) {
            jQuery("#sound_window_open").trigger("play");
            jQuery("#" + jQuery(this).get(0).id.split("-")[1])
                .removeClass("hidden")
                .css("z-index", index_highest + 1);
            updateAppMenu()
        }
    });
}

function enableWindowDrag() {
    //Make windows movable and make sure the active window is on top
    jQuery(".draggable-window").draggable({
        handle: "h1.titlebar",
        start: function () {
            jQuery(".content").css("z-index", "1100");
            jQuery(this).css("z-index", "1200");
            jQuery("#sound_move_stop").trigger("play");
        },
        stop: function (event, ui) {
            jQuery("#sound_move_stop").trigger("play");
        },
    });
}

function enableWindowResize() {
    // Make windows resizable
    jQuery(".resizable .inner").resizable({
        handles: "se",
        start: function (event, ui) {
            jQuery(this).parent().css("opacity", "0.5");
            jQuery(this).parent().addClass("ui-draggable-dragging");
        },
        stop: function (event, ui) {
            jQuery("#sound_move_stop").trigger("play");
            jQuery(this).parent().css("opacity", "1");
            jQuery(this).parent().removeClass("ui-draggable-dragging");
        },

    });
}

function enableWindowZoom() {
    // Zoom Box -- Make Window Full Screen and toggle back
    jQuery(".zoom-box").on("click", function () {
        b = this.closest(".content");
        isMax = jQuery(this).data("max");
        i = jQuery(b).children(".inner");
        if (!isMax) {
            jQuery(i)
                .css("width", "95vw")
                .css("height", "80vh")
            jQuery(b)
                .css("left", "2.5rem")
                .css("top", "2.5rem");

            jQuery(i)
                .data("width", jQuery(b).css("width"))
                .data("height", jQuery(b).css("height"))
                .data("top", jQuery(b).css("top"))
                .data("left", jQuery(b).css("left"))
                .data("max", true);

            jQuery("#sound_window_expand").trigger("play");
        } else {
            jQuery(b).removeAttr("style");
            jQuery("#sound_window_collapse").trigger("play");
            jQuery(i).removeAttr("style");
            jQuery(i).data("max", false);
        }
    });

}

function enableWindowCollapse() {
    // Collapse/Expand window -- Minimize the window to just the title bar
    jQuery(".window-collapse").on("click", function () {
        let contentBox = jQuery(this).closest(".content");
        contentBox.css("z-index", "1");
        let shadeHeight = jQuery(this).data(
            "shade-height",
            jQuery(this).css("height")
        );
        if (jQuery(this).hasClass("shade")) {
            jQuery(contentBox).removeClass("hidden-window");
            jQuery(contentBox)
                .children("div.inner")
                .first()
                .children(".ui-resizable-handle")
                .first()
                .removeClass("hidden");
            jQuery(contentBox).css("height", shadeHeight);
            jQuery(this).removeClass("shade");
            jQuery("#sound_window_expand").trigger("play");
        } else {
            jQuery(contentBox).addClass("hidden-window");
            jQuery(contentBox).css("min-height", "0px");
            jQuery(contentBox)
                .children("div.inner")
                .first()
                .children(".ui-resizable-handle")
                .first()
                .addClass("hidden");
            jQuery(contentBox).css("height", "");
            jQuery(this).addClass("shade");
            jQuery("#sound_window_collapse").trigger("play");
        }
    });

}

function enableWindowClose() {
    // Close Box -- Close the window when clicked
    jQuery(".close-box, .boot-button, .close-button").on(
        "click",
        function () {
            a = this.closest(".content");
            jQuery(a).addClass("hidden");
            jQuery("#sound_window_close").trigger("play");
            updateAppMenu()
        }
    );
}


function enableNav() {
    jQuery(".nav-list li, #application-switcher li").on("mouseenter click touch", function () {
        jQuery(this).children().show();
    }).on("mouseleave click touch", function () {
        jQuery(this).children("ul").hide();
    });

    // Enable menu items to be clickable by default and open a windows/app with the same name
    jQuery(".nav-list li, #apple-menu li").on("click", function () {
        if (!jQuery(this).hasClass("disabled")) {
            jQuery("#sound_window_open").trigger("play");
            jQuery("#" + jQuery(this).get(0).id.split("-")[1])
                .removeClass("hidden")
                .css("z-index", "9000");
            updateAppMenu();
        }
    });

}

function enableDesktopIcons() {
    // Enable Desktop Icons
    if (isMobile()) {
        jQuery(".icon").on("click", function () {
            jQuery("#" + jQuery(this).get(0).id.split("-")[1])
                .removeClass("hidden")
                .css("z-index", "9000");
            jQuery("#sound_window_open").trigger("play");
            updateAppMenu()
        });
    } else {
        jQuery(".draggable-icon").draggable({});
        jQuery(".icon").on("dblclick", function () {
            jQuery("#" + jQuery(this).get(0).id.split("-")[1])
                .removeClass("hidden")
                .css("z-index", "9000");
            jQuery("#sound_window_open").trigger("play");
            updateAppMenu()
        });
    }


}

function enableWindowOrder() {
    // Make sure the active window is on top
    jQuery(".content").on("click", function () {
        jQuery(".content").css("z-index", "1100");
        jQuery(this).css("z-index", "1200");
    });

}

jQuery(function () {

    clock();
    enableWindowDrag();
    enableWindowResize();
    enableWindowClose();
    enableWindowOrder();
    enableNav();
    enableWindowZoom();
    enableDesktopIcons();
    enableWindowCollapse();
    enableAppMenu();

    jQuery("#boot-button").click(function () {
        boot(this)
    });
    jQuery("#shutdown_button").click(function () {
        jQuery("#shutdown").addClass("hidden");
        jQuery("#shutdown-confirm").removeClass("hidden");
        jQuery("#boot").removeClass("hidden");
    });
});
