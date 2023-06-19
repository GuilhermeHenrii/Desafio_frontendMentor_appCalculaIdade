const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const btnArrow = document.querySelector('.arrow');


btnArrow.addEventListener('click', function () {
    const day = inputDay.value;
    const month = inputMonth.value;
    const year = inputYear.value;
    const birthDateUserBr = new Date(`${year}-${month}-${day}T00:00:00-03:00`);
    const formatedDate = birthDateUserBr.toLocaleDateString('pt-br',{
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        timeZone: 'America/Sao_Paulo'
    });
    console.log (formatedDate instanceof Date);

    const validDatePtBr = validarDataBrasileira(formatedDate);
    console.log(validDatePtBr);
    const dtArr = ageCalculate(validDatePtBr);

    if(validDatePtBr){
        console.log('oi')
        console.log(ageCalculate(validDatePtBr));
        const dynamicNumbers = document.querySelectorAll('.dynamic-numbers');
        for(let numbers in dynamicNumbers){
            dynamicNumbers[numbers].innerHTML = dtArr[numbers];
        }

    }else{
        console.log('errado');
    }
});


function validarDataBrasileira(data){
    let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const dtAtual = new Date().getFullYear();
    if (!regex.test(data)) {
        return alert('data falsa false'); // não corresponde ao formato dd-mm-aaaa
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
    const dtBrForEua = new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}T00:00:00-03:00`);
    return dtBrForEua;
}


function ageCalculate(birthday) {
    birthday.toLocaleDateString('pt-br', {
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        timeZone: 'America/Sao_Paulo'
    })
    console.log(birthday instanceof Date);
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = {
        years: Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

        months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

        days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

    }
    console.log(ageDiffMs);
    const ageArr = Object.values(age);
    return ageArr;
};

/*********************************************************************************************************************************************************************************************/











class Age {
    constructor() {
        this.form = document.querySelector('.form');
        this.button = document.querySelector('.btn-div');
        this.currentDate = new Date().getFullYear();
        this.section = document.querySelectorAll('.dynamic-line');
        this.events();
    };

    events() {
        this.button.addEventListener('click', e => {
            this.handleClick(e);
        });
    };

    handleClick(e) {
        const day = this.form.querySelector('#day');
        const month = this.form.querySelector('#month');
        const year = this.form.querySelector('#year');
        this.acceptedDate = new Date(`${year.value}-${month.value}-${day.value}`);//T00:00:00-03:00

        const fieldEmpty = this.fieldIsEmpty();
        if (!fieldEmpty) return;

        const dateValid = this.dateBrIsValid();
        if(!dateValid) return;

        const calculateAge = this.calculateAge(this.acceptedDate);

        if (calculateAge.some((value) => { //O método some() é uma função de array em JavaScript que verifica se pelo menos um elemento do array satisfaz uma determinada condição. Ele itera sobre os elementos do array e retorna true assim que encontrar o primeiro elemento que atenda à condição especificada. Caso nenhum elemento satisfaça a condição, o método retorna false. Ele para de iterar, assim que encontra o primeiro elemento
            return isNaN(value);
        }) === false) {
            let i = 0;
            for (let date of this.section) {
                //date.remove(); 
                date.innerHTML = calculateAge[i];
                i++;
            }
        }
    };

    fieldIsEmpty() {
        let valid = true;

        for (let errorTxt of this.form.querySelectorAll('.error-text')) {
            errorTxt.remove();
        }

        for (let field of this.form.querySelectorAll('.input')) {
            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createError(field, `Field ${label} empty`);
                valid = false;
            }

            if (isNaN(Number(field.value))) {
                this.createError(field, `Field ${label.toLowerCase} is not a valid number`);
                valid = false;
            }
        }

        return valid;
    }


    dateBrIsValid() {
        let valid = true;
        const dateBr = this.acceptedDate.toLocaleDateString('pt-br', {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: 'America/Sao_Paulo'
        });

        let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!regex.test(dateBr)) {
            valid = false;
            return this.createError(this.form.querySelector('#day'), 'data invalida'); // não corresponde ao formato dd-mm-aaaa
        };

        const currentDate = new Date();

        let dateParts = dateBr.split("/");
        let day = parseInt(dateParts[0]);
        let month = parseInt(dateParts[1]);
        let year = parseInt(dateParts[2]);

        if (year < 0 || year > currentDate.getFullYear()) {
            valid = false;
            return this.createError(this.form.querySelector('#year'), 'Invalid year field'); // ano deve estar entre 00 e 99
        };
        if (month < 1 || month > 12) {
            valid = false;
            return this.createError(this.form.querySelector('#month'), 'Invalid month field'); // mês deve estar entre 01 e 12
        };
        if (day < 1 || day > 31) {
            valid = false;
            return false; // dia deve estar entre 01 e 31
        };
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
            valid = false;
            return false; // meses com 30 dias
        };
        if (month === 2) {
            let leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
            if (leapYear && day > 29 || !leapYear && day > 28) {
                valid = false;
                return false; // fevereiro com 28 ou 29 dias
            };
        };
        return valid;
    };

    calculateAge(dateOfBirth) {
        //o erro esta nesse método
        //preciso fazer esse calculo de maneira precisa
        //pesquisar sobre no yt

        const currentDate = new Date();
        const dtBirth = new Date(dateOfBirth);

        const difference = currentDate - dtBirth;
        const dtAge = difference - new Date('1970-01-01T00:00:00');

        console.log(new Date(dtAge));

        const age = {};
        age.year = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
        age.month = Math.floor((difference / (1000 * 60 * 60 * 24 * (365.25/12))));
        age.day = Math.floor((difference % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));

        // const currentYear = currentDate.getFullYear();
        // const currentMonth = currentDate.getMonth() + 1;
        // const currentDay = currentDate.getDate();
        
        // const yearOfBirth = dateOfBirth.getFullYear();
        // const monthOfBirth = dateOfBirth.getMonth() + 1;
        // const dayOfBirth = dateOfBirth.getDate(); 

        // const absoluteMonth = currentMonth - monthOfBirth;
        // const absoluteDay = currentDay - dayOfBirth;

        // const results = {
        //     year: currentYear - yearOfBirth,
        //     month: Math.abs(absoluteMonth),
        //     day: Math.abs(absoluteDay)
        // }
        

        const ageArr = Object.values(age);
        console.log(ageArr);
        return ageArr;
    };

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    };
}


const userAge = new Age();