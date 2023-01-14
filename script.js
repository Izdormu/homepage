
const uaLang = document.querySelector('.ua_lang');
const enLang = document.querySelector('.en_lang');
const toggleLangBtn = document.getElementById("toggleLangBtn");
const ukrainian = "Change to ukrainian"
const english = "Змінити на англійську"

toggleLangBtn.addEventListener('click', toggleLangMode);

function toggleLangMode() {
  enLang.hidden = !enLang.hidden;
  uaLang.hidden = !uaLang.hidden;
  if (toggleLangBtn.innerHTML === english) {
    toggleLangBtn.innerHTML = ukrainian;
  } else {
    toggleLangBtn.innerHTML = english;
  }
}

