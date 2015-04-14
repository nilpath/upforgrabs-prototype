var deviceWidth = 320;
var deviceHeight = 568-20; // minus iphone status bar

var black = '#333';

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

// we need a wrapper layer since the img is too small, touch area becomse too small
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
  x: deviceWidth-44-10,
  y: headerHeight/2-44/2,
  width: 44,
  height: 44,
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
// Take photo main viewport
/////////////////////////////////////////////////

var dottedViewport = new Layer({
  x: 0,
  y: 77,
  width: deviceWidth,
  height: 320,
  image:'images/dottedViewport.png'
});
takePhotoBg.addSubLayer(dottedViewport);

/////////////////////////////////////////////////
// Take photo footer
/////////////////////////////////////////////////

/// Definitions

var takePhotoFooterHeight = 151;
var takePhotoFooter = new Layer({
  x: 0,
  y: windowLayer.maxY-takePhotoFooterHeight,
  width: deviceWidth,
  height: takePhotoFooterHeight,
  backgroundColor: 'transparent'
});
windowLayer.addSubLayer(takePhotoFooter);

var takePhotoFooterContent = new Layer({
  x: takePhotoFooter.width/2-213/2,
  y: takePhotoFooter.height/2-90/2,
  width: 213,
  height: 90,
  backgroundColor: 'transparent'
});
takePhotoFooter.addSubLayer(takePhotoFooterContent);
takePhotoFooterContent.centerX();

var takePhotoBtn = new Layer({
  y: takePhotoFooterContent.height/2-90/2,
  width: 90,
  height: 90,
  image:'images/takePhotoBtn.png'
});
takePhotoFooterContent.addSubLayer(takePhotoBtn);
takePhotoBtn.centerX();

var flashOffBtn = new Layer({
  y: takePhotoFooterContent.height/2-43/2,
  x: 0,
  width: 43,
  height: 43,
  image:'images/flashOffBtn.png'
});
takePhotoFooterContent.addSubLayer(flashOffBtn);

var chooseExistingBtn = new Layer({
  y: takePhotoFooterContent.height/2-43/2,
  x: takePhotoFooterContent.width-43,
  width: 43,
  height: 43,
  image:'images/chooseExistingBtn.png'
});
takePhotoFooterContent.addSubLayer(chooseExistingBtn);

////////////////////////////////////////////////
// Edit photo
/////////////////////////////////////////////////

var editPhotoFooterHeight = 230;
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
  height: 71,
  image:'images/descriptionEmpty.png'
});
editPhotoFooter.addSubLayer(descriptionEmpty);

var map = new Layer({
  y: editPhotoFooter.height-114,
  x: 0,
  width: deviceWidth,
  height: 114,
  backgroundColor: 'white'
});
editPhotoFooter.addSubLayer(map);
var mapCanvas = new Layer({
  y: map.height/2-584/2,
  x: map.width/2-1055/2,
  width: 1055,
  height: 584,
  image:'images/mapCanvas.png'
});
map.addSubLayer(mapCanvas);
mapCanvas.draggable.enabled = true;
// mapCanvas.draggable.constraints = {
//   x: 0,
//   y: 0,
//   width: map.width,
//   height: map.height
// }

var pin = new Layer({
  x: map.width/2-39/2+14,
  y: map.height/2-39/2-5,
  width: 34,
  height: 39,
  image: 'images/pin.png'
})
map.addSubLayer(pin);

var locationBarEmpty = new Layer({
  y: descriptionEmpty.height,
  x: 0,
  width: deviceWidth,
  height: 57,
  image:'images/locationBarEmpty.png'
});
editPhotoFooter.addSubLayer(locationBarEmpty);

/////////////////////////////////////////////////
// Search Location
/////////////////////////////////////////////////

/// Search Input

var searchLocationView = new Layer({
  y: deviceHeight,
  x: 0,
  width: deviceWidth,
  height: deviceHeight,
  backgroundColor: 'transparent'
});
windowLayer.addSubLayer(searchLocationView);

var searchInput = new Layer({
  y: 0,
  x: 0,
  width: deviceWidth,
  height: 55,
  backgroundColor: black
});
searchLocationView.addSubLayer(searchInput);

var searchIconBig = new Layer({
  y: searchInput.height/2-17/2,
  x: searchInput.height/2-17/2,
  width: 17,
  height: 17,
  image: 'images/searchIconBig.png'
});
searchInput.addSubLayer(searchIconBig);

var cancelSearchBtn = new Layer({
  y: 0,
  x: searchInput.width-91,
  width: 91,
  height: 55,
  backgroundColor: 'transparent'
});
searchInput.addSubLayer(cancelSearchBtn);
var cancelSearchBtnImg = new Layer({
  y: cancelSearchBtn.height/2-26/2,
  x: 0,
  width: 72,
  height: 26,
  image: 'images/cancelSearchBtn.png'
});
cancelSearchBtn.addSubLayer(cancelSearchBtnImg);

var clearBtn = new Layer({
  y: 0,
  x: searchInput.width-cancelSearchBtn.width-40,
  width: 40,
  height: 55,
  backgroundColor: 'transparent',
  opacity: 0 // initial state
});
searchInput.addSubLayer(clearBtn);
var clearBtnImg = new Layer({
  y: clearBtn.height/2-11/2,
  x: clearBtn.width/2-11/2,
  width: 11,
  height: 11,
  image: 'images/clearBtn.png'
});
clearBtn.addSubLayer(clearBtnImg);

var searchInputText = new Layer({
  y: 0,
  x: 50,
  width: searchInput.width-cancelSearchBtn.width-clearBtn.width-50,
  height: 55,
  backgroundColor: 'transparent'
});
searchInput.addSubLayer(searchInputText);
var searchInputTextImg = new Layer({
  y: searchInputText.height/2-14/2,
  x: 0,
  width: 124,
  height: 14,
  image: 'images/searchInputPlaceholerText.png'
});
searchInputText.addSubLayer(searchInputTextImg);

/// Main content

var searchLocationResults = new Layer({
  y: searchInput.height,
  x: 0,
  width: deviceWidth,
  height: deviceHeight-searchInput.height,
  backgroundColor: 'white'
});
searchLocationView.addSubLayer(searchLocationResults);

var searchLocationResultsScroll = new Layer({
  y: 0,
  x: 0,
  width: searchLocationResults.width,
  height: searchLocationResults.height,
  backgroundColor: 'transparent'
});
searchLocationResultsScroll.draggable.enabled = true;
searchLocationResultsScroll.draggable.speedX = 0;
searchLocationResults.addSubLayer(searchLocationResultsScroll);

var homeWorkItems = new Layer({
  x: deviceWidth/2-282/2,
  y: deviceWidth/2-282/2,
  width: 282,
  height: 140,
  image: 'images/homeWorkItems.png'
})
searchLocationResultsScroll.addSubLayer(homeWorkItems);

/////////////////////////////////////////////////
// States
/////////////////////////////////////////////////

takePhotoBg.states.add({
  editMode: {
    y: -dottedViewport.y
  }
})

editPhotoFooter.states.add({
  visible: {
    y: windowLayer.maxY-editPhotoFooterHeight
  }
})

searchLocationView.states.add({
  open: {
    y: 0
  },
  closed: {
    y: deviceHeight
  }
})

dottedViewport.states.add({
  hidden: {
    opacity: 0
  }
})

takePhotoFooterContent.states.add({
  hidden: {
    opacity: 0
  }
})

/////////////////////////////////////////////////
// Behaviour
/////////////////////////////////////////////////

var cancelBtnOnClick = function() {
  publishBtn.states.previous();
  takePhotoBg.states.previous();
  editPhotoFooter.states.previous();
  dottedViewport.states.previous();
  takePhotoFooterContent.states.previous();

  cancelBtn.off(Events.Click, cancelBtnOnClick)
  takePhotoBtn.on(Events.Click, takePhotoBtnOnClick)
}

var takePhotoBtnOnClick = function() {
  publishBtn.states.next();
  takePhotoBg.states.next();
  editPhotoFooter.states.next();
  dottedViewport.states.next();
  takePhotoFooterContent.states.next();

  takePhotoBtn.off(Events.Click, takePhotoBtnOnClick)
  cancelBtn.on(Events.Click, cancelBtnOnClick)
}
takePhotoBtn.on(Events.Click, takePhotoBtnOnClick)

locationBarEmpty.on(Events.Click, function() {
  searchLocationView.states.switch('open');
})
cancelSearchBtn.on(Events.Click, function() {
  searchLocationView.states.switch('closed');
})

searchLocationResultsScroll.on(Events.DragEnd, function() {
  searchLocationResultsScroll.animate({
    properties: {
      x: 0,
      y: 0
    },
    time: 0.5
  })
})