//Criar um modulo para verificar se a data é valida, trabalhando com a data np formato aceito peloJS.

//Criar outro módulo que lançará os erros, ou seja, verificará o que cada input está recebendo e lançará um erro caso seja algo que não queremos.

import function validateAge(dateUsers){
    const day = this.form.querySelector('#day');
    const month = this.form.querySelector('#month');
    const year = this.form.querySelector('#year');
    const errorTxt = document.querySelector('.error-text');
    
    const dateUser = new Date(`${year.value}-${month.value}-${day.value}`);

    if(!dateUser){
        errorTxt.classList.add('color-text');
        errorTxt.innerHTML = 'Digite uma data válida';
    }
    return true;
}

validateAge('17/05/2023');