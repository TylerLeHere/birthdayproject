// script.js
window.onload = function () {
    launchConfetti();
    launchBalloons();
    setInterval(createFirework, 500); // Launch fireworks periodically

};

// Confetti Animation
function launchConfetti() {
    const confettiContainer = document.getElementById("confetti-container");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 70%, 70%)";
        confettiContainer.appendChild(confetti);
    }
}

// Launch balloons
function launchBalloons() {
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        balloon.style.animationDuration = Math.random() * 3 + 5 + "s"; // Random float speed
        document.body.appendChild(balloon);

        // Remove balloon after animation ends
        setTimeout(() => balloon.remove(), 8000);
    }
}

// Create fireworks
function createFirework() {
    // Create main firework explosion
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 80 + "vh";

    // Randomize color
    const randomColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    firework.style.backgroundColor = randomColor;
    document.body.appendChild(firework);

    // Add burst particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = firework.style.left;
        particle.style.top = firework.style.top;
        particle.style.backgroundColor = randomColor;

        // Randomize burst direction
        const angle = Math.random() * 2 * Math.PI; // Random angle (0 to 2π)
        const distance = Math.random() * 50 + 50; // Random distance (50 to 100px)
        particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);

        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => particle.remove(), 1000);
    }

    // Remove firework after animation
    setTimeout(() => firework.remove(), 1000);
}


// Launch fireworks periodically
setInterval(createFirework, 500);
