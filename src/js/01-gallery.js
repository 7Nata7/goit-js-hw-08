import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery")
galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

function createGalleryItem({ preview, original, description }) {
 return `
 <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  onOpen: () => {
    window.addEventListener("keydown", onKeyPress);
  },
  onClose: () => {
    window.removeEventListener("keydown", onKeyPress);
  },
});

function onKeyPress(e) {
  if (e.code === "Escape") {
    lightbox.close();
  }
}