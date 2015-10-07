// [[BayViewGoes Here]]
var sources = [
//A.0-> iPhone (Burst Photo Collection -> Photos (Device Transfer) 
				
		//B.0 -> Filenames into Numbers Spread Sheet (add quotes) 
		//B.1-> Create .CSV file then DELETE col after opening new .CSV file 
				
						//C.0-> Dropped Folder (Bay360) of Images (180) in to root directory 
						//C.1-> touch bay360.html bay360.js (in *Bay360 Folder*)


								//D.0 -> Copy & Pasted .csv file text (in text-editor) ->  Array of "sources"  
'IMG_0712 11.03.42 AM.jpg',
'IMG_0713 11.03.42 AM.jpg',
'IMG_0714 11.03.42 AM.jpg',
'IMG_0715 11.03.42 AM.jpg',
'IMG_0716 11.03.42 AM.jpg',
'IMG_0717 11.03.42 AM.jpg',
'IMG_0718 11.03.42 AM.jpg',
'IMG_0719 11.03.42 AM.jpg',
'IMG_0720 11.03.42 AM.jpg',
'IMG_0721 11.03.42 AM.jpg',
'IMG_0722 11.03.42 AM.jpg',
'IMG_0723 11.03.42 AM.jpg',
'IMG_0724 11.03.42 AM.jpg',
'IMG_0725 11.03.42 AM.jpg',
'IMG_0726 11.03.42 AM.jpg',
'IMG_0727 11.03.42 AM.jpg',
'IMG_0728 11.03.42 AM.jpg',
'IMG_0729 11.03.42 AM.jpg',
'IMG_0730 11.03.42 AM.jpg',
'IMG_0731 11.03.42 AM.jpg',
'IMG_0732 11.03.42 AM.jpg',
'IMG_0733 11.03.42 AM.jpg',
'IMG_0734 11.03.42 AM.jpg',
'IMG_0735 11.03.42 AM.jpg',
'IMG_0736 11.03.42 AM.jpg',
'IMG_0737 11.03.42 AM.jpg',
'IMG_0738 11.03.42 AM.jpg',
'IMG_0739 11.03.42 AM.jpg',
'IMG_0740 11.03.42 AM.jpg',
'IMG_0741 11.03.42 AM.jpg',
'IMG_0742 11.03.42 AM.jpg',
'IMG_0743 11.03.42 AM.jpg',
'IMG_0744 11.03.42 AM.jpg',
'IMG_0745 11.03.42 AM.jpg',
'IMG_0746 11.03.42 AM.jpg',
'IMG_0747 11.03.42 AM.jpg',
'IMG_0748 11.03.42 AM.jpg',
'IMG_0749 11.03.42 AM.jpg',
'IMG_0750 11.03.42 AM.jpg',
'IMG_0751 11.03.42 AM.jpg',
'IMG_0752 11.03.42 AM.jpg',
'IMG_0753 11.03.42 AM.jpg',
'IMG_0754 11.03.42 AM.jpg',
'IMG_0755 11.03.42 AM.jpg',
'IMG_0756 11.03.42 AM.jpg',
'IMG_0757 11.03.42 AM.jpg',
'IMG_0758 11.03.42 AM.jpg',
'IMG_0759 11.03.42 AM.jpg',
'IMG_0760 11.03.42 AM.jpg',
'IMG_0761 11.03.42 AM.jpg',
'IMG_0762 11.03.42 AM.jpg',
'IMG_0763 11.03.42 AM.jpg',
'IMG_0764 11.03.42 AM.jpg',
'IMG_0765 11.03.42 AM.jpg',
'IMG_0766 11.03.42 AM.jpg',
'IMG_0767 11.03.42 AM.jpg',
'IMG_0768 11.03.42 AM.jpg',
'IMG_0769 11.03.42 AM.jpg',
'IMG_0770 11.03.42 AM.jpg',
'IMG_0771 11.03.42 AM.jpg',
'IMG_0772 11.03.42 AM.jpg',
'IMG_0773 11.03.42 AM.jpg',
'IMG_0774 11.03.42 AM.jpg',
'IMG_0775 11.03.42 AM.jpg',
'IMG_0776 11.03.42 AM.jpg',
'IMG_0777 11.03.42 AM.jpg',
'IMG_0778 11.03.42 AM.jpg',
'IMG_0779 11.03.42 AM.jpg',
'IMG_0780 11.03.42 AM.jpg',
'IMG_0781 11.03.42 AM.jpg',
'IMG_0782 11.03.42 AM.jpg',
'IMG_0783 11.03.42 AM.jpg',
'IMG_0784 11.03.42 AM.jpg',
'IMG_0785 11.03.42 AM.jpg',
'IMG_0786 11.03.42 AM.jpg',
'IMG_0787 11.03.42 AM.jpg',
'IMG_0788 11.03.42 AM.jpg',
'IMG_0789 11.03.41 AM.jpg',
'IMG_0790 11.03.41 AM.jpg',
'IMG_0791 11.03.41 AM.jpg',
'IMG_0792 11.03.41 AM.jpg',
'IMG_0793 11.03.41 AM.jpg',
'IMG_0794 11.03.41 AM.jpg',
'IMG_0796 11.03.41 AM.jpg',
'IMG_0797 11.03.41 AM.jpg',
'IMG_0798 11.03.41 AM.jpg',
'IMG_0799 11.03.41 AM.jpg',
'IMG_0800 11.03.41 AM.jpg',
'IMG_0801 11.03.41 AM.jpg',
'IMG_0802 11.03.41 AM.jpg',
'IMG_0803 11.03.41 AM.jpg',
'IMG_0804 11.03.41 AM.jpg',
'IMG_0805 11.03.41 AM.jpg',
'IMG_0806 11.03.41 AM.jpg',
'IMG_0807 11.03.41 AM.jpg',
'IMG_0808 11.03.41 AM.jpg',
'IMG_0809 11.03.41 AM.jpg',
'IMG_0810 11.03.41 AM.jpg',
'IMG_0811 11.03.41 AM.jpg',
'IMG_0812 11.03.41 AM.jpg',
'IMG_0813 11.03.41 AM.jpg',
'IMG_0814 11.03.41 AM.jpg',
'IMG_0815 11.03.41 AM.jpg',
'IMG_0816 11.03.41 AM.jpg',
'IMG_0817 11.03.41 AM.jpg',
'IMG_0818 11.03.41 AM.jpg',
'IMG_0819 11.03.41 AM.jpg',
'IMG_0820 11.03.41 AM.jpg',
'IMG_0821 11.03.41 AM.jpg',
'IMG_0822 11.03.41 AM.jpg',
'IMG_0823 11.03.41 AM.jpg',
'IMG_0824 11.03.41 AM.jpg',
'IMG_0825 11.03.41 AM.jpg',
'IMG_0826 11.03.41 AM.jpg',
'IMG_0827 11.03.41 AM.jpg',
'IMG_0828 11.03.41 AM.jpg',
'IMG_0829 11.03.41 AM.jpg',
'IMG_0830 11.03.41 AM.jpg',
'IMG_0831 11.03.41 AM.jpg',
'IMG_0832 11.03.41 AM.jpg',
'IMG_0833 11.03.41 AM.jpg',
'IMG_0834 11.03.41 AM.jpg',
'IMG_0835 11.03.41 AM.jpg',
'IMG_0836 11.03.41 AM.jpg',
'IMG_0837 11.03.41 AM.jpg',
'IMG_0838 11.03.41 AM.jpg',
'IMG_0839 11.03.41 AM.jpg',
'IMG_0840 11.03.41 AM.jpg',
'IMG_0841 11.03.41 AM.jpg',
'IMG_0842 11.03.41 AM.jpg',
'IMG_0843 11.03.41 AM.jpg',
'IMG_0844 11.03.41 AM.jpg',
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
'IMG_0858 11.03.41 AM.jpg',
'IMG_0859 11.03.41 AM.jpg',
'IMG_0860 11.03.41 AM.jpg',
'IMG_0861 11.03.41 AM.jpg',
'IMG_0862 11.03.41 AM.jpg',
'IMG_0863 11.03.41 AM.jpg',
'IMG_0864 11.03.41 AM.jpg',
'IMG_0865 11.03.41 AM.jpg',
'IMG_0866 11.03.41 AM.jpg',
'IMG_0867 11.03.41 AM.jpg',
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
'IMG_0880 11.03.41 AM.jpg',
'IMG_0881.jpg',
'IMG_0882.jpg',
'IMG_0883.jpg',
'IMG_0884.jpg',
'IMG_0885.jpg',
'IMG_0886.jpg',
'IMG_0887.jpg',
'IMG_0888.jpg',
'IMG_0889.jpg',
'IMG_0890.jpg'
							];


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
        
      for (i=0;i< 180;i++) {
        // console.log(images[i]);
        context.drawImage(images[i], 0, i*600, 800, 600);

      }
        var dataURL = canvas.toDataURL();
  			document.getElementById('customHlelmet').src = dataURL;
    });





