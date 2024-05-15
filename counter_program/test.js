const increaseBTN = document.getElementById("increaseBTN");
const decreaseBTN = document.getElementById("decreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const countLable = document.getElementById("countLabel");

let count = 0;

increaseBTN.onclick = function () {
  count++;
  countLable.textContent = count;
};

decreaseBTN.onclick = function () {
  count--;
  countLable.textContent = count;
};

resetBTN.onclick = function () {
  count = 0;
  countLable.textContent = count;
};
