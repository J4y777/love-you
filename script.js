const heartButton = document.getElementById("heartButton");
const letter = document.getElementById("letter");
const clickText = document.getElementById("clickText");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const celebration = document.getElementById("celebration");
const floatingHearts = document.querySelector(".floating-hearts");

let noAttempts = 0;

heartButton.addEventListener("click", () => {
    heartButton.classList.add("open");
    letter.classList.add("show");
    clickText.textContent = "One special question...";
    heartButton.setAttribute("aria-expanded", "true");
});

yesButton.addEventListener("click", () => {
    celebration.classList.add("show");
    for (let i = 0; i < 35; i += 1) {
        window.setTimeout(createFloatingHeart, i * 35);
    }
});

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});

noButton.addEventListener("click", () => {
    noAttempts += 1;
    const messages = [
        "Are you sure?",
        "Wrong answer, Akha...",
        "The heart doesn't accept no!",
        "Try the pink button!"
    ];
    noButton.textContent = messages[(noAttempts - 1) % messages.length];
    moveNoButton();
});

celebration.addEventListener("click", (event) => {
    if (event.target === celebration) {
        celebration.classList.remove("show");
    }
});

function moveNoButton() {
    noAttempts += 1;
    const maxX = 95;
    const maxY = 28;
    const x = (Math.random() * maxX * 2) - maxX;
    const y = (Math.random() * maxY * 2) - maxY;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function createFloatingHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "❤";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 28}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    floatingHearts.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
}

window.setInterval(createFloatingHeart, 900);