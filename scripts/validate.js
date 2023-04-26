// включение валидации вызовом enableValidation
validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_invalid',
};


function madeInputInvalid(input, errorMessageElement) { //Функция отвечающая за невалидность инпута
  input.classList.add(validationConfig.inputErrorClass);
  errorMessageElement.textContent = input.validationMessage;
};

function madeInputValid(input, errorMessageElement) { //Функция отвечающая за валидность инпута
  input.classList.remove(validationConfig.inputErrorClass);
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
  button.classList.add(validationConfig.inactiveButtonClass);
};

function submitButtonEnable(button) {
  button.disabled = false;
  button.classList.remove(validationConfig.inactiveButtonClass);
};

function checkValidityStateButton(form) {
  const submitButton = form.querySelector(validationConfig.submitButtonSelector);

  if (form.checkValidity()) {
    submitButtonEnable(submitButton);
  } else {
    submitButtonDisable(submitButton);
  }
};


function enableValidation() {
  const forms = document.querySelectorAll(validationConfig.formSelector); //Нашли все формы
  const formsArray = Array.from(forms); //Сделали из них массив

  formsArray.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      form.reset();
      checkValidityStateButton(form);
    });

    checkValidityStateButton(form);

    const inputs = form.querySelectorAll(validationConfig.inputSelector); //Нашли все инпуты в текущей форме
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
  form.querySelectorAll(validationConfig.inputSelector).forEach (input => {
    const errorMessageElement = form.querySelector(`#error-${input.id}`);
    if (!input.checkValidity()) {
       madeInputValid(input, errorMessageElement);
      };
  });
};

