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

// we need a wrapper layer since the img is too, touch area becomse too small
var cancelBtn = new Layer({
  x: 5,
  y: headerHeight/2-60/2,
  width: 60,
  height: 60,
  backgroundColor: 'transparent'
});
header.addSubLayer(cancelBtn);
var cancelBtnInner = new Layer({
  x: 60/2-20/2,
  y: 60/2-20/2,
  width: 20,
  height: 20,
  image:'images/cancelBtn.png'
});
cancelBtn.addSubLayer(cancelBtnInner);

var publishBtn = new Layer({
  x: deviceWidth-45-10,
  y: headerHeight/2-45/2,
  width: 45,
  height: 45,
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
  y: takePhotoFooterHeight/2-100/2,
  width: 100,
  height: 100,
  image:'images/takePhotoBtn.png'
});
takePhotoBtn.centerX();
takePhotoFooter.addSubLayer(takePhotoBtn);

var flashOffBtn = new Layer({
  y: takePhotoFooterHeight/2-50/2,
  x: 40,
  width: 50,
  height: 50,
  image:'images/flashOffBtn.png'
});
takePhotoFooter.addSubLayer(flashOffBtn);

var chooseExistingBtn = new Layer({
  y: takePhotoFooterHeight/2-50/2,
  x: deviceWidth-40-50,
  width: 50,
  height: 50,
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
  y: editPhotoFooterHeight-135,
  x: 0,
  width: deviceWidth,
  height: 135,
  image:'images/map.png'
});
editPhotoFooter.addSubLayer(map);

var locationBarEmpty = new Layer({
  y: descriptionEmpty.height,
  x: 0,
  width: deviceWidth,
  height: 60,
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