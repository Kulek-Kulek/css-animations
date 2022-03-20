const createSquare = () => {
    const colors = ['red', 'blue', 'orange', 'yellow', 'green'];

    const section = document.querySelector('.section');
    const square = document.createElement('span');

    let size = Math.random() * 50;

    square.style.width = 30 + size + 'px';
    square.style.height = 30 + size + 'px';
    square.style.top = (Math.random() * innerHeight) - size * 3 + 'px';
    square.style.left = (Math.random() * innerWidth - size * 3) - size * 3 + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    section.appendChild(square);
    setTimeout(() => {
        square.remove();
    }, 5000);
}

setInterval(createSquare, 150);

