const textElement = document.getElementById('bouncingText');
const text = "Under⠀Construction...";
let xVelocity = 5; // Horizontal speed
let yVelocity = 3; // Vertical speed
let positionX = 0;
let positionY = 0;
let hue = 0;

// Split the text into individual spans for each character
textElement.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');

const spans = textElement.querySelectorAll('span');

function updatePosition() {
    const width = window.innerWidth - textElement.offsetWidth;
    const height = window.innerHeight - textElement.offsetHeight;

    if (positionX + xVelocity > width || positionX + xVelocity < 0) {
        xVelocity = -xVelocity;
    }
    if (positionY + yVelocity > height || positionY + yVelocity < 0) {
        yVelocity = -yVelocity;
    }

    positionX += xVelocity;
    positionY += yVelocity;

    textElement.style.left = `${positionX}px`;
    textElement.style.top = `${positionY}px`;

    requestAnimationFrame(updatePosition);
}

function updateColor() {
    hue = (hue + 1) % 360; // Increment hue and wrap around
    const color = `hsl(${hue}, 100%, 50%)`;
    textElement.style.transition = 'color 3.0s'
    textElement.style.color = color;
    requestAnimationFrame(updateColor);
}

function shakeCharacters() {
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.transform = 'translateX(' + (Math.random() * 2 - 1) * 5 + 'px)';
            setTimeout(() => {
                span.style.transform = 'none';
            }, 100);
        }, Math.random() * 200); // Random delay for each character
    });
    requestAnimationFrame(shakeCharacters);
}

// Start the bouncing effect
updatePosition();

// Start the color change effect
updateColor();

// Start the shaking effect
shakeCharacters();
