import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onImageClick);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
      <a class="gallery__link" href = "${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join('');
};


function onImageClick(event) {
    const imageSrc = event.target.dataset.source;
    const isGalleryImage = event.target.classList.contains("gallery__image");
    event.preventDefault();
    if (!isGalleryImage) {
        return;
    }

    const instance = basicLightbox.create(
        `<div class="modal">
        <img src="${imageSrc}" width="800" height="600"/>
    </div>`,
        {
            onShow: () => {
                window.addEventListener("keydown", onEscClick);
            },
            onClose: () => {
                window.removeEventListener("keydown", onEscClick);
            },
        });

function onEscClick(event){
    if (event.code === "Escape") {
        instance.close();
    };
};
instance.show();
}




