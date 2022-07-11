const history = []
var position = 0
jQuery(function () {
	history.push("http://robbiebyrd.com/homepage")
	updateBrowser("http://robbiebyrd.com/homepage")
	jQuery(".favorite").on("click touch", function () {
		clickURL(jQuery(this).data("url"))
	});
	jQuery(".forward_button").on("click touch", function () {
		move(1)
	});
	jQuery(".back_button").on("click touch", function () {
		move(-1)
	});
});

function clickURL(url) {
	if(url != history[position]){
		position += 1;
		location.value = url;
		history.push(url)
		updateBrowser(url)
	}
}

function updateBrowser(url) {
	var display = document.querySelector("#internet .inner .inner-content");
	var location = document.querySelector(".location_input input")
	var location_status = document.querySelector(".netscape_footer label")
	display.innerHTML = markdown(data[url]);
	location.value = url;
	location_status.innerHTML = url;
}

function move(p) {
	if((position + p) >= 0 && (position + p) < history.length) {
		position = position + p
		updateBrowser(history[position])
	}
}
