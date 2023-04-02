const red_ = document.querySelectorAll(".red");
const blue_ = document.querySelectorAll(".blue");
const yellow_ = document.querySelectorAll(".yellow");

const red_final = document.querySelectorAll(".red-final");
const blue_final = document.querySelectorAll(".blue-final");
const yellow_final = document.querySelectorAll(".yellow-final");

red_.forEach((element) => {
  element.addEventListener("click", function () {
    red_final.forEach((e) => {
      if (e.textContent == element.textContent) {
        e.textContent = " ";
      }
    });
  });
});

blue_.forEach((element) => {
  element.addEventListener("click", function () {
    blue_final.forEach((e) => {
      if (e.textContent == element.textContent) {
        e.textContent = " ";
      }
    });
  });
  y;
});

yellow_.forEach((element) => {
  element.addEventListener("click", function () {
    yellow_final.forEach((e) => {
      if (e.textContent == element.textContent) {
        e.textContent = " ";
      }
    });
  });
});
