const popupEditInfo = document.querySelector(".popup_type_edit-info"); //Сам попап с информацией профиля
const buttonProfileEdit = document.querySelector(".profile__edit"); //Кнопка изменения информации
const buttonCloseProfileEdit = popupEditInfo.querySelector(".popup__close"); //Кнопка закрытия попапа

const popupProfilForm = popupEditInfo.querySelector(".popup__form"); //Форма внутри попапа с информацией профиля
const popupProfilInputName = popupEditInfo.querySelector(".popup__input_type-name"); //Поле ввода имени в попапе
const popupProfilInputStatus = popupEditInfo.querySelector(".popup__input_type-status"); //Поле ввода статуса в попапе
const buttonSubmitProfilForm = popupEditInfo.querySelector(".popup__submit"); //Кнопка отправки информации

const profileName = document.querySelector(".profile__name") //Строка в которой происходит замена имени
const profileStatus = document.querySelector(".profile__status") //Строка в которой происходит замена статуса

console.log(buttonProfileEdit);
console.log(popupEditInfo);
console.log(buttonCloseProfileEdit);
console.log(popupProfilInputName);
console.log(popupProfilInputStatus);
console.log(popupProfilForm);
console.log(buttonSubmitProfilForm);
console.log(profileName);
console.log(profileStatus);


// Открытие попап с информацией

function openPopupInfo() {
  popupEditInfo.classList.add("popup_opened");

  popupProfilInputName.value = profileName.innerHTML;
  popupProfilInputStatus.value = profileStatus.innerHTML;

}

buttonProfileEdit.addEventListener("click", openPopupInfo);

// Закрытие попапа с информацией

function closePopupInfo() {
  popupEditInfo.classList.remove("popup_opened");
}

buttonCloseProfileEdit.addEventListener("click", closePopupInfo);

popupProfilForm.addEventListener('submit', editProfile);

function editProfile (event) {
  event.preventDefault();

  const name = popupProfilInputName.value;

  const status = popupProfilInputStatus.value;

  profileName.innerHTML = name;
  profileStatus.innerHTML = status;

  popupEditInfo.classList.remove("popup_opened");
}
