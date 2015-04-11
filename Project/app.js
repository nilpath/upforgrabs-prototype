var windowLayer = new Layer({
	x: 0, y: 0, width: 320, height: 568
});
windowLayer.centerX();
windowLayer.style.overflow = 'hidden';

cameraImageLayer = new Layer({x: 0, y: 0, width: 320, height: 568, image:"images/lampa.png"});
cameraImageLayer.superLayer = windowLayer;
windowLayer.addSubLayer(cameraImageLayer);

cameraImageLayer.states.animationOptions = {
	curve: "ease-in",
	time: 0.2
};

imageFrameLayer = new Layer({
	x: 11, y: 90,
	width: 298,
	height: 298,
	image: "images/letterBox.png"
});
imageFrameLayer.superLayer = windowLayer;
windowLayer.addSubLayer(imageFrameLayer);

imageFrameLayer.states.add({
	hide: {opacity: 0}
});

cameraImageLayer.states.add({
	selected: {y: windowLayer.minY - imageFrameLayer.minY}
});

headline = new Layer({
	x: 0,
	y: 0,
	height: 44, width: 320,
	backgroundColor: "transparent"
});
headline.superLayer = windowLayer;
headline.html = "The photo";
headline.style.textAlign = 'center';
headline.style.fontFamily = 'Helvetica Neue, Helvetica';
headline.style.fontSize = '14px';
headline.style.letterSpacing = '2px';
headline.style.fontWeight = '300';
headline.style.lineHeight = '44px';

headline.states.add({
	selected: {backgroundColor: "#FFF"}
});

headline.states.animationOptions = {
	curve: "ease-in",
	time: 0.2
};

windowLayer.addSubLayer(headline);

footerLayer = new Layer({
	x: 0, 
	y: cameraImageLayer.maxY, 
	width: 320, 
	height: 204,
	opacity: 1,
	backgroundColor: "#FFF"
});
footerLayer.superLayer = windowLayer;
windowLayer.addSubLayer(footerLayer);
footerLayer.states.animationOptions = {
	curve: "ease-in",
	time: 0.2
};
footerLayer.centerX();
footerLayer.states.add({
	expand: {y: cameraImageLayer.maxY - 204, opacity: 1}
});

photoButton = new Layer({
	y: windowLayer.maxY - 105,
	height: 70, width: 70,
	image: "images/takePhotoBtn.png"
});
photoButton.centerX();

photoButton.states.add({
	hide: {opacity: 0}
});

photoButton.on(Events.Click, function() {
	footerLayer.states.switch("expand");
	cameraImageLayer.states.switch("selected");
	headline.states.switch("selected");
	headline.html = "The sales pitch";
	
	photoButton.states.switchInstant("hide");
	flashButton.states.switchInstant("hide");
	imageFrameLayer.states.switchInstant("hide");
	libraryButton.states.switchInstant("hide");
	publishButton.states.switchInstant("show");
});

flashButton = new Layer({
	y: photoButton.midY - 20,
	x: (windowLayer.minX + 80) - 20,
	height: 39, width: 39, 
	image: "images/flashOffBtn.png"
});

flashButton.states.add({
	hide: {opacity: 0}
});

libraryButton = new Layer({
	y: photoButton.midY - 20,
	x: (windowLayer.maxX - 80) - 20,
	height: 39, width: 39, 
	image: "images/chooseExistingBtn.png"
});

libraryButton.states.add({
	hide: {opacity: 0}
});


publishButton = new Layer({
	y: windowLayer.maxY - 105,
	opacity: 0, height: 70, width: 70, image: "images/publishBtn.png"
});
publishButton.states.add({
	show: {opacity: 1}
});
publishButton.centerX();

//152 

/*// Welcome to Framer

// This is just demo code. Feel free to delete it all.

imageLayer = new Layer({x:0, y:0, width:128, height:128, image:"imagesicon.png"})
imageLayer.center()

// Define a set of states with names (the original state is 'default')
imageLayer.states.add({
	second: {y:100, scale:0.6, rotationZ:100},
	third:  {y:300, scale:1.3},
	fourth:	{y:200, scale:0.9, rotationZ:200},
})

// Set the default animation options
imageLayer.states.animationOptions = {
	curve: "spring(500,12,0)"
}

// On a click, go to the next state
imageLayer.on(Events.Click, function() {
	imageLayer.states.next()
})*/