const objects = document.querySelectorAll("article");
const area = [...objects];

const gridArea = [
  "area-10",
  "area-11",
  "area-12",
  "area-13",
  "area-20",
  "area-21",
  "area-22",
  "area-23",
  "area-30",
  "area-31",
  "area-32",
  "area-33",
  "area-40",
  "area-41",
  "area-42",
  "area-43",
];

console.log(area);

// shuffle objects from area
function shuffle() {
  for (let i = area.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    let temp = area[j];
    area[j] = area[i];
    area[i] = temp;
  }
}

// shuffle();
// console.dir(area);

// area.forEach(function (block, index) {
//   console.log(
//     `${index}: ${block}, grid-area: ${getComputedStyle(block).getPropertyValue(
//       "grid-area"
//     )}`
//   );
// });

// for (let i = 0; i < area.length; i += 2) {
//   if (area[i].className === area[i + 1].className) {
//     console.log(area[i].classList, area[i + 1].classList);
//     break;
//   }
// }

let match = true;
function check() {
  for (let i = 0; i < area.length; i += 2) {
    if (area[i].className === area[i + 1].className) {
      console.log(
        `${i}, ${area[i].className}, ${i + 1}, ${area[i + 1].className}`
      );
      match = true;
      break;
    } else {
      match = false;
    }
  }
  console.log(match);
}

function display() {
  // su bolos sisulele
  area.forEach(function (block, index) {
    block.style.gridArea = gridArea[index];
  });
}

document.querySelector("button").addEventListener("click", function () {
  do {
    shuffle();
    check();
    if (!match) display();
  } while (match);
});
