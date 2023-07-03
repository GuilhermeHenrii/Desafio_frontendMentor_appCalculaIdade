import { dateUser, currentDate } from "./validatesDate";

export const day = document.querySelector('#day');
export const month = document.querySelector('#month');
export const year = document.querySelector('#year');
export const inputs = document.querySelectorAll('.inputs');
export const form = document.querySelector('.form');

export default function handleErrors() {
    let valid = true;

    for (let errorTxt of form.querySelectorAll('.error-text')) {
        errorTxt.remove();
    }
    for (let field of inputs) {
        const label = field.previousElementSibling.innerText;
        function invalidField() {
            if(field.value.length <= 0) {
                generatesError(field, `${label} is empty`);
                return valid = false;

            }else if(isNaN(parseInt(day.value)) || isNaN(parseInt(month.value)) || isNaN(parseInt(year.value))){
                generatesError(field, `Enter a number`);
                return valid = false;
            }
        }
        invalidField();

        function isDateInvalid() {
            if (field === inputs[2] && (parseInt(year.value) <= 0 || parseInt(year.value) > currentDate)) {
                generatesError(field, `${label} invalid`); // ano deve estar entre 00 e 99
                return valid = false;
            };

            if (field === inputs[1] && (parseInt(month.value) < 1 || parseInt(month.value) > 12)) {
                generatesError(field, `${label} invalid`); // mês deve estar entre 01 e 12
                return valid = false;
            };

            if (field === inputs[0] && (parseInt(day.value) < 1 || parseInt(day.value) > 31)) {
                generatesError(field, `${label} invalid`); // dia deve estar entre 01 e 31
                return valid = false;
            };

            if (field === inputs[1] && ((parseInt(month.value) === 4 || parseInt(month.value) === 6 || parseInt(month.value) === 9 || parseInt(month.value) === 11) && parseInt(day.value) > 30)) {
                generatesError(field, `${label} mes com 30 dias`); // meses com 30 dias
                return valid = false;
            }

            if (field === inputs[1] && parseInt(month.value) === 2) {
                let leapYear = parseInt(year.value) % 4 === 0 && (parseInt(year.value) % 100 !== 0 || parseInt(year.value) % 400 === 0);

                if (leapYear && parseInt(day.value) > 29) {
                    generatesError(field, `${label} fevereiro com 29 dias`); // fevereiro com 28 ou 29 dias
                    return valid = false;
                }

                if (!leapYear && parseInt(day.value) > 28) {
                    generatesError(field, `${label} fevereiro com 28 dias`);
                    return valid = false;
                }
            }

        }
        isDateInvalid();
    }
    return valid;
}

export function generatesError(field, text) {
    const div = document.createElement('div');
    div.classList.add('error-text');
    div.innerHTML = text;
    field.insertAdjacentElement('afterend', div);
}