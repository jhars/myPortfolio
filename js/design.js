
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


        if (i<=3){
          context.drawImage(images[i], i*400, 0, 350, 290);
          context.shadowColor = '#999';
          context.shadowBlur = 70;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 15;
        } else if (i>3 && i<=7) {
          context.drawImage(images[i], 2800-(i*400), 400, 350, 350);
          context.shadowColor = '#999';
          context.shadowBlur = 70;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 15;
        } else if (i>7 && i<=12) {
          context.drawImage(images[i], 3600-(i*400), 800, 350, 350);
          context.shadowColor = '#999';
          context.shadowBlur = 70;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 15;
        }

        // context.drawImage(images[i], 0, i*350, 350, 290);
        // context.shadowColor = '#999';
        // context.shadowBlur = 70;
        // context.shadowOffsetX = 0;
        // context.shadowOffsetY = 15;



      // context.drawImage(images[i], i*300, i*350, 350, 290);
      // context.shadowColor = '#999';
      // context.shadowBlur = 70;
      // context.shadowOffsetX = 0;
      // context.shadowOffsetY = 15;

      }
    });




