class Age {
    constructor() {
        this.form = document.querySelector('.form');
        this.button = document.querySelector('.btn-div');
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
        console.log(this.acceptedDate);

        const fieldValid = this.fieldIsValid();
        const dateValid = this.dateBrIsValid();
        const calculateAge = this.calculateAge(this.acceptedDate);

        // if(fieldValid && dateValid){
        //     alert('data e campos validos');
        // }
    };

    fieldIsValid() {
        let valid = true;

        for (let errorTxt of this.form.querySelectorAll('.error-text')) {
            errorTxt.remove();
        }

        for (let field of this.form.querySelectorAll('.input')) {
            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createError(field, `Field ${label.toLowerCase()} empty`);
                valid = false;
            }

            if (isNaN(Number(field.value))) {
                this.createError(field, `Field ${label.toLowerCase()} is not a valid number`);
                valid = false;
            }
        }
        return valid;
    };

    dateBrIsValid() {
        const dateBr = this.acceptedDate.toLocaleDateString('pt-br', {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: 'America/Sao_Paulo'
        });

        console.log(dateBr);

        let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const currentDate = new Date().getFullYear();
        if (!regex.test(dateBr)) {
            return console.log('data não corresponde ao formato dd-mm-aaaa'); // não corresponde ao formato dd-mm-aaaa
        };

        let dateParts = dateBr.split("-");
        let day = parseInt(dateParts[0]);
        let month = parseInt(dateParts[1]);
        let year = parseInt(dateParts[2]);
        console.log(dateParts);

        if (day < 0 || day > currentDate) {
            return console.log(false); // ano deve estar entre 00 e 99
        };
        if (month < 1 || month > 12) {
            return false; // mês deve estar entre 01 e 12
        };
        if (day < 1 || day > 31) {
            return false; // dia deve estar entre 01 e 31
        };
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
            return false; // meses com 30 dias
        };
        if (month === 2) {
            let leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
            if (leapYear && day > 29 || !leapYear && day > 28) {
                return false; // fevereiro com 28 ou 29 dias
            };
        };
        console.log(dateBr);
        // const dtBrForEua = new Date(`${this.year.value}-${this.month.value}-${this.day.value}T00:00:00-03:00`);
        return this.acceptedDate;
    };

    calculateAge(dateOfBirth) {
        dateOfBirth.toLocaleDateString('pt-br', {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: 'America/Sao_Paulo'
        })
        console.log(dateOfBirth instanceof Date);
        const ageDiffMs = Date.now() - dateOfBirth.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = {
            years: Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

            months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

            days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

        }
        console.log(ageDiffMs);
        const ageArr = Object.values(age);
        console.log(ageArr)
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