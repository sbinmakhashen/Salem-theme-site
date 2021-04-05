window.onscroll = () => {
    const navbar = document.querySelector('.nav');
    const ul = document.getElementsByTagName('ul')[0];
    const pixTop = window.scrollY;
    if (pixTop >= 50) {
        navbar.classList.add('bg-onscroll')
        ul.className = 'ul-bg';
    } else {
        navbar.classList.remove('bg-onscroll')
        ul.className = 'ul-bg'.remove;
    }
}
