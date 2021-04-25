/* eslint-disable */
import "bootstrap";
import "./style.css";


const CARD = document.querySelector("#inputCard")
const CVC = document.querySelector("#inputCVC")
const AMOUNT = document.querySelector("#inputAmount")
const FIRSTNAME = document.querySelector("#inputFirstName")
const LASTNAME = document.querySelector("#inputLastName")
const CITY = document.querySelector("#inputCity")
const STATE = document.querySelector("#inputState")
const POSTALCODE = document.querySelector("#inputPostalCode")


window.onload = () => {
    isValidNumber(CARD);
    isValidNumber(CVC);
    isValidNumber(AMOUNT);
    isValidText(FIRSTNAME);
    isValidText(LASTNAME);
    isValidText(CITY);
    isValidText(STATE);
    isValidNumber(POSTALCODE);
    sendButton();
};

const isValidText = (inputElement) => {
    inputElement.addEventListener("focusout", event => {
        checkOnlyText(inputElement.value)
            ? validInputStyle(inputElement)
            : invalidInputStyle(inputElement);
    });
};
const isValidNumber = (inputElement) => {
    inputElement.addEventListener("focusout", event => {
        checkOnlyNumber(inputElement.value)
            ? validInputStyle(inputElement)
            : invalidInputStyle(inputElement);
    });
};

const invalidInputStyle = input => {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
};
const validInputStyle = input => {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
};

const checkOnlyText = text => {
    return /^[a-zA-Z]+$/.test(text);
};
const checkOnlyNumber = text => {
    return /^[a-zA-Z]+$/.test(text);
};

const sendButton = () => {
    document.querySelector("inputSend").addEventListener('submit', event => {
        event.preventDefault;
    })

};