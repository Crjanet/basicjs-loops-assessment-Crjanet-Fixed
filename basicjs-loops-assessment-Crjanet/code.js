// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

let numbers = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
];

document.write("<h1>Array Analyzer</h1>");
let displayNumbers = function() { // This function will display the array to the DOM
    return numbers;
}
document.write("<h3>Now analyzing the array: " + displayNumbers() + "</h3>");

// We want all answers to be rendered using an unordered list
document.write("<ul>")
// That means each answer will be rendered with li
// For example:
//     document.write("<li>First Number: " + numbers[0] + "</li>");
//     document.write("<li>Second Number: " + numbers[1] + "</li>");

// Write your code here 👇
let largestNumber = function (numbers) {
    let largeNumber = 0
    for (let index = 0; index < numbers.length; index++) {
         let currentNumber = numbers[index]
         if (currentNumber > largeNumber) {
            largeNumber = currentNumber
        }
    } 
    return largeNumber
}

let smallestNumber = function(numbers) {
    let smallNumber = Number.POSITIVE_INFINITY
    for (let index = 0; index < numbers.length; index++) {
         let number = numbers[index]
         if (number < smallNumber) {
            smallNumber = number
        }
    }
    return smallNumber
}

let sumOfAllNumbers = function (numbers){
    let sum = 0
    for (let index = 0; index < numbers.length; index++) {
         sum += numbers[index]
    }
    return sum
}
 
let average = function (numbers) {
    let sum = 0
    for (let index = 0; index < numbers.length; index++){
        sum += numbers[index]
    }
    let avg = sum / numbers.length
    return avg
 }

let evenNumbers = function (numbers) {
    let evens = numbers.filter(number => {
        return number % 2 === 0

    })
    return evens
}

let oddNumbers = function (numbers) {
    let odds = numbers.filter(number => {
        return number % 2 !== 0
    })
    return odds
}

let divisibleBy8 = function (numbers) {
    let divisible = numbers.filter(number =>{
        return number % 8 === 0
    })
    return divisible
}

console.log(largestNumber(numbers))
console.log(smallestNumber(numbers))
console.log(sumOfAllNumbers(numbers))
console.log(average(numbers))
console.log(evenNumbers(numbers))
console.log(oddNumbers(numbers))
console.log(divisibleBy8(numbers))
document.write(`<h3><li> Largest Number: ${largestNumber(numbers)} </li></h3>`)
document.write(`<h3><li> Smallest Number: ${smallestNumber(numbers)} </li></h3>`)
document.write(`<h3><li> Sum: ${sumOfAllNumbers(numbers)} </li></h3>`)
document.write(`<h3><li> Average Value: ${average(numbers)} </li></h3>`)
document.write(`<h3><li>Even Numbers: ${evenNumbers(numbers)} </li></h3>`)
document.write(`<h3><li>Odd Numbers: ${oddNumbers(numbers)} </li></h3>`)
document.write(`<h3><li>Numbers Divisible By 8: ${divisibleBy8(numbers)} </li></h3>`)
document.write("</ul>")