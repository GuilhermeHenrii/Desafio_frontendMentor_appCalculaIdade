const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const btnArrow = document.querySelector('.arrow');


btnArrow.addEventListener('click', function () {
    const day = inputDay.value;
    const month = inputMonth.value;
    const year = inputYear.value;
    const birthDateUser = agePtBr(`${year}-${month}-${day}`);

    if(validarDataBrasileira((birthDateUser))){
        console.log(ageCalculate(birthDateUser));
    };
    console.log('errado');
});


function validarDataBrasileira(data) {
    let regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    const dtAtual = new Date().getFullYear();
    if (!regex.test(data)) {
        return false; // não corresponde ao formato dd-mm-aa
    }
    let partesData = data.split("-");
    let dia = parseInt(partesData[0]);
    let mes = parseInt(partesData[1]);
    let ano = parseInt(partesData[2]);
    if (ano < 0 || ano > dtAtual) {
        return console.log(false); // ano deve estar entre 00 e 99
    }
    if (mes < 1 || mes > 12) {
        return false; // mês deve estar entre 01 e 12
    }
    if (dia < 1 || dia > 31) {
        return false; // dia deve estar entre 01 e 31
    }
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return false; // meses com 30 dias
    }
    if (mes === 2) {
        let bissexto = ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0);
        if (bissexto && dia > 29 || !bissexto && dia > 28) {
            return false; // fevereiro com 28 ou 29 dias
        }
    }
    return true;
}


function agePtBr(dateUser){
    const date = new Date(dateUser); // data de aniversario do usuario
    const dateBr = date.toLocaleDateString('pt-BR');
    const dateBrSliceOne = dateBr.slice('/', '-');
    const dateBrSliceTwo = dateBrSliceOne.slice('/', '-');
    console.log(dateBrSliceTwo);
    //usar algum memotodo para deixar a data no formaro dd-mm-yyy
    // resultado: '11/05/2023'
}


function ageCalculate(birthday) {
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = {
        years: Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

        months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

        days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

    }
    const ageArr = Object.values(age);
    return console.log(ageArr.join('-'));
};