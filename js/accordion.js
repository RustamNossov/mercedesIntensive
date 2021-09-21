


'use strict';
document.addEventListener('DOMContentLoaded', ()=> {
    
    const featureLinks = document.querySelectorAll('.feature__link'),
          featureSub = document.querySelectorAll('.feature-sub');
    
    const addClass = (element, theClass) => {
        element.classList.add(theClass);
    };

    const removeClass = (element, theClass) => {
        element.classList.remove(theClass);
    };

    featureLinks.forEach((link, i) => {
        link.addEventListener('click', () => {

            if ( !featureLinks[i].classList.contains('feature__link_active') ) {
                
                featureSub.forEach(sub => {
                    addClass(sub, 'hidden');
                });
                removeClass(featureSub[i], 'hidden');
    
    
                featureLinks.forEach(link => {
                    removeClass(link, 'feature__link_active');
                });
                addClass(featureLinks[i], 'feature__link_active');

            } else {

                addClass(featureSub[i], 'hidden');
                removeClass(featureLinks[i], 'feature__link_active');
            }
            

        });
    });



});