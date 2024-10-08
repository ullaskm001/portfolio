const texts = ["Full-stack Developer", "Frontend Developer", "Backend Developer"];
let currentIndex = 0;
const textElement = document.querySelector(".text-animate");

function changeText() {
  textElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 3000); // Change text every 3 seconds