'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.design-list button'),
          titles = document.querySelectorAll('.design-text .section__title'),
          tabs = document.querySelectorAll('[data-tabs-field]');


    const addClass = (element, theClass) => {
        element.classList.add(theClass);
    };

    const removeClass = (element, theClass) => {
        element.classList.remove(theClass);
    };


    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            tabs.forEach(tab => {
                if (btn.getAttribute('data-tabs-handler') === tab.getAttribute('data-tabs-field')) {
                    removeClass(tab, 'hidden');
                } else {
                    addClass(tab, 'hidden');
                }
            });

            btns.forEach(btn => removeClass(btn, 'design-list__item_active'));
            addClass(btn, 'design-list__item_active');

            titles.forEach(title => addClass(title, 'hidden'));
            removeClass(titles[i], 'hidden');

        });
    });
});