import  throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const saveData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
const parseData = JSON.parse(saveData);


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextariaInput, 500));

refs.form.addEventListener('input', e => {
formData[e.target.name] = e.target.value;
});

populateTexterea();

function onTextariaInput(e) {
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 };

function onFormSubmit(e) {
e.preventDefault();
console.log(formData);
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
};

function populateTexterea() {    
   const savedMessage = localStorage.getItem(STORAGE_KEY);
   if (savedMessage) {
    refs.form.email.value = parseData.email;
    refs.form.message.value = parseData.message;      
};
};
