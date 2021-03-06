var sources =  [
                '../images/designGraphics/r7v7.gif',
                '../images/designGraphics/rLogo.jpg',
                '../images/designGraphics/rPackApp.png',
                '../images/designGraphics/eSockMulti.jpg',
                '../images/designGraphics/eSockBlkGr.jpg',
                '../images/designGraphics/eSockOrange.jpg',
                '../images/designGraphics/eTHLogo.png',
                '../images/designGraphics/Camo-pocket.jpg',
                '../images/designGraphics/AzteCPocket.png',             
                '../images/designGraphics/rFLGS.jpg'
                ];

// var sources = [[BayViewGoes Here]]

//============IMAGE LOADER=================//
var images = {};

function loadImages(sources, callback) {


  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for(var i in sources) {
    numImages++;
    // src++;
  }
  for(var src in sources) {
    images[src] = new Image();
    images[src].onload = function() {
      if(++loadedImages >= numImages) {
        callback(images);
      }

    };
    images[src].src = sources[src];
  }
}
    
  var canvas = document.getElementById('designDesign');
  var context = canvas.getContext('2d');



    loadImages(sources, function(images) {
        
      for (i=0;i< 12;i++) {//number of IMAGES Loaded
        console.log(images[i]);
        context.drawImage(images[i], 0, i*310, 250, 250);
      context.shadowColor = '#999';
      context.shadowBlur = 70;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 15;

      }
    });
