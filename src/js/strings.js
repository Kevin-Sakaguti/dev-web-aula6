const str1 = 'Hello", aaa "World'
const str2 = 'Hello World!'

console.log(str1.length)
console.log(str2.length)

console.log("")

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.indexOf("World"))
console.log(str1.replace("World", "UFABC"))
console.log(str1.split(","))
console.log(str1.charAt(2))

const name = 'Kevin';
const age = 16;

const template = `Hello, ${name}. You are ${age} years old`;

console.log(template)