// Problems..


// ---------------------------------------------------------
// const problem1 = () => {
//     let x = prompt("Enter the number: ")

//     x % 2 === 0 ? console.log('Number is even') : console.log("Number is odd")
// }
// problem1()








// ---------------------------------------------------------
// const problem2 = (x) => {
//     let output = [0, 1]

//     for (let i = 2; i < x; i++) {
//         output.push(output[i - 2] + output[i - 1])
//     }
//     console.log(output);
// }
// problem2(parseInt(prompt("Enter the sequence: ")))




// --------------------------------------------------------
// const problem3 = () => {
//     let x = prompt('Enter the word')

//     console.log(x.split('').reverse().join(''))
// }
// problem3()





// --------------------------------------------------------
// const problem4 = () => {
//     let x = parseInt(prompt("Enter the year: "))

//     if (x % 4 === 0 && x % 100 !== 0 || x % 400 === 0)
//         console.log(`${x} is the loop year`);
//     else console.log(`${x} is not the loop year`);
// }
// problem4()





// --------------------------------------------------------not solved
// const problem5 = () => {
//     let x = parseInt(prompt("Enter the number: "))

//     for (let i = 1; i <= x; i++) {
//         // console.log(`All prime numbers between 1 and ${x} are: ${i}`);
//     }
// }
// problem5()




// --------------------------------------------------------
// const problem6 = () => {
//     let x = prompt("Enter the word: ")

//     let isPolindrome = x.split('').reverse().join('')
//     console.log(x === isPolindrome);
// }
// problem6()






// --------------------------------------------------------
// const problem7 = () => {
//     let x = parseInt(prompt("Enter the number need to be factorialled: "))

//     for (let i = 1; i <= x; i++) {
//         console.log(`${i}! =  ${i * i}`);
//     }
// }
// problem7()






// --------------------------------------------------------
// const problem8 = (arr) => {
//     console.log(arr.sort(function (a, b) { return a - b }));
// }
// problem8([23, 34, 45, 45, 2,2,  5, 12, 2, 234])






// --------------------------------------------------------
// const problem9 = (arr) => {
//     let sum = 0
//     for (let el of arr) {
//         sum += el
//     }
//     console.log(sum);
// }
// problem9([1, 2, 3, 5, 7, 9])






// --------------------------------------------------------
// const problem10 = (arr) => {
//     console.log(`${arr}
// MAX = ${Math.max(...arr)}`);
//     console.log(`${arr}
// MIN = ${Math.min(...arr)}`);
// }
// problem10([1, 2, 3, 5, 7, 9])









// --------------------------------------------------------
// const problem11 = (sen) => {
//     let vowels = 'aeiou'
//     let consonants = 'bcdfghjklmnpqrstvwxyz'
//     let countVowels = 0
//     let countConsonants = 0

//     for (let i = 0; i < sen.length; i++) {
//         if (vowels.indexOf(sen[i].toLowerCase()) > -1) {
//             countVowels++
//         }
//         if (consonants.indexOf(sen[i].toLowerCase()) > -1) {
//             countConsonants++
//         }
//     }

//     console.log(`The sentence is:  ${sen}
// There are ${countVowels} vowels in given sentence`);

//     console.log(`The sentence is:  ${sen}
// There are ${countConsonants} consonants in given sentence`);
// }
// problem11(prompt("Enter the sentence: "))







// --------------------------------------------------------
// const problem12 = () => {
//     let x = parseInt(prompt("Enter the number"))

//     let sum = 0,
//         lastDigit;
//     while (x !== 0) {
//         lastDigit = x % 10
//         sum += lastDigit
//         x = parseInt(x / 10)
//     }
//     console.log(sum);



// //    second way..

// //    let x = prompt("Enter the number")
// //    let sum = 0
// //    x.split('').map(el => sum += parseInt(el))
// //    console.log(sum);
// }
// problem12()








// --------------------------------------------------------
// const problem13 = () => {
//     let x = prompt("Enter the number")
//     let sen = x.split(' ')

//     let newArr = []

//     for (let i of sen) {
//         newArr.push(i.length)
//     }


//     let longLength = newArr.sort(function (a, b) { return b - a })  // in uzyn length-y bolan sozi one gecirmek
//     let longWord = sen.filter(el => el.length === longLength[0])  // in uzyn sozi almak

//     console.log(longWord.join(''));
// }
// problem13()








// --------------------------------------------------------
// const problem14 = () => {
//     let arr = [1, 4, 6, 6, 34, 8, 1, 6, 2, 4, 4, 4, 4]

//     let dublicatedAll = arr.filter((el, i) => {
//         return arr.indexOf(el) !== i
//     })
//     let justDublicated = dublicatedAll.filter((el, i) => {
//         return dublicatedAll.indexOf(el) === i
//     })

//     console.log(justDublicated);
// }
// problem14()









// --------------------------------------------------------
// const problem15 = () => {
//     let x = prompt("Enter the number")

//     let num,
//         sum = 0;

//     let arr = x.split('')

//     for (let i of arr) {
//         num = i ** arr.length
//         sum += num
//     }
//     console.log(`is x Armstrong :  ${x == sum}`);

// }
// problem15() //check: 371, 370 theese are armsstrong numbers






// --------------------------------------------------------
// const problem16 = (a, b) => {
//     a = a.split('').sort().join('')
//     b = b.split('').sort().join('')

//     console.log(a === b);
// }
// problem16('abc', 'cba')







// --------------------------------------------------------
// const problem17 = (arr) => {
//     arr = arr.sort()
//     let missed = [];

//     for (let i = 1; i <= arr.length; i++) {
//         if (arr.indexOf(i) == -1) {
//             missed.push(i);
//         }
//     }
//     console.log(missed);
// }
// problem17([1, 2, 7, 5, 8, 9])





