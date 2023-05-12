// let regex = /^(\d{2})-(\d{2})-(\d{4})$/;
// if (!regex.test(dateBR)) {
//     return console.log(false); // não corresponde ao formato dd-mm-aa
// } else {
//     console.log('data correta')
// }


// const date = new Date(); // data atual
// const dateBR = date.toLocaleDateString('pt-BR');
// console.log(dateBR); // resultado: '11/05/2023'


// function ageCalculate(birthday) {
//     const ageDiffMs = Date.now() - birthday.getTime();
//     const ageDate = new Date(ageDiffMs);
//     const age = {
//         years: Math.floor((ageDate / (365.25 * 24 * 60 * 60 * 1000))),

//         months: Math.floor(((ageDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))),

//         days: Math.floor(((ageDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)))

//     }
//     const ageArr = Object.values(age);
//     return ageArr;
// };


const dtAtual = new Date();
console.log(dtAtual.getFullYear());