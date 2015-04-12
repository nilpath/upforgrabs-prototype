var deviceWidth = 320;
var deviceHeight = 568-20;

/////////////////////////////////////////////////
// Base
/////////////////////////////////////////////////

var windowLayer = new Layer({
  x: 0,
  y: 0,
  width: deviceWidth,
  height: deviceHeight
});
windowLayer.centerX();
windowLayer.style.overflow = 'hidden';

var takePhotoBg = new Layer({
  x: 0,
  y: 0,
  width: deviceWidth,
  height: deviceHeight,
  image:'images/takePhotoBg.png'
});
windowLayer.addSubLayer(takePhotoBg);

Framer.Defaults.Animation = {
  time: 0.3,
  curve: 'bezier-curve([0, 0, .1, 1])'
}

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

var headerHeight = 70;
var header = new Layer({
  x: 0,
  y: 0,
  width: deviceWidth,
  height: headerHeight,
  backgroundColor: 'transparent'
});
windowLayer.addSubLayer(header);

var cancelBtn = new Layer({
  x: 25,
  y: headerHeight/2-30/2,
  width: 17,
  height: 17,
  image:'images/cancelBtn.png'
});
header.addSubLayer(cancelBtn);

var publishBtn = new Layer({
  x: deviceWidth-25-35,
  y: headerHeight/2-35/2,
  width: 35,
  height: 35,
  image:'images/publishBtn.png',
  opacity: 0,
});
publishBtn.states.add({
  visible: {
    opacity: 1
  }
})
header.addSubLayer(publishBtn);

/////////////////////////////////////////////////
// Take photo footer
/////////////////////////////////////////////////

/// Definitions

var takePhotoFooterHeight = 177-20;
var takePhotoFooter = new Layer({
  x: 0,
  y: windowLayer.maxY-takePhotoFooterHeight,
  width: deviceWidth,
  height: takePhotoFooterHeight,
  backgroundColor: 'transparent'
});
windowLayer.addSubLayer(takePhotoFooter);

var takePhotoBtn = new Layer({
  y: takePhotoFooterHeight/2-80/2,
  width: 80,
  height: 80,
  image:'images/takePhotoBtn.png'
});
takePhotoBtn.centerX();
takePhotoFooter.addSubLayer(takePhotoBtn);

var flashOffBtn = new Layer({
  y: takePhotoFooterHeight/2-40/2,
  x: 55,
  width: 40,
  height: 40,
  image:'images/flashOffBtn.png'
});
takePhotoFooter.addSubLayer(flashOffBtn);

var chooseExistingBtn = new Layer({
  y: takePhotoFooterHeight/2-40/2,
  x: deviceWidth-55-40,
  width: 40,
  height: 40,
  image:'images/chooseExistingBtn.png'
});
takePhotoFooter.addSubLayer(chooseExistingBtn);

////////////////////////////////////////////////
// Edit photo
/////////////////////////////////////////////////

var editPhotoFooterHeight = 248;
var editPhotoFooter = new Layer({
  y: windowLayer.maxY,
  x: 0,
  width: deviceWidth,
  height: editPhotoFooterHeight
});
windowLayer.addSubLayer(editPhotoFooter);

var descriptionEmpty = new Layer({
  y: 0,
  x: 0,
  width: deviceWidth,
  height: 68,
  image:'images/descriptionEmpty.png'
});
editPhotoFooter.addSubLayer(descriptionEmpty);

var map = new Layer({
  y: editPhotoFooterHeight-148,
  x: 0,
  width: deviceWidth,
  height: 148,
  image:'images/map.png'
});
editPhotoFooter.addSubLayer(map);

var locationBarEmpty = new Layer({
  y: descriptionEmpty.height,
  x: 0,
  width: deviceWidth,
  height: 45,
  image:'images/locationBarEmpty.png'
});
editPhotoFooter.addSubLayer(locationBarEmpty);

/////////////////////////////////////////////////
// States
/////////////////////////////////////////////////

takePhotoBg.states.add({
  editMode: {
    y: -header.maxY
  }
})

editPhotoFooter.states.add({
  visible: {
    y: windowLayer.maxY-editPhotoFooterHeight
  }
})

/////////////////////////////////////////////////
// Behaviour
/////////////////////////////////////////////////

var cancelBtnOnClick = function() {
  publishBtn.states.previous();
  takePhotoBg.states.previous();
  editPhotoFooter.states.previous();

  cancelBtn.off(Events.Click, cancelBtnOnClick)
  takePhotoBtn.on(Events.Click, takePhotoBtnOnClick)
}

var takePhotoBtnOnClick = function() {
  publishBtn.states.next();
  takePhotoBg.states.next();
  editPhotoFooter.states.next();

  takePhotoBtn.off(Events.Click, takePhotoBtnOnClick)
  cancelBtn.on(Events.Click, cancelBtnOnClick)
}
takePhotoBtn.on(Events.Click, takePhotoBtnOnClick)