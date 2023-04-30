import { initialCards } from './constants.js';

const elementTemplate = document.getElementById("element-template"); // Нашли темплейт
const cardSection = document.querySelector(".elements__list"); //нашли где создаются карточки

//Модальные окна (PopUp)
const popups = document.querySelectorAll(".popup");
const popupEditInfo = document.querySelector(".popup_type_edit-info"); //Попап с информацией профиля
const popupAddPlace = document.querySelector(".popup_type_add-place"); //Попап с добавлением карточки
const popupZoomPlace = document.querySelector(".popup_type_zoom-place");

const formPopupAddPlace = popupAddPlace.querySelector(".popup__form");

//Кнопки модальных окон
const buttonProfileEdit = document.querySelector(".profile__edit"); //Кнопка изменения информации в попапе с информацией
const buttonAddPlace = document.querySelector(".profile__add-element"); //Кнопка добавления карточки

const buttonsClosePopup = document.querySelectorAll(".popup__close"); //Кнопки закрытия попапа

//Модальное окно и его инпуты в котором происходит изменением информации профиля
const popupProfilForm = popupEditInfo.querySelector(".popup__form"); //Форма внутри попапа с информацией профиля
const popupProfilInputName = popupEditInfo.querySelector(".popup__input_type_name"); //Поле ввода имени в попапе
const popupProfilInputStatus = popupEditInfo.querySelector(".popup__input_type_status"); //Поле ввода статуса в попапе

//Модальное окно и его инпуты в котором происходит добавления карточки в профиль
const popupPlaceForm = popupAddPlace.querySelector(".popup__form");
const inputPlaceName = popupPlaceForm.querySelector(".popup__input_type_place-name");
const inputPlaceImage = popupPlaceForm.querySelector(".popup__input_type_photoUrl");

//Модальное окно и его элементы при клике на который происходит увеличение картинки карточки
const popupImage = popupZoomPlace.querySelector(".popup__image");
const popupImageDescription = popupZoomPlace.querySelector(".popup__image-description");

const profileName = document.querySelector(".profile__name"); //Строка в которой происходит замена имени
const profileStatus = document.querySelector(".profile__status"); //Строка в которой происходит замена статуса

const createPlaceElement = (placeData) => { // placeData - это информация содержащаяся в объекте (фото, название).
  const placeElement = elementTemplate.content.querySelector(".element").cloneNode(true); //клонируем нашу карточку темплейт
  const placeCardName = placeElement.querySelector(".element__title"); //нашли название карточки в темплейте
  const placeCardImage = placeElement.querySelector(".element__image");//нашли картинку карточки в темплейте

  placeCardName.textContent = placeData.name;
  placeCardImage.src = placeData.link;
  placeCardImage.alt = placeData.name;

  const deleteButtonPlaceElement = placeElement.querySelector (".element__delete-image"); //Нашли кнопку удалить в темплейте
  const likeButtonPlaceElement = placeElement.querySelector (".element__like-icon"); //Нашли кнопку лайка в темплейте

  const handleDelete = () => {
    placeElement.remove();
  };

  const handleLike = () => {
    likeButtonPlaceElement.classList.toggle("element__like-icon_active");
  };

  deleteButtonPlaceElement.addEventListener('click', handleDelete);
  likeButtonPlaceElement.addEventListener('click', handleLike);

  placeCardImage.addEventListener('click', () => {
    popupImage.src = placeData.link;
    popupImage.alt = placeData.name;
    popupImageDescription.textContent = placeData.name;
    openPopup(popupZoomPlace);
  });


  return placeElement;
};

function renderPlaceElement(placeElement) {
  cardSection.append(placeElement);
};

function renderNewPlaceElement(placeElement) {
  cardSection.prepend(placeElement);
};

initialCards.forEach((place) => {
  renderPlaceElement(createPlaceElement(place));
});

const openPopup = (popup) => { //Универcальная функция открытия попапа
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

const closePopup = (popup) => { //Универсальная функция закрытия попапа
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};

buttonProfileEdit.addEventListener('click', () => { // Слушатель клика на карандаш
  resetAllErrorsPopup(popupEditInfo);
  popupProfilInputName.value = profileName.textContent;
  popupProfilInputStatus.value = profileStatus.textContent;
  openPopup(popupEditInfo);
});

buttonAddPlace.addEventListener('click', () => { // Слушатель клика на кнопку добавления нового места
  resetAllErrorsPopup(popupAddPlace);
  checkValidityStateButton(validationConfig, formPopupAddPlace);
  //сюда нужна функция отвечающая за состояние кнопки при не/валидности
  openPopup(popupAddPlace);
});

buttonsClosePopup.forEach(function(button) { //Слушатель клика на кнопку закрытия
  button.addEventListener('click', function() {
    closePopup(popupEditInfo);
    closePopup(popupAddPlace);
    closePopup(popupZoomPlace);
  });
});

popupProfilForm.addEventListener('submit', editProfile);

function editProfile (event) {
  event.preventDefault();

  const name = popupProfilInputName.value;
  const status = popupProfilInputStatus.value;

  profileName.textContent = name;
  profileStatus.textContent = status;

  closePopup(popupEditInfo);
};

popupAddPlace.addEventListener('submit', addPlace);

function addPlace (event) {
  event.preventDefault();

  const name = inputPlaceName.value;
  const link = inputPlaceImage.value;

  const cardData =  {
    name,
    link,
    alt: name
  };

  renderNewPlaceElement(createPlaceElement(cardData));
  closePopup(popupAddPlace);
  popupPlaceForm.reset();
};

// function closePopupEsc(evt) { // функция закрытия по эскейпу такая же как и снизу, только поиск происходит сразу в функции
//   if (evt.key === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'));
//   }
// }

function closePopupEsc(evt) { // функция закрытия по эскейпу(Esc)
  if (evt.key === 'Escape') {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  }
};

popups.forEach((popup) => { // Закрытие попапа по оверлею
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
});


// function closePopupOnOverlay (evt){
//   if (evt.currentTarget === evt.target) {
//     closePopup(evt.currentTarget);
//   }
// };

// function closeOverlay(popup){  // Работает, но почему-то коряво, только после нажатия на крестик начинает реагировать на оверлей
//   popup.addEventListener('click', closePopupOnOverlay);
// };

// popups.forEach (item => { // Работает, но сложная запись, плюс используем повторное закрытие по кнопке, такой функционал у нас уже есть
//   const buttonsClosePopup = item.querySelector('.popup__close');
//   buttonsClosePopup.addEventListener('click', () => closePopup(item));
//   item.addEventListener('click', closePopupOnOverlay);
// });
