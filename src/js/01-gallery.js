// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
let galeryList = "";
galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  galeryList =
    galeryList +
    `<div class="gallery__item"><a class="gallery__link" href="${original}"> <img class="gallery__image"
    src="${preview}" data-source="${original}" alt="${description}" /> </a> </div>`;
});
const mainGalery = document.querySelector(".gallery");
mainGalery.insertAdjacentHTML("afterbegin", galeryList);
console.log(galleryItems);

const gallery = new SimpleLightbox('.gallery a',
{
  captionsData:"alt",
  captionDelay:250,
});

