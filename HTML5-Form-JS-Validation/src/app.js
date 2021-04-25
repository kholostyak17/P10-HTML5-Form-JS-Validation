/* eslint-disable */
import "bootstrap";
import "./style.css";

const CARD = document.querySelector("#inputCard");
const CVC = document.querySelector("#inputCVC");
const AMOUNT = document.querySelector("#inputAmount");
const FIRSTNAME = document.querySelector("#inputFirstName");
const LASTNAME = document.querySelector("#inputLastName");
const CITY = document.querySelector("#inputCity");
const STATE = document.querySelector("#inputState");
const POSTALCODE = document.querySelector("#inputPostalCode");

window.onload = () => {
  sendButton();
  isValidNumber(CARD);
  isValidNumber(CVC);
  isValidNumber(AMOUNT);
  isValidText(FIRSTNAME);
  isValidText(LASTNAME);
  isValidText(CITY);
  isValidText(STATE);
  isValidNumber(POSTALCODE);
};

const isValidText = inputElement => {
  inputElement.addEventListener("input", event => {
    checkOnlyText(inputElement.value)
      ? validInputStyle(inputElement)
      : invalidInputStyle(inputElement);
  });
};
const isValidNumber = inputElement => {
  inputElement.addEventListener("input", event => {
    checkOnlyNumber(inputElement.value)
      ? validInputStyle(inputElement)
      : invalidInputStyle(inputElement);
  });
};

const invalidInputStyle = input => {
  input.style.background = "";
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};
const validInputStyle = input => {
  input.style.background = "";
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const checkOnlyText = text => {
  return /^[a-zA-Z ]+$/.test(text);
};
const checkOnlyNumber = text => {
  return /^[0-9 ]+$/.test(text);
};

const sendButton = () => {
  document.querySelector("#inputSend").addEventListener("click", event => {
    event.preventDefault();

    if (
      CARD.value == "" ||
      CVC.value == "" ||
      AMOUNT.value == "" ||
      FIRSTNAME.value == "" ||
      LASTNAME.value == "" ||
      CITY.value == "" ||
      STATE.value == "" ||
      POSTALCODE.value == ""
    ) {
      let alert = document.createElement("div");
      let alertPlace = document.querySelector("#alertPlace");
      if (alertPlace.innerHTML != "") {
        alertPlace.removeChild(alertPlace.firstChild);
      }
      alert.innerHTML = "Some fields are missing";
      alert.classList.add("alert", "alert-danger");
      alert.id = "alert";
      alertPlace.appendChild(alert);
    }
    if (CARD.value == "") {
      CARD.style.background = "#f8d7da";
    }
    if (CVC.value == "") {
      CVC.style.background = "#f8d7da";
    }
    if (AMOUNT.value == "") {
      AMOUNT.style.background = "#f8d7da";
    }
    if (FIRSTNAME.value == "") {
      FIRSTNAME.style.background = "#f8d7da";
    }
    if (LASTNAME.value == "") {
      LASTNAME.style.background = "#f8d7da";
    }
    if (CITY.value == "") {
      CITY.style.background = "#f8d7da";
    }
    if (STATE.value == "") {
      STATE.style.background = "#f8d7da";
    }
    if (POSTALCODE.value == "") {
      POSTALCODE.style.background = "#f8d7da";
    }
    if (
      CARD.value != "" &&
      CVC.value != "" &&
      AMOUNT.value != "" &&
      FIRSTNAME.value != "" &&
      LASTNAME.value != "" &&
      CITY.value != "" &&
      STATE.value != "" &&
      POSTALCODE.value != ""
    ) {
      if (alertPlace.innerHTML != "") {
        alertPlace.removeChild(alertPlace.firstChild);
      }
    }
  });
};
