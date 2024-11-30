const textElement = document.getElementById('bouncingText');

let xVelocity = 5; // Horizontal speed
let yVelocity = 3; // Vertical speed
let positionX = 0;
let positionY = 0;

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

// Start the bouncing effect
updatePosition();
