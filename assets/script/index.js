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
        this.acceptedDate = new Date(`${year.value}-${month.value}-${day.value}T00:00:00-03:00`);

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
        console.log(typeof day);

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
        dateOfBirth.toLocaleDateString('pt-br', {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: 'America/Sao_Paulo'
        });

        const currentDate = new Date();

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        
        const yearOfBirth = dateOfBirth.getFullYear();
        const monthOfBirth = dateOfBirth.getMonth() + 1;
        const dayOfBirth = dateOfBirth.getDate(); 

        const absoluteMonth = currentMonth - monthOfBirth;
        const absoluteDay = currentDay - dayOfBirth;

        const results = {
            year: currentYear - yearOfBirth,
            month: Math.abs(absoluteMonth),
            day: Math.abs(absoluteDay)
        }
        

        const ageArr = Object.values(results);
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