var sources = {
    BASE: '../images/socks/eSockMulti.jpg'
};  
  // ,
  //        '../images/socks/eSockBluGr.jpg'
         



//============IMAGE LOADER=================//
var images = {};


function loadImages(sources, callback) {

  

  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for(var src in sources) {
    numImages++;
    src++;
  }
  for(var src in sources) {
    images[src] = new Image();
    images[src].onload = function() {
      if(++loadedImages >= numImages) {
        callback(images);
      }

    };
    images[src].src = sources[src];
    // console.log(images[src].src);
    imgArray.push(images[src].src);
    
  }
}



var canvas = document.getElementById('customHelmet');
var context = canvas.getContext('2d');

var imgArray = [];
console.log(imgArray);


i=0;
  while ( i < 301 ) {
    loadImages(sources, function(images) {
    var imgBASE = images.BASE;
    imgArray[i] = imgBASE;
    context.drawImage(imgArray[i], 0, i-600, 300, 300)
    // context.drawImage(images.img01, 0, 300, 300, 300)
    console.log(imgArray[i]);
    });
    i+=300;


  }

