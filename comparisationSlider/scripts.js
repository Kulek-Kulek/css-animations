
const slide = document.querySelector('.slide2');
window.onmousemove = function (e) {
    console.log(e);
    const x = e.clientX;
    slide.style.left = x + 'px';
}
