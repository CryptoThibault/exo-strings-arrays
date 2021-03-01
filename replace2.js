let text1 = "In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems."
let text2 = "As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning."
let text3 = "The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names."

const regex = /Alice/i;
console.log(text1.replace(regex, 'Thibault'))
console.log(text2.replace(regex, 'Thibault'))
console.log(text3.replace(regex, 'Thibault'))