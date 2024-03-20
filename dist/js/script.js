const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

//рандомный разворот 3ех карточек
const items = document.querySelectorAll(".skills__item");
let indexes = Array.from({ length: items.length }, (_, i) => i);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle(indexes);

let currentIndex1 = 0;
let currentIndex2 = 1;
let currentIndex3 = 2;

function rotateCards() {
  items.forEach((item) => item.classList.remove("rotate-360"));

  items[indexes[currentIndex1]].classList.add("rotate-360");
  items[indexes[currentIndex2]].classList.add("rotate-360");
  items[indexes[currentIndex3]].classList.add("rotate-360");

  currentIndex1 = (currentIndex1 + 3) % items.length;
  currentIndex2 = (currentIndex2 + 3) % items.length;
  currentIndex3 = (currentIndex3 + 3) % items.length;
}

setInterval(rotateCards, 7000); // Поворачиваем каждые 7 секунд (7000 миллисекунд)
