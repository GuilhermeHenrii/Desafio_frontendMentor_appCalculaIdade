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

        const fieldValid = this.fieldIsValid();
        if (!fieldValid) return;

        const dateValid = this.dateBrIsValid();
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

    fieldIsValid() {
        let valid = true;

        for (let errorTxt of this.form.querySelectorAll('.error-text')) {
            errorTxt.remove();
        }

        for (let field of this.form.querySelectorAll('.input')) {
            const label = field.previousElementSibling.innerText;

            if (field.getAttribute('id') === 'day') {
                const valueOfday = this.form.querySelector('#day');
                if (valueOfday.value.length !== 2 || valueOfday.value < 1 || valueOfday.value > 31) {
                    valid = false;
                    this.createError(field, `O campo ${label} está inválido`);
                }
            }

            if (field.getAttribute('id') === 'month') {
                const valueOfMonth = this.form.querySelector('#month');
                if (valueOfMonth.value.length !== 2 || valueOfMonth.value < 1 || valueOfMonth.value > 12) {
                    valid = false;
                    this.createError(field, `O campo ${label} está inválido`);
                }
            }

            if (field.getAttribute('id') === 'year') {
                const valueOfYear = this.form.querySelector('#year');
                if (valueOfYear.value.length !== 4 || valueOfYear.value > this.currentDate) {
                    valid = false;
                    this.createError(field, `O campo ${label} está inválido`);
                }
            }
        }

        return valid;
    };

    dateBrIsValid() {
        let valid = true;
        const dateBr = this.acceptedDate.toLocaleDateString('pt-br', {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: 'America/Sao_Paulo'
        });

        let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const currentDate = new Date().getFullYear();
        if (!regex.test(dateBr)) {
            valid = false;
            return false; // não corresponde ao formato dd-mm-aaaa
        };

        let dateParts = dateBr.split("-");
        let day = parseInt(dateParts[0]);
        let month = parseInt(dateParts[1]);
        let year = parseInt(dateParts[2]);

        if (year < 0 || year > currentDate) {
            valid = false;
            return false; // ano deve estar entre 00 e 99
        };
        if (month < 1 || month > 12) {
            valid = false;
            return false; // mês deve estar entre 01 e 12
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
        //Pode ser que esteja dando problema no ano bissesto
        //importar biblioteca date-fns para tentar resolver o problema
        //aplicar responsividade ao projeto
        dateOfBirth.toLocaleDateString('pt-br', {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: 'America/Sao_Paulo'
        });

        console.log(dateOfBirth);
        const ageDiffMs = Date.now() - dateOfBirth.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = {
            years: Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

            months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

            days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

        }
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