const bubbleWrap = document.getElementById("bubble-wrap");
const popSound = new Audio("pop-sound.mp3");

for (let i = 0; i < 104; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.addEventListener("click", () => {
    bubble.classList.add("popped");
    popSound.play();
  });
  bubbleWrap.appendChild(bubble);
}
