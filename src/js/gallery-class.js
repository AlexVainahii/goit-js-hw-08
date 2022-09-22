import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export class Gallery{
    constructor(galleryItems){
        this.galleryItems=galleryItems;
        this.rootRef = document.querySelector(".gallery");
    }
    createGallery(){
        let galeryList = "";
        this.galleryItems.map((item) => {
          const { preview, original, description } = item;
          galeryList =
            galeryList +
            `<div class="gallery__item"><a class="gallery__link" href="${original}"> <img class="gallery__image"
            src="${preview}" data-source="${original}" alt="${description}" /> </a> </div>`;
        }); 
        this.rootRef.insertAdjacentHTML("afterbegin", galeryList);  
    }
    galerySimplebox(){
        const gallery = new SimpleLightbox('.gallery a',
        {
          captionsData:"alt",
          captionDelay:250,
        });  
    }
    init(){
     this.createGallery()
     this.galerySimplebox()   
    }
    
    }


    