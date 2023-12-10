const btn = document.querySelector('.nav-open-btn');

let sidebar = document.querySelector('.mobile-menu');

btn.onclick = () => {

    sidebar.classList.add('is-open');
};

const closebtn = document.querySelector('.mobile-menu-close-btn');

closebtn.onclick = () => {

    sidebar.classList.remove('is-open');
};