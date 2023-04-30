const inputsAge = document.querySelectorAll('.input');
const arrowBtn = document.querySelector('.arrow');
const dynamicNumbers = document.querySelectorAll('.dynamic-numbers');

function getBirthDateUsers(year, month, day){
    const birthDateUsers = new Date(`${year}-${month}-${day}`);
    return birthDateUsers;
};

function ageCalculate(birthday){
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = {
        years:Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

        months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

        days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

    }
    const ageArr = Object.values(age);
    return ageArr;
};


document.addEventListener('click', (e) =>{
    const el = e.target;
    if(el.classList.contains('arrow')){
        const birthYear = inputsAge[2].value;
        const birthMonth = inputsAge[1].value;
        const birthDay = inputsAge[0].value;
        const ageArr = ageCalculate(getBirthDateUsers(birthYear, birthMonth, birthDay));
        const getDynamicNumbers = ageArr.forEach((element, index) => {
            dynamicNumbers[index].classList.add('result-color');
            dynamicNumbers[index].innerHTML = element;
        });
    }
});