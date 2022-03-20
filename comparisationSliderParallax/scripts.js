
const slide = document.querySelector('#bg');
window.onmousemove = (e) => {

    const x = e.clientX;
    slide.style.left = x + 'px';
}
