const popupEditInfo = document.querySelector(".popup_type_edit-info"); //Сам попап с информацией профиля
const buttonProfileEdit = document.querySelector(".profile__edit"); //Кнопка изменения информации
const buttonCloseProfileEdit = popupEditInfo.querySelector(".popup__close"); //Кнопка закрытия попапа

const popupProfilForm = popupEditInfo.querySelector(".popup__form"); //Форма внутри попапа с информацией профиля
const popupProfilInputName = popupEditInfo.querySelector(".popup__input_type_name"); //Поле ввода имени в попапе
const popupProfilInputStatus = popupEditInfo.querySelector(".popup__input_type_status"); //Поле ввода статуса в попапе

const profileName = document.querySelector(".profile__name") //Строка в которой происходит замена имени
const profileStatus = document.querySelector(".profile__status") //Строка в которой происходит замена статуса


// Открытие попап с информацией

function openPopupInfo() {
  popupEditInfo.classList.add("popup_opened");

  popupProfilInputName.value = profileName.textContent;
  popupProfilInputStatus.value = profileStatus.textContent;

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

  profileName.textContent = name;
  profileStatus.textContent = status;
  closePopupInfo();
}
