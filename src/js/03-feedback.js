import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(saveForm, 500));
form.addEventListener("submit", submitForm);

loadFormValues();
function loadFormValues() {
  const storedValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (storedValues) {
    form.elements.email.value = storedValues.email;
    form.elements.message.value = storedValues.message;
  }
}

function saveForm(e) {
    e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const formValues = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
}

function submitForm(e) {
  e.preventDefault();
const email = form.elements.email.value;
const message = form.elements.message.value;
  localStorage.removeItem(STORAGE_KEY);
console.log({ email, message });
  form.reset();
 }

