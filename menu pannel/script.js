const list = [...document.querySelectorAll('.list')];

function activateLink() {
    list.forEach(link => {
        link.classList.remove('active');
        this.classList.add('active');
    });
}

list.forEach(link => link.addEventListener('click', activateLink));