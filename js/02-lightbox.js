import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryMarkup = createGalleryMarkup(galleryItems);

const refs = {
  galleryBox: document.querySelector(".gallery"),
};

refs.galleryBox.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
  close: false,
  showCounter: false,
});

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
}

function createGalleryMarkup(item) {
  return item.map(el => createGalleryItemMarkup(el)).join("");
}
