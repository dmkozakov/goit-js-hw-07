import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  galleryBox: document.querySelector(".gallery"),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);

refs.galleryBox.addEventListener("click", onGalleryItemClick);

function createPictureItemMarkup({ preview, original, description }) {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
      </a>
    </div>
    `;
}

function createGalleryMarkup(items) {
  return items.map(item => createPictureItemMarkup(item)).join("");
}

function onGalleryItemClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyClose);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyClose);
      },
    }
  );

  instance.show();

  function onEscKeyClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
