function preloadImages(array) {
	
	if (!preloadImages.list) {
		preloadImages.list = [];
	}

	for(var i = 0; i < array.length; i++) {
		var img = new Image();
		img.src = array[i];
		preloadImages.list.push(img);
	}
}

//image urls will go here.
var imgURLs = [];

preloadImages(imageURLs);