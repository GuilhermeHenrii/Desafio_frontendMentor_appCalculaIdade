import validatesDate, { validateAge } from './modules/validatesDate';

const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
//const errorTxt = document.querySelector('.error-text');

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('arrow') || el.classList.contains('arrow-image')){
        validateAge(year.value, month.value , day.value);
    }
});