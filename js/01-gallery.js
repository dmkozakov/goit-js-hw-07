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
            loading="lazy"
            class="gallery__image lazyload"
            data-src="${preview}"
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

if ("loading" in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement("script");

  script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossorigin = "anonymous";
  script.referrerpolicy = "no-referrer";

  document.body.appendChild(script);
}
