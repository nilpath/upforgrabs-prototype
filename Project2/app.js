var windowLayer = new Layer({
	x: 0, y: 50, width: 320, height: 568
});
windowLayer.centerX();
windowLayer.style.overflow = 'hidden';

cameraImageLayer = new Layer({x: 0, y: 0, width: 320, height: 568, image:"images/Tinder_flow_with.png"});
cameraImageLayer.superLayer = windowLayer;
cameraImageLayer.centerX();
windowLayer.addSubLayer(cameraImageLayer);



matchButton = new Layer({
	y: cameraImageLayer.maxY-134,
	x: 192,
	height: 65, width: 65,
	backgroundColor: 'transparent',
	opacity: 1
});


matchButton.on(Events.Click, function() {
	//footerLayer.states.switch("expand");
	matchLayer.states.switch("show");
});

windowLayer.addSubLayer(matchButton);



geButton = new Layer({
	y: cameraImageLayer.maxY-50,
	x: 320-107,
	height: 50, width: 107,
	backgroundColor: 'transparent'
});

geButton.states.add({
	hide: {opacity: 0}
});

geButton.on(Events.Click, function() {
	//footerLayer.states.switch("expand");
	earlierLayer.states.switch("show");
});

windowLayer.addSubLayer(geButton);




/// MATCHLAYER

matchLayer = new Layer({
	x: 320, 
	y: 0, 
	width: 320, 
	height: 568,
	opacity: 1,
	image: "images/Match_view.png"
});
matchLayer.states.animationOptions = {
	curve: "ease-in",
	time: 0.2
};
matchLayer.states.add({
	show: {x: 0, opacity: 1},
	hide: {x: 320, opacity: 1}
});

windowLayer.addSubLayer(matchLayer);


backButton = new Layer({
	y: 10,
	x: 10,
	height: 50, width: 80,
	backgroundColor: 'transparent'
});

backButton.on(Events.Click, function() {
	//footerLayer.states.switch("expand");
	matchLayer.states.switch("hide");
});

matchLayer.addSubLayer(backButton);





// EARLIERLAYER

earlierLayer = new Layer({
	x: 320, 
	y: 0, 
	width: 320, 
	height: 568,
	opacity: 1,
	image: "images/earlier.png"
});
earlierLayer.states.animationOptions = {
	curve: "ease-in",
	time: 0.2
};
earlierLayer.states.add({
	show: {x: 0, opacity: 1},
	hide: {x: 320, opacity: 1}
});

windowLayer.addSubLayer(earlierLayer);


backButton = new Layer({
	y: 10,
	x: 10,
	height: 50, width: 80,
	backgroundColor: 'transparent'
});

backButton.on(Events.Click, function() {
	//footerLayer.states.switch("expand");
	earlierLayer.states.switch("hide");
});

earlierLayer.addSubLayer(backButton);


// publishButton = new Layer({
// 	y: cameraImageLayer.maxY - 105,
// 	opacity: 0, height: 70, width: 70, image: "/Users/nikek/Google Drive/HORNSTULL HACK TEAM WASTE/Assets/publishBtn.png"
// });
// publishButton.states.add({
// 	show: {opacity: 1}
// });
// publishButton.centerX();

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