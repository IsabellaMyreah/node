console.log(process.argv)
// node index.js nome=Isabella idade=17
// console 

const args = process.argv.slice(2)
console.log(args)

const nome = args[0].split('=')[1]
console.log(nome)

const idade = args[1].split('=')[1]
console.log(idade)

console.log(`O nome é: ${nome} e a idade é ${idade}`)