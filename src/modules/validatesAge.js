

const day = this.form.querySelector('#day');
const month = this.form.querySelector('#month');
const year = this.form.querySelector('#year');

const dateUser = new Date(`${year.value}-${month.value}-${day.value}`);

function validateAge(dateUsers){
    if(isNaN(dateUser.getTime())){
        console.log('data invalida');
        return;
    }
    
    if(dateUser.toISOString().slice(0, 10) !== dateUser){
        console.log('data invalida 2');
        return;
    }
    
    console.log('data valida');
}

validateAge(dateUser);