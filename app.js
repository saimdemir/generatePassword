const passwordInput = document.querySelector(".password-box input"),
copyIcon = document.querySelector(".password-box .copy-icon"),
rangeInput = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number"),
generateButton = document.querySelector(".generate-button");

//karakter oluşturmak
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//this function will be called on, page reload, generateButton clicked & rangeInput slide
const generatePassword = () => {
let newPassword = "";

//rate vermek
for (let i = 0; i < rangeInput.value; i++) {
  let randomNumbers = Math.floor(Math.random() * allCharacters.length);
  newPassword += allCharacters[randomNumbers];
}
passwordInput.value = newPassword;
copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //ikonların yerini değiştirme
};

rangeInput.addEventListener("input", () => {
sliderNumber.innerText = rangeInput.value;
generatePassword();
});

//ikonu değiştirme
//ikonu değiştirme
copyIcon.addEventListener("click", () => {
navigator.clipboard.writeText(passwordInput.value);
copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //ikonların yerini değiştirme
});

generatePassword();
generateButton.addEventListener("click", generatePassword);

