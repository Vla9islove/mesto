const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_invalid'
};

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector); //Нашли все формы
  const formsArray = Array.from(forms); //Сделали из них массив

  formsArray.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      checkValidityStateButton(config, form);
    });

    checkValidityStateButton(config, form);

    const inputs = form.querySelectorAll(config.inputSelector); //Нашли все инпуты в текущей форме
    const inputsArray = Array.from(inputs); // Сделали из них массив

    inputsArray.forEach(function(input) {
      input.addEventListener('input', () => {
        checkValidityInput(config, input, form);
        checkValidityStateButton(config, form);
      });
    });
  });
};

function madeInputInvalid(config, input, errorMessageElement) { //Функция отвечающая за невалидность инпута
  input.classList.add(config.inputErrorClass);
  errorMessageElement.textContent = input.validationMessage;
};

function madeInputValid(config, input, errorMessageElement) { //Функция отвечающая за валидность инпута
  input.classList.remove(config.inputErrorClass);
  errorMessageElement.textContent = '';
};

function checkValidityInput(config, input, form) { //Функция проверяющая все инпуты в формах на валидность
  const errorMessageElement = form.querySelector(`#error-${input.id}`);

  if (input.checkValidity()) {
    madeInputValid(config, input, errorMessageElement);
  } else {
    madeInputInvalid(config, input, errorMessageElement);
  }
};

function submitButtonDisable(config, submitButton) {
  submitButton.disabled = true;
  submitButton.classList.add(config.inactiveButtonClass);
};

function submitButtonEnable(config, submitButton) {
  submitButton.disabled = false;
  submitButton.classList.remove(config.inactiveButtonClass);
};

function checkValidityStateButton(config, form) {
  const submitButton = form.querySelector(config.submitButtonSelector);

  if (form.checkValidity()) {
    submitButtonEnable(config, submitButton);
  } else {
    submitButtonDisable(config, submitButton);
  }
};

function resetAllErrorsPopup(form) { // Скидываем все ошибки на форме при открытии попапа
  form.querySelectorAll(validationConfig.inputSelector).forEach(input => {
    const errorMessageElement = form.querySelector(`#error-${input.id}`);
    if (!input.checkValidity()) {
      madeInputValid(validationConfig, input, errorMessageElement);
    };
  });
};

enableValidation(validationConfig);

// // включение валидации вызовом enableValidation
// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_invalid',
// };


// function enableValidation() {
//   const forms = document.querySelectorAll(validationConfig.formSelector); //Нашли все формы
//   const formsArray = Array.from(forms); //Сделали из них массив
//   formsArray.forEach(function(form) {
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();
//       checkValidityStateButton(form);
//     });

//     checkValidityStateButton(form);

//     const inputs = form.querySelectorAll(validationConfig.inputSelector); //Нашли все инпуты в текущей форме
//     const inputsArray = Array.from(inputs); // Сделали из них массив

//     inputsArray.forEach(function(input) {
//       input.addEventListener('input', () => {
//         checkValidityInput (input, form);
//         checkValidityStateButton (form);
//       });
//     });
//   });
// };

// function madeInputInvalid(input, errorMessageElement) { //Функция отвечающая за невалидность инпута
//   input.classList.add(validationConfig.inputErrorClass);
//   errorMessageElement.textContent = input.validationMessage;
// };

// function madeInputValid(input, errorMessageElement) { //Функция отвечающая за валидность инпута
//   input.classList.remove(validationConfig.inputErrorClass);
//   errorMessageElement.textContent = '';
// };

// function checkValidityInput(input, form) { //Функция проверяющая все инпуты в формах на валидность
//   const errorMessageElement = form.querySelector(`#error-${input.id}`);

//   if (input.checkValidity()) {
//     madeInputValid (input, errorMessageElement);
//   } else {
//     madeInputInvalid (input, errorMessageElement);
//   }
// };


// function submitButtonDisable(button) {
//   button.disabled = true;
//   button.classList.add(inactiveButtonClass);
// };

// function submitButtonEnable(button) {
//   button.disabled = false;
//   button.classList.remove(inactiveButtonClass);
// };

// function checkValidityStateButton(form) {
//   const submitButton = form.querySelector(submitButtonSelector);

//   if (form.checkValidity()) {
//     submitButtonEnable(submitButton);
//   } else {
//     submitButtonDisable(submitButton);
//   }
// };

// function resetAllErrorsPopup(form) { // Скидываем все ошибки на форме
//   form.querySelectorAll(inputSelector).forEach (input => {
//     const errorMessageElement = form.querySelector(`#error-${input.id}`);
//     if (!input.checkValidity()) {
//        madeInputValid(input, errorMessageElement);
//       };
//   });
// };

// enableValidation();

// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_invalid'
// };

// function enableValidation(config) {
//   const forms = document.querySelectorAll(config.formSelector); //Нашли все формы
//   const formsArray = Array.from(forms); //Сделали из них массив

//   formsArray.forEach(function(form) {
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();

//       checkValidityStateButton(config, form);
//     });

//     checkValidityStateButton(config, form);

//     const inputs = form.querySelectorAll(config.inputSelector); //Нашли все инпуты в текущей форме
//     const inputsArray = Array.from(inputs); // Сделали из них массив

//     inputsArray.forEach(function(input) {
//       input.addEventListener('input', () => {
//         checkValidityInput (config, input);
//         checkValidityStateButton (config, form);
//       });
//     });
//   });
// };

// function madeInputInvalid(config, input, errorMessageElement) { //Функция отвечающая за невалидность инпута
//   input.classList.add(config.inputErrorClass);
//   errorMessageElement.textContent = input.validationMessage;
// };

// function madeInputValid(config, input, errorMessageElement) { //Функция отвечающая за валидность инпута
//   input.classList.remove(config.inputErrorClass);
//   errorMessageElement.textContent = '';
// };

// function checkValidityInput(config, input, form) { //Функция проверяющая все инпуты в формах на валидность
//   const errorMessageElement = form.querySelector(`#error-${input.id}`);

//   if (input.checkValidity()) {
//     madeInputValid (config, input, errorMessageElement);
//   } else {
//     madeInputInvalid (config, input, errorMessageElement);
//   }
// };


// function submitButtonDisable(config, button) {
//   button.disabled = true;
//   button.classList.add(config.inactiveButtonClass);
// };

// function submitButtonEnable(config, button) {
//   button.disabled = false;
//   button.classList.remove(config.inactiveButtonClass);
// };

// function checkValidityStateButton(config, form) {
//   const submitButton = form.querySelector('.popup__submit');

//   if (form.checkValidity()) {
//     submitButtonEnable(config, submitButton);
//   } else {
//     submitButtonDisable(config, submitButton);
//   }
// };

// function resetAllErrorsPopup(form) { // Скидываем все ошибки на форме
//   form.querySelectorAll(validationConfig.inputSelector).forEach (input => {
//     const errorMessageElement = form.querySelector(`#error-${input.id}`);
//     if (!input.checkValidity()) {
//        madeInputValid(validationConfig, input, errorMessageElement);
//       };
//   });
// };

// enableValidation(validationConfig);
