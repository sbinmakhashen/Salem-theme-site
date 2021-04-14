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
        // console.log(sections);
        if (sections.offsetTop <= topPage
            && sections.offsetTop + sections.offsetHeight > topPage) {
            links.classList.add('active')
        } else {
            links.classList.remove('active')
        }
    });
});

// filter projects
// get project's li's
const portLi = document.querySelectorAll('.port-menu ul li');
// get projects
const portGal = document.querySelectorAll('.gallery-item');

portLi.forEach(lis => {
    lis.addEventListener('click', () => {
        portLi.forEach(li => {
            // li.classList.remove('active');
            // li.classList.add('delete');
        });
        // lis.classList.add('active');
        // lis.classList.remove('delete');
        // showing projects
        // filter by attribute
        let value = lis.textContent;
        // loop through projects 
        portGal.forEach(disp => {
            disp.style.display = 'none';
            li.classList.remove('active');
            li.classList.add('delete');
            // show proj if attribute === to the textContent
            if (disp.getAttribute("data-id") === value || value === 'All') {
                disp.style.display = 'block';
                lis.classList.add('active');
                lis.classList.remove('delete');
            }
        });

    });
});