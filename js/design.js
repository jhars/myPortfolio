// var sources = {
//   BASE: '../images/socks/eSockMulti.jpg'
// };

var sources =  [
                '../images/designGraphics/uVaShorts.png',
                '../images/designGraphics/AzteCPocket.png',
                '../images/designGraphics/Camo-pocket.jpg',
                '../images/designGraphics/eTHLogo.png',
                '../images/designGraphics/rPackApp.png',
                '../images/designGraphics/eaMic.png',
                '../images/designGraphics/eSockBlkGr.jpg',
                '../images/designGraphics/eSockMulti.jpg',
                '../images/designGraphics/eSockOrange.jpg',
                '../images/designGraphics/r7v7.gif',
                '../images/designGraphics/rFLGS.jpg',
                '../images/designGraphics/rLogo.jpg'

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
    // imgArray.push(images[src].src);

    // console.log(images[src]);
    // var srcImage = images[src];
    // context.drawImage(srcImage, 0, i-900, 300, 300);
    
  }
}
    
  var canvas = document.getElementById('customHelmet');
  var context = canvas.getContext('2d');


    loadImages(sources, function(images) {
        
      for (i=0;i< 601;i++) {
        console.log(images[i]);
        context.drawImage(images[i], 0, i*320, 400, 300);

      }
     

    });

    // var dataURL = canvas.toDataURL();

    //   // set canvasImg image src to dataURL
    //   // so it can be saved as an image
    //   document.getElementById('customHelmet').src = dataURL;

    




