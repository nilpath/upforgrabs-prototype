var windowLayer = new Layer({
	x: 0, y: 50, width: 320, height: 568
});
windowLayer.centerX();
windowLayer.style.overflow = 'hidden';

cameraImageLayer = new Layer({x: 0, y: 50, width: 320, height: 568, image:"/Users/christofferahrling/Google Drive/HORNSTULL HACK TEAM WASTE/Assets/lampa.png"});
cameraImageLayer.superLayer = windowLayer;
cameraImageLayer.centerX();
windowLayer.addSubLayer(cameraImageLayer);

headerLayer = new Layer({
	x: 0, 
	y: 50, 
	width: 320, 
	height: 88,
	backgroundColor: "#000",
	opacity: 0.74
});
headerLayer.centerX();

footerLayer = new Layer({
	x: 0, 
	y: cameraImageLayer.maxY, 
	width: 320, 
	height: 270,
	opacity: 1,
	backgroundColor: "#FFF"
});
footerLayer.states.animationOptions = {
	curve: "ease-in",
	time: 0.2
};
footerLayer.centerX();
footerLayer.states.add({
	expand: {y: cameraImageLayer.maxY - 270, opacity: 1}
});

headline = new Layer({height: 25, width: 270, opacity: 1, backgroundColor: "#000"});
headline.superLayer = headerLayer;
headline.html = "Take a sweet picture";
headline.center();

headerLayer.addSubLayer(headline);

photoButton = new Layer({
	y: cameraImageLayer.maxY - 105,
	height: 70, width: 70, 
	image: "/Users/christofferahrling/Google Drive/HORNSTULL HACK TEAM WASTE/Assets/takePhotoBtn.png"
});
photoButton.centerX();

photoButton.states.add({
	hide: {opacity: 0}
});

photoButton.on(Events.Click, function() {
	footerLayer.states.switch("expand");
	photoButton.states.switchInstant("hide");
	publishButton.states.switchInstant("show");
});

publishButton = new Layer({
	y: cameraImageLayer.maxY - 105,
	opacity: 0, height: 70, width: 70, image: "/Users/christofferahrling/Google Drive/HORNSTULL HACK TEAM WASTE/Assets/publishBtn.png"
});
publishButton.states.add({
	show: {opacity: 1}
});
publishButton.centerX();

//152 

/*// Welcome to Framer

// This is just demo code. Feel free to delete it all.

imageLayer = new Layer({x:0, y:0, width:128, height:128, image:"images/icon.png"})
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