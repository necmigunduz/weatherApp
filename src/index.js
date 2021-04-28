import _ from 'lodash';

const container = document.querySelector('.container');

function createForm(){
    const form = document.createElement('form');
    const header = document.createElement('h1');
    header.setAttribute('class','header bg-dark text-light text-center');
    header.textContent = 'WEATHER TODAY';
    const label = document.createElement('label');

    form.appendChild(header);
    container.appendChild(form);
};

createForm();

