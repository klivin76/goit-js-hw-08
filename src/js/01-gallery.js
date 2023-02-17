import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector(`.gallery`);
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>    
</div>`;
    })
    .join(``);
}

// gallery.addEventListener(`click`, onGalleryContainerClick);
// function onGalleryContainerClick(e) {
//   e.preventDefault();
//   if (!e.target.dataset.source) return;

//   function handleEscape(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }

  const lightbox = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250 });
//   const instance = basicLightbox.create(
//     `
//     <img src="${e.target.dataset.source}" width="800" height="600"> `,
//     {
//       onShow: () => document.addEventListener('keydown', handleEscape),
//       onClose: () => document.removeEventListener('keydown', handleEscape),
//     }
//   );
//   instance.show();
   lightbox.show();

console.log(galleryItems);
