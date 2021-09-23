'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    //.humburger-menu
    const burger = document.querySelector('.humburger-menu'),
          menuElem = document.querySelector('.menu'),
          menuLink = document.querySelectorAll('.menu-list__link');

    const toggleClass = (element, theClass) => {
        element.classList.toggle(theClass);
    };

    burger.addEventListener('click', ()=>{
        toggleClass(menuElem, 'menu-active');
        toggleClass(burger, 'humburger-menu-active');
    });


    // toggle не подойдет т.к. при clientWidth больше 767px классы активности не должны добавляться.
    const removeClass = (element, theClass) => {
        element.classList.remove(theClass);
    };

    menuLink.forEach(link => {
        link.addEventListener('click', ()=>{
            removeClass(menuElem, 'menu-active');
            removeClass(burger, 'humburger-menu-active');
        });
    });
});
