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
// getting the sections
const sections = document.querySelectorAll('section');
// get the lis from nav tag
const ulLis = document.querySelectorAll('nav ul li');
// console.log(ulLis);
// event listener
window.addEventListener('scroll', () => {
    // looping through the sections
    // init a var
    let currentPage = '';
    sections.forEach(pageSection => {
        // gettig the top of page and height
        const pageSecTop = pageSection.offsetTop;
        const pageSecheight = pageSection.clientHeight;
        if (pageYOffset >= pageSecTop) {
            currentPage = pageSection.getAttribute('id');
        }
    });
    // looping trough nav Lis 
    ulLis.forEach(li => {
        li.classList.remove('active');
        // li.getElementsByTagName('a').remove;
        if (li.classList.contains(currentPage)) {
            li.classList.add('active')
            // li.getElementsByTagName('a');
        }
    });
});
