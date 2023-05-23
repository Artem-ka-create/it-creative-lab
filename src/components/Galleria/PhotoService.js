export const PhotoService = {



    
    getData() {
         let data = []
        for(let i=1;i<21;i++){
            data.push(
                {
                    itemImageSrc: 'galery/'+(i+'') + '.jpg',
                    thumbnailImageSrc: 'galery/' + (i + '') + '.jpg',
                    alt: 'Description for Image ' + (i + ''),
                    title: 'Title ' + (i + '')
                }
            );
        };


        return data;
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

