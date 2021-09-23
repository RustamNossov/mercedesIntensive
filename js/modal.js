'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    
    const moreLink = document.querySelectorAll('.more'),
          modal = document.querySelector('.modal');

    const addClass = (element, theClass) => {
        element.classList.add(theClass);
    };
    
    const removeClass = (element, theClass) => {
        element.classList.remove(theClass);
    };

    const openModal = (modal) => {
        removeClass(modal, 'hidden');
        document.querySelector('body').style.overflow = "hidden";
    };

    const closeModal = (modal) => {
        addClass(modal, 'hidden');
        document.querySelector('body').style.overflow = "auto";
    };

    moreLink.forEach(link => {
        link.addEventListener('click', ()=>{
            openModal(modal);
        });
    });

    modal.addEventListener('click', (e)=>{
        if (e.target.classList.contains('overlay') || e.target.classList.contains('modal__close')) {
            closeModal(modal);
        }
    });
    
});