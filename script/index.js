const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const btnArrow = document.querySelector('.arrow');


btnArrow.addEventListener('click', function () {
    const day = inputDay.value;
    const month = inputMonth.value;
    const year = inputYear.value;
    const birthDateUserBr = new Date(`${year}-${month}-${day}`);
    birthDateUserBr.toLocaleDateString('pt-br',{
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        timeZone: 
    })
    console.log (birthDateUserBr);
    const validDatePtBr = validarDataBrasileira(agePtBr(birthDateUserBr));
    console.log(validDatePtBr);

    if(validDatePtBr){
        console.log('oi')
        console.log(ageCalculate(validDatePtBr));
    }else{
        console.log('errado');
    }
});


function validarDataBrasileira(data){
    let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
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
    console.log(data);
    return data;
}


function agePtBr(dateUser){
    const dateBr = dateUser.toLocaleDateString('pt-BR');
    console.log(dateBr); //13-05-2002
    return dateBr;
}


function ageCalculate(birthday) {
    const date = new Date(birthday);
    const ageDiffMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = {
        years: Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

        months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

        days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

    }
    console.log(ageDiffMs);
    const ageArr = Object.values(age);
    return age;
};