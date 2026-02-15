const music = document.getElementById("bgMusic");

function revealLove() {
    const message = document.getElementById("hiddenMessage");
    message.style.opacity = "1";

    // Play music when user interacts (works on phones)
    music.play();
}

/* Floating Hearts Animation */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "floatUp 5s linear forwards";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 600);

/* Add animation dynamically */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);
function openEnvelope() {
    const envelope = document.querySelector(".envelope");
    envelope.classList.toggle("open");
}
