const reviews = [
  {
    img: "./images/ivana.jpg",
    name: "Ivana Cajina",
    job: "photographer",
    info: `Lorem  dolor sit amet consectetur adipisicing elit. Consectetur
    dolorum ipsam, corporis numquam itaque hic assumenda aspernatur quo
    quaerat id.`,
  },
  {
    img: "./images/ayo.jpg",
    name: "Ayo  Agusiende",
    job: "Web Dev",
    info: `dolor, voluptate praesentium asperiores ratione esse voluptatibus et
          possimus labore.`,
  },
  {
    img: "./images/brook.jpg",
    name: "Brook Cagle",
    job: "ux designer",
    info: `ipsum dolor sit amet consectetur adipisicing elit. Consectetur
    dolorum ipsam, corporis numquam itaque hic assumenda aspernatur quo
    quaerat id.`,
  },
  {
    img: "./images/foto.jpg",
    name: "Foto Sushie",
    job: "Manager",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
    dolorum ipsam, corporis numquam itaque hic assumenda aspernatur quo
    quaerat id.`,
  },
  {
    img: "./images/elizeu.jpg",
    name: "Elizeu Dias",
    job: "Web Dev",
    info: `sit amet consectetur adipisicing elit. Consectetur
    dolorum ipsam, corporis numquam itaque hic assumenda aspernatur quo
    quaerat id.`,
  },
  {
    img: "./images/yingchou.jpg",
    name: "Yingchou Han",
    job: "software ingineer",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
    dolorum ipsam, corporis numquam itaque hic assumenda aspernatur quo
    quaerat id.`,
  },
];

const img = document.querySelector(".person-img");
const name = document.querySelector(".authur");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const randBtn = document.querySelector(".random");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  displayPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  displayPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  displayPerson(currentItem);
});

randBtn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * reviews.length);
  displayPerson(random);
});

function displayPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}
