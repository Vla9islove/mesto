const popupEditInfo = document.querySelector(".popup_type_edit-info"); //Сам попап с информацией профиля
const buttonProfileEdit = document.querySelector(".profile__edit"); //Кнопка изменения информации
const buttonCloseProfileEdit = popupEditInfo.querySelector(".popup__close"); //Кнопка закрытия попапа

const popupProfilForm = popupEditInfo.querySelector(".popup__form"); //Форма внутри попапа с информацией профиля
const popupProfilInputName = popupEditInfo.querySelector(".popup__input_type-name"); //Поле ввода имени в попапе
const popupProfilInputStatus = popupEditInfo.querySelector(".popup__input_type-status"); //Поле ввода статуса в попапе
const buttonSubmitProfilForm = popupEditInfo.querySelector(".popup__submit"); //Кнопка отправки информации


console.log(buttonProfileEdit);
console.log(popupEditInfo);
console.log(buttonCloseProfileEdit);
console.log(popupProfilInputName);
console.log(popupProfilInputStatus);
console.log(popupProfilForm);
console.log(buttonSubmitProfilForm);


// Открытие попап с информацией

function openPopupInfo() {
  popupEditInfo.classList.add("popup_opened");
}

buttonProfileEdit.addEventListener("click", openPopupInfo);

// Закрытие попапа с информацией

function closePopupInfo() {
  popupEditInfo.classList.remove("popup_opened");
}

buttonCloseProfileEdit.addEventListener("click", closePopupInfo);

function handleFormSubmit (evt) {
  evt.preventDefault();

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);


popupProfilForm.addEventListener("submit")
