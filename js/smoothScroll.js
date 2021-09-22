'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const menuItem = document.querySelectorAll('.menu-list__item'),
          mainScroll = document.querySelector('.main__scroll'),
          scrollCollection = [...menuItem, mainScroll];

    scrollCollection.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const id = e.target.getAttribute('href').slice(1);

            document.getElementById(id).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });

        });
    });
});