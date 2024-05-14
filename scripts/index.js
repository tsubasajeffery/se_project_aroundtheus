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
const newCardTitleInput = document.querySelector("#add-card-title-input");
const newCardUrlInput = document.querySelector("#add-card-url-input");

/* Function */

function closeProfilePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function closeAddCardPopup() {
  addNewCardModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  // clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  // access the card title and image and store them in variables
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  // set the path to the image to the link field of the object
  cardImageElement.src = cardData.link;
  // set the image alt text to the name field of the object
  cardImageElement.alt = cardData.name;
  // set the card title to the name field of the object, too
  cardTitleElement.textContent = cardData.name;
  // return the ready HTML element with the filled-in data
  return cardElement;
}

profileEditButton.addEventListener("click", function () {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileModalCloseButton.addEventListener("click", () => closeProfilePopup());

profileEditForm.addEventListener("submit", function (e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeProfilePopup();
});

// add new card button
addNewCardButton.addEventListener("click", function () {
  addNewCardModal.classList.add("modal_opened");
});

addCardModalCloseButton.addEventListener("click", () => closeAddCardPopup());

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});
