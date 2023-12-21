import { dateUser, currentDate } from "./validatesDate";

export default function () {
    let today = new Date();

    let ageYears = today.getFullYear() - dateUser.getFullYear();
    let ageMonths = today.getMonth() - dateUser.getMonth();
    let ageDay = today.getDate() - dateUser.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDay < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    
    if (ageDay < 0) {
        // aqui pegamos o ultimo dia do mes anterior
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDay = lastMonth.getDate() - dateUser.getDate() + today.getDate();
        ageMonths--;
    }
    
    const age = {
        years: ageYears,
        months: ageMonths,
        days: ageDay
    };

    function showAge(){
        let i = 0;
        const ageList = document.querySelectorAll('.dynamic-line');
        const ageArr = Object.values(age);
        console.log(ageArr);

        for(let showAge of ageList){
            showAge.innerHTML = ageArr[i];
            showAge.classList.add('result-color');
            i++;
        }
    }
    showAge();
}