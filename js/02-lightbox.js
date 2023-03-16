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
      <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}"/>
    </a>`;
}

function createGalleryMarkup(item) {
  return item.map(el => createGalleryItemMarkup(el)).join("");
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

// const images = [
//   "https://cdn.pixabay.com/photo/2023/02/04/13/07/sandpipers-7767138__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/11/12/26/gaiazoo-7844381__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/09/15/56/monkeys-7840321__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/12/17/35/hare-7847442__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/12/22/16/09/spider-web-7672420__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/08/22/17/54/rock-formation-7404193__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/10/04/14/27/cat-7498364__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/09/19/14/53/monk-7465763__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/12/16/14/49/woman-7659866__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/09/21/53/coast-7840926__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/09/20/02/cat-7840767__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/03/20/40/starling-7828426__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/03/17/36/peafowl-7828140__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/06/09/18/58/amphibian-7253136__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/01/15/22/crocodile-7823344__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/02/26/14/04/deer-7815910__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/02/26/16/06/squirrel-7816229__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/03/13/28/bird-7827680__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/21/22/33/hamburg-7735229__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/02/17/19/59/dog-7796822__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/10/09/44/koi-pond-7709388__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/02/02/17/11/chickens-7763394__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/02/04/09/20/castle-7766794__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/02/14/22/12/birds-7790506__340.jpg",
//   "https://cdn.pixabay.com/photo/2019/11/19/22/25/animal-4638681__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/07/19/16/05/birds-7332433__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/23/17/38/seagull-7739257__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/11/21/12/24/swan-7606921__340.jpg",
//   "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/12/22/02/56/dog-7671355__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/11/15/06/35/night-7593233__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/23/15/02/beaver-rat-7738914__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/19/10/24/castle-7728772__340.jpg",
//   "https://cdn.pixabay.com/photo/2022/10/31/20/27/lioness-7560708__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/26/18/09/zebra-7746719__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/27/14/56/boat-7748824__340.jpg",
//   "https://cdn.pixabay.com/photo/2023/01/12/15/05/flamingo-7714344__340.jpg",
// ];

// const newObj = images
//   .map(
//     el => `{
//     preview: "${el}",
//     original: "${el.replace("340", "1280")}",
//     description: "Swan",
//   },`
//   )
//   .join("");

// console.log(newObj);
