const cat = document.querySelector('.cat');

let position = 0; 
let direction = 1; 

function moveCat() {
    position += direction * 4; 

    cat.style.left = `${position}px`;

    if (position > window.innerWidth - 50 || position < 0) {
        direction *= -1; 
    }
    requestAnimationFrame(moveCat);
}

moveCat();
