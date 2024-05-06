const loginCard = document.querySelector('.login-card');
const successCard = document.querySelector('.success')
const dismissBtn = document.querySelector('.dismiss-btn')
const form = document.querySelector('.login-card__content__form');
const input = document.querySelector('.login-card__content__form__input');
const invalidMessage = document.querySelector('.invalid-email');
const email = document.querySelector('.email')

input.addEventListener('input', clearError);
dismissBtn.addEventListener('click', switchSections)
form.addEventListener('submit', (e) => {
   e.preventDefault(e);

   const formData = new FormData(e.target);
   const data = Object.fromEntries(formData);

   const emailErrorMessage = validateEmail(data.email);
   if (emailErrorMessage) {
      console.log(emailErrorMessage);
      input.classList.add('login-card__content__form__input--invalid');
      invalidMessage.innerText = emailErrorMessage;
   }
   if (!emailErrorMessage) {
    switchSections()
    email.innerText = data.email
   }
});

function validateEmail(email) {
   if (!email) return 'Email required';

   const isValidEmail = /^\S+@\S+$/g;
   if (!isValidEmail.test(email)) {
      return 'Valid email required';
   }

   return '';
}

function clearError() {
   invalidMessage.innerText = '';
   input.classList.remove('login-card__content__form__input--invalid');
}

function switchSections() {
   loginCard.classList.toggle('hidden');
   successCard.classList.toggle('hidden');
}
