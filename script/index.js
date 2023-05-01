const inputsAge = document.querySelectorAll('.input');
const arrowBtn = document.querySelector('.arrow');
const dynamicNumbers = document.querySelectorAll('.dynamic-numbers');
const dynamicText = document.querySelectorAll('.dynamic-text');

function getBirthDateUsers(year, month, day) {
    const birthDateUsers = new Date(`${year}-${month}-${day}`);
    return birthDateUsers;
};


function ageCalculate(birthday) {
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = {
        years: Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

        months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

        days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

    }
    const ageArr = Object.values(age);
    return ageArr;
};

function isValidDate(getBirthDateUsers) {
    const dateValid = Date.parse(getBirthDateUsers);
    return !isNaN(dateValid);
};

document.addEventListener('click', (e) => {
    const el = e.target;
    const today = new Date();
    if (el.classList.contains('arrow')) {
        const birthYear = inputsAge[2].value;
        const birthMonth = inputsAge[1].value;
        const birthDay = inputsAge[0].value;

        const euaBirthDate = `${birthYear}-${birthMonth}-${birthDay}`;
        if (!isValidDate(euaBirthDate) || birthYear > today.getFullYear()) {
            alert('Insira uma data válida');
            return;
        }
    
    const ageArr = ageCalculate(getBirthDateUsers(birthYear, birthMonth, birthDay));
    const getDynamicNumbers = ageArr.forEach((element, index) => {
        dynamicNumbers[index].classList.add('result-color');
        dynamicNumbers[index].innerHTML = element;
        dynamicText[index].classList.add('result-text-color');
    });
}
});