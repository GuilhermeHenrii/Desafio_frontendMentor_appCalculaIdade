const currentTime = Date.now();
const dtNascimento = new Date('2002-05-14');

const minhaIdadeMs = currentTime - dtNascimento;
const minhaIdadeDt = new Date(minhaIdadeMs);
console.log(Math.abs(minhaIdadeDt.getFullYear()) - 1970);