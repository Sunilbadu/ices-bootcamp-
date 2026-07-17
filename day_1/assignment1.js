//make calculator of 4 methods and give the required output with predefined numbers

//cheatsheet.zip(notesssss)
let numOne = 5
let numTwo = 6
const sum = (numOne, numTwo)=>{
    return numOne + numTwo;
}

const diff = (numOne, numTwo) =>{
    return numOne-numTwo;
}

const product = (numOne, numTwo) =>{
    return numOne * numTwo;
}

const divison = (numOne, numTwo) =>{
    return numOne / numTwo;
}

console.log(`here two numbers are: ${numOne} & ${numTwo}`)
console.log(`sum is ${sum(numOne, numTwo)}`)
console.log(`difference is ${diff(numOne, numTwo)}`)
console.log(`product is ${product(numOne, numTwo)}`)
console.log(`division is ${divison(numOne, numTwo)}`)