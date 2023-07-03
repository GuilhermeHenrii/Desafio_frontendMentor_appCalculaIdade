//Criar um modulo para verificar se a data é valida, trabalhando com a data no formato aceito peloJS.

//Criar outro módulo que lançará os erros, ou seja, verificará o que cada input está recebendo e lançará um erro caso seja algo que não queremos.

// A variável dateUser é do tipo Date, e um objeto Date válido sempre será considerado "truthy" em uma expressão booleana, mesmo que a data seja inválida. Portanto, !dateUser nunca será avaliado como true, mesmo para datas inválidas.

import handleErrors from './handleErros';
import {day as inputDay, month as inputMonth, year as inputYear, form, generatesError} from './handleErros';
import calculateAge from './calculateAge';
export let dateUser;
export let currentDate;

export function validateAge(year, month, day){
    dateUser =  new Date(`${year}-${month}-${day}T00:00:00-03:00`);
    console.log(dateUser);
    currentDate = new Date().getFullYear();

    for(let errorTxt of form.querySelectorAll('.error-text')){
        errorTxt.remove();
    }

    if(inputDay.value.length < 2 || inputDay.value.length > 2){
        return generatesError(inputDay, `Day invalid`);
    }
    if(inputMonth.value.length < 2 || inputMonth.value.length > 2){
        return generatesError(inputMonth, `Month invalid`)
    }
    if(inputYear.value.length < 4 || inputYear.value.length > 4){
        return generatesError(inputYear, `Year invalid`);
    }

    const errors = handleErrors();

    if(errors === true){
        calculateAge(); //criar metodo para calcular a idade
    }
}