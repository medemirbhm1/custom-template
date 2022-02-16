const other = document.getElementById("other");
const megaMenu = document.querySelector(".mega-menu");

other.addEventListener("click", () => {
  megaMenu.classList.toggle("active");
});

const skills = document.getElementById("skills");
const progresses = document.querySelectorAll(".progress .blue");
const nums = document.querySelectorAll(".progress .box .num");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skills.offsetTop) {
    progresses.forEach((progress) => {
      progress.style.width = `${progress.parentElement.dataset.target}%`;
    });
    nums.forEach((num) => {
      const updateCounter = () => {
        const target = num.parentElement.parentElement.dataset.target;
        const cntnt = +num.innerText;
        const inc = target / 100;
        if (cntnt < target) {
          num.innerText = `${Math.ceil(inc + cntnt)}`;
          setTimeout(updateCounter, 20);
        } else {
          num.innerText = `${target}`;
        }
      };
      updateCounter();
    });
  }
});

let eventDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let nowDate = new Date().getTime();

  let dateDiff = eventDate - nowDate;

  let daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const days = document.querySelector(".days");
  days.innerText = daysDiff;

  let hoursDiff = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const hours = document.querySelector(".hours");
  hours.innerText = hoursDiff;

  let minutesDiff = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const minutes = document.querySelector(".minutes");
  minutes.innerText = minutesDiff;

  let secondsDiff = Math.floor((dateDiff % (1000 * 60)) / 1000);
  const seconds = document.querySelector(".seconds");
  seconds.innerText = secondsDiff;
}, 1000);

const stats = document.querySelectorAll(".stats .number");
const section = document.querySelector(".stats");
let done = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop) {
      if (!done) {
      stats.forEach((stat) => startCount(stat));
    }
    done = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
