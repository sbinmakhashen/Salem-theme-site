window.onscroll = () => {
    const navbar = document.querySelector('.nav');
    const pixTop = window.scrollY;
    if (pixTop >= 70) {
        navbar.classList.add('bg-onscroll')
        navbar.className.add('ul-bg')
    } else {
        navbar.classList.remove('bg-onscroll')
        navbar.className.remove('ul-bg')
    }
}
