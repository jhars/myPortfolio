// [[Image Array Goes Here]]
//////////////////////////////////////////////////////////////////
var sources = [ //!!!!! * Can be an HTTP call to ANY FILE * !!!!!!
//////////////////////////////////////////////////////////////////

// 'IMG_0770 11.03.42 AM.jpg',
// 'IMG_0771 11.03.42 AM.jpg',
// 'IMG_0772 11.03.42 AM.jpg',
// 'IMG_0773 11.03.42 AM.jpg',
// 'IMG_0774 11.03.42 AM.jpg',
// 'IMG_0775 11.03.42 AM.jpg',
// 'IMG_0776 11.03.42 AM.jpg',
// 'IMG_0777 11.03.42 AM.jpg',
// 'IMG_0778 11.03.42 AM.jpg',
// 'IMG_0779 11.03.42 AM.jpg',
// 'IMG_0780 11.03.42 AM.jpg',
// 'IMG_0781 11.03.42 AM.jpg',
// 'IMG_0782 11.03.42 AM.jpg',
// 'IMG_0783 11.03.42 AM.jpg',
// 'IMG_0784 11.03.42 AM.jpg',
// 'IMG_0785 11.03.42 AM.jpg',
// 'IMG_0786 11.03.42 AM.jpg',
// 'IMG_0787 11.03.42 AM.jpg',
// 'IMG_0788 11.03.42 AM.jpg',
// 'IMG_0789 11.03.41 AM.jpg',
// 'IMG_0790 11.03.41 AM.jpg',
// 'IMG_0791 11.03.41 AM.jpg',
// 'IMG_0792 11.03.41 AM.jpg',
// 'IMG_0793 11.03.41 AM.jpg',
// 'IMG_0794 11.03.41 AM.jpg',
// 'IMG_0796 11.03.41 AM.jpg',
// 'IMG_0797 11.03.41 AM.jpg',
// 'IMG_0798 11.03.41 AM.jpg',
// 'IMG_0799 11.03.41 AM.jpg',
// 'IMG_0800 11.03.41 AM.jpg',
// 'IMG_0801 11.03.41 AM.jpg', 
// 'IMG_0802 11.03.41 AM.jpg',
// 'IMG_0803 11.03.41 AM.jpg',
// 'IMG_0804 11.03.41 AM.jpg',
// 'IMG_0805 11.03.41 AM.jpg',
// 'IMG_0806 11.03.41 AM.jpg',
// 'IMG_0807 11.03.41 AM.jpg',
// 'IMG_0808 11.03.41 AM.jpg',
// 'IMG_0809 11.03.41 AM.jpg', //current download max
// 'IMG_0810 11.03.41 AM.jpg',
// 'IMG_0811 11.03.41 AM.jpg',
// 'IMG_0812 11.03.41 AM.jpg',
// 'IMG_0813 11.03.41 AM.jpg',
// 'IMG_0814 11.03.41 AM.jpg',
// 'IMG_0815 11.03.41 AM.jpg',
// 'IMG_0816 11.03.41 AM.jpg',
// 'IMG_0817 11.03.41 AM.jpg',
// 'IMG_0818 11.03.41 AM.jpg',
// 'IMG_0819 11.03.41 AM.jpg',
// 'IMG_0820 11.03.41 AM.jpg',
// 'IMG_0821 11.03.41 AM.jpg',
// 'IMG_0822 11.03.41 AM.jpg',
// 'IMG_0823 11.03.41 AM.jpg',
// 'IMG_0824 11.03.41 AM.jpg',
// 'IMG_0825 11.03.41 AM.jpg',
// 'IMG_0826 11.03.41 AM.jpg',
// 'IMG_0827 11.03.41 AM.jpg',
// 'IMG_0828 11.03.41 AM.jpg',
// 'IMG_0829 11.03.41 AM.jpg',
// 'IMG_0830 11.03.41 AM.jpg',
// 'IMG_0831 11.03.41 AM.jpg',
// 'IMG_0832 11.03.41 AM.jpg',
// 'IMG_0833 11.03.41 AM.jpg',
// 'IMG_0834 11.03.41 AM.jpg',
// 'IMG_0835 11.03.41 AM.jpg',
// 'IMG_0836 11.03.41 AM.jpg',
// 'IMG_0837 11.03.41 AM.jpg',
// 'IMG_0838 11.03.41 AM.jpg',
// 'IMG_0839 11.03.41 AM.jpg',
// 'IMG_0840 11.03.41 AM.jpg',
// 'IMG_0841 11.03.41 AM.jpg',
// 'IMG_0842 11.03.41 AM.jpg',
// 'IMG_0843 11.03.41 AM.jpg',
// 'IMG_0844 11.03.41 AM.jpg',
'IMG_0845 11.03.41 AM.jpg',
'IMG_0846 11.03.41 AM.jpg',
'IMG_0847 11.03.41 AM.jpg',
'IMG_0848 11.03.41 AM.jpg',
'IMG_0849 11.03.41 AM.jpg',
'IMG_0850 11.03.41 AM.jpg',
'IMG_0851 11.03.41 AM.jpg',
'IMG_0852 11.03.41 AM.jpg',
'IMG_0853 11.03.41 AM.jpg',
'IMG_0854 11.03.41 AM.jpg',
'IMG_0855 11.03.41 AM.jpg',
'IMG_0856 11.03.41 AM.jpg',
'IMG_0857 11.03.41 AM.jpg',
'IMG_0868 11.03.41 AM.jpg',
'IMG_0869 11.03.41 AM.jpg',
'IMG_0870 11.03.41 AM.jpg',
'IMG_0871 11.03.41 AM.jpg',
'IMG_0872 11.03.41 AM.jpg',
'IMG_0873 11.03.41 AM.jpg',
'IMG_0874 11.03.41 AM.jpg',
'IMG_0875 11.03.41 AM.jpg',
'IMG_0876 11.03.41 AM.jpg',
'IMG_0877 11.03.41 AM.jpg',
'IMG_0878 11.03.41 AM.jpg',
'IMG_0879 11.03.41 AM.jpg',
'IMG_0880 11.03.41 AM.jpg'
//=========================================]]
							];//=========================]]
//============IMAGE LOADER=================//

var images = {};

function loadImages(sources, callback) {

  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for(var i in sources) {
    numImages++;
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
    
var canvas = document.getElementById('customHelmet');
var context = canvas.getContext('2d');

loadImages(sources, function(images) {
  for (i=0;i< 180;i++) {
    context.drawImage(images[i], 0, i*300, 400, 300);
  }
    var dataURL = canvas.toDataURL();
    //canvas.src = dataURL
		document.getElementById('customHlelmet').src = dataURL;
});

console.log(images);




