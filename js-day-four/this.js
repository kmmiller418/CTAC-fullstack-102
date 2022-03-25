const photoSlideShow = {
    photoList: ['cool-tree.jpg', 'cool-rock.jpg', 'cool-fruit.jpg'],
    currentPhotoIndex: 0,
    nextPhoto: function(){
        if (this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow");
        };
    },
    prevPhoto: function(){
        if (this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow");
        }
    },
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    }
};

console.log(photoSlideShow.nextPhoto());