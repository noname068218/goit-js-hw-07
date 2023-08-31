import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeImgAll = (transaction) => {
  const { original, preview, description } = transaction;

  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" data-caption="${description}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
};

const galleryContainer = document.querySelector(".gallery");
const makeTransactionImg = galleryItems.map(makeImgAll).join("");
galleryContainer.insertAdjacentHTML("beforeend", makeTransactionImg);

let gallery = new SimpleLightbox(".gallery__item a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});
