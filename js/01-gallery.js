import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeImgAll = (transaction) => {
  const { original, preview, description } = transaction;

  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
};

const galleryContainer = document.querySelector(".gallery");
const makeTransactionImg = galleryItems.map(makeImgAll).join("");
galleryContainer.insertAdjacentHTML("beforeend", makeTransactionImg);
galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  const targetElemnt = e.target.closest(".gallery__item");
  const preview = targetElemnt
    .querySelector(".gallery__image")
    .getAttribute("src");
  const original = targetElemnt
    .querySelector(".gallery__image")
    .getAttribute("data-source");
  const description = targetElemnt
    .querySelector(".gallery__image")
    .getAttribute("alt");

  const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);

  instance.show();

  const escapeWindow = (escEvent) => {
    if (escEvent.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escapeWindow);
    }
  };
  document.addEventListener("keydown", escapeWindow);
});
