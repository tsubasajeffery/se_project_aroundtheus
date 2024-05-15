const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* Element */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileModalCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector("#add-card-button");
const addNewCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = addNewCardModal.querySelector(
  "#modal-close-button"
);
const addCardForm = addNewCardModal.querySelector(".modal__form");
const addCardTitleInput = addCardForm.querySelector(".modal__input_type_title");
const addCardUrlInput = addCardForm.querySelector(".modal__input_type_url");
const cardsWrap = document.querySelector(".cards__list");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__preview-image");
const previewDescription = previewImageModal.querySelector(
  ".modal__preview-description"
);
const previewImageModalCloseButton =
  previewImageModal.querySelector(".modal__close");

/* Function */

function closeProfilePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function closeAddCardPopup() {
  addNewCardModal.classList.remove("modal_opened");
}

function closePreviewImagePopup() {
  previewImageModal.classList.remove("modal_opened");
}

function renderCard(cardData, cardsWrap) {
  const cardElement = getCardElement(cardData);
  cardsWrap.prepend(cardElement);
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeProfilePopup();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardsWrap.prepend(cardElement);
  closeAddCardPopup();
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  const trashButton = cardElement.querySelector(".card__trash-button");

  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;

  cardImageElement.addEventListener("click", () => {
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewDescription.textContent = cardData.name;
    previewImageModal.classList.add("modal_opened");
  });

  return cardElement;
}

// form listeners

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

// profile card buttons
profileEditButton.addEventListener("click", function () {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileModalCloseButton.addEventListener("click", () => closeProfilePopup());

// add new card buttons
addNewCardButton.addEventListener("click", function () {
  addNewCardModal.classList.add("modal_opened");
});

addCardModalCloseButton.addEventListener("click", () => closeAddCardPopup());

// preview image button

previewImageModalCloseButton.addEventListener("click", () =>
  closePreviewImagePopup()
);

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
