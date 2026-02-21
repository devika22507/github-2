const formBox = document.querySelector('.form-box');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.onclick = () => {
  formBox.style.transform = "translateX(-50%)";
};

showLogin.onclick = () => {
  formBox.style.transform = "translateX(0)";
};
