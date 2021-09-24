'use strict';

document.addEventListener('DOMContentLoaded', ()=>{

    // решил сделать для обеих форм
    const forms = document.querySelectorAll('form');
          

    // функция проверки на пустые поля
    const ifEmpty = (form) => {
        for (let {name, value} of form.elements) {
            if (name) {
                 if (!value.trim()) {
                     return true;
                 } 
            }    
        }
        return false;
    };

    // функция отправки данных
    const fetchForm = (form) => {

        //сообщения для пользователя
        const messages = {
            loading: '../img/design/spinner.svg',
            success: "Спасибо, данные отправлены",
            failure: "Произошла ошибка, статус"
        };
        // блок для спинера, пока ждем ОС от сервера
        const spinner = document.createElement('img');
                spinner.src = messages.loading;
                spinner.style.cssText = `
                    display: block;
                    margin: 0 auto;
                 `;
        // болк для статуса 
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('modal__descr');

        // показываем модалку со статусом отправки и выводим в нее спинер
        const modal = document.querySelector('.modal'),
              wrapper = modal.querySelector('.modal-wrapper'),
              title = modal.querySelector('.modal__title'),
              descr = modal.querySelector('.modal__descr'), 
              modalForm = modal.querySelector('.modal__form');
        modal.classList.remove('hidden');
        wrapper.style.height = '200px';
        document.querySelector('body').style.overflow = "hidden";
        title.style.display = 'none';
        descr.style.display = 'none';
        modalForm.style.display = 'none';
        wrapper.appendChild(spinner);


        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(object)
        })
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                //удаляю спинер и показываю сообщение в модалке
                spinner.remove();
                statusMessage.innerText = messages.success;
                wrapper.appendChild(statusMessage);
                return response.json();


            } else {
                throw new Error(response.status);
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            //удаляю спинер и показываю ошибку в модалке
            spinner.remove();
            statusMessage.innerText = `${messages.failure}: ${error.message}` ;
            wrapper.appendChild(statusMessage);
        })
        .finally(()=> {
            form.reset();
            // удаляю сообщения и возвращаю модалку в прежнее состояние
            setTimeout(()=>{ 
                modal.classList.add('hidden');
                statusMessage.remove();
                wrapper.style.height = '592px';
                document.querySelector('body').style.overflow = "auto";
                title.style.display = 'block';
                descr.style.display = 'block';
                modalForm.style.display = 'block';
            }, 3000);
        });
    };

    // Навешиваю слушатели на каждую форму
    forms.forEach(form => {
        form.addEventListener('submit', (e)=> {
            e.preventDefault();
            if (!ifEmpty(e.target)) {
                fetchForm(form);
            }
        });
    });

});