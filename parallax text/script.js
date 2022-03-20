const section = document.querySelector('.section');
const headings = [...document.querySelectorAll('.layer')];

const parallaxText = e => {
    headings.forEach(layer => {
        let x = (section.getBoundingClientRect().width - e.pageX * 2) / 2;
        layer.style.transform = `translateX(${x}px)`;
    });
}

section.addEventListener('mousemove', e => parallaxText(e));