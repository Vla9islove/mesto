// включение валидации вызовом enableValidation
const log = console.log;
// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });


function madeInputInvalid(input, errorMessageElement) { //Функция отвечающая за невалидность инпута
  input.classList.add('popup__input_type_invalid');
  errorMessageElement.textContent = input.validationMessage;
};

function madeInputValid(input, errorMessageElement) { //Функция отвечающая за валидность инпута
  input.classList.remove('popup__input_type_invalid');
  errorMessageElement.textContent = '';
};

function checkValidityInput(input, form) { //Функция проверяющая все инпуты в формах на валидность
  const errorMessageElement = form.querySelector(`#error-${input.id}`);

  if (input.checkValidity()) {
    madeInputValid (input, errorMessageElement);
  } else {
    madeInputInvalid (input, errorMessageElement);
  }
};


function submitButtonDisable(button) {
  button.disabled = true;
  button.classList.add('popup__submit_disabled');
};

function submitButtonEnable(button) {
  button.disabled = false;
  button.classList.remove('popup__submit_disabled');
};

function checkValidityStateButton(form) {
  const submitButton = form.querySelector('.popup__submit');

  if (form.checkValidity()) {
    submitButtonEnable(submitButton);
  } else {
    submitButtonDisable(submitButton);
  }
};


function enableValidation() {
  const forms = document.querySelectorAll('.popup__form'); //Нашли все формы
  const formsArray = Array.from(forms); //Сделали из них массив

  formsArray.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      form.reset();
      checkValidityStateButton(form);
    });

    checkValidityStateButton(form);

    const inputs = form.querySelectorAll('.popup__input'); //Нашли все инпуты в текущей форме
    const inputsArray = Array.from(inputs); // Сделали из них массив

    inputsArray.forEach(function(input) {
      input.addEventListener('input', () => {
        checkValidityInput (input, form);
        checkValidityStateButton (form);
      });
    });
  });
};

enableValidation();


function resetAllErrorsPopup(form) { // Скидываем все ошибки на форме
  form.querySelectorAll('.popup__input').forEach (input => {
    const errorMessageElement = form.querySelector(`#error-${input.id}`);
    if (!input.checkValidity()) {
       madeInputValid(input, errorMessageElement);
      };
  });
};

