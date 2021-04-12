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

// highlighting nav links on scroll
addEventListener('scroll', () => {
    // init nav links
    let navLinks = document.querySelectorAll('nav ul li a');
    let topPage = scrollY;
    // looping through the nav links
    navLinks.forEach(links => {
        // getting the sections by their has/#
        let sections = document.querySelector(links.hash);
        console.log(sections);
        if (sections.offsetTop <= topPage
            && sections.offsetTop + sections.offsetHeight > topPage) {
            links.classList.add('active')
        } else {
            links.classList.remove('active')
        }
    });
});