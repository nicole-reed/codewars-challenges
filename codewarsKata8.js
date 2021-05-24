function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}
console.log(removeExclamationMarks('YO! what the fu!k.'))

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i]
        }
    }
    return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))

function multiTable(number) {
    const tableArr = []
    for (let i = 0; i < 10; i++) {
        i < 9 ? tableArr.push(`${i + 1} * ${number} = ${(i + 1) * number}\n`) : tableArr.push(`${i + 1} * ${number} = ${(i + 1) * number}`)
    }
    return tableArr.join().replace(/,/g, '')
}

console.log(multiTable(10))

function sumStr(a, b) {
    const numA = a === '' ? 0 : parseInt(a)
    const numB = b === '' ? 0 : parseInt(b)
    return (numA + numB).toString()
}

console.log(sumStr(32, 54))


function getRealFloor(n) {
    return n <= 0 ? n : n < 13 ? n - 1 : n - 2
}
console.log(getRealFloor(16))


function powersOfTwo(n) {
    const arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i))
    }
    return arr
}

console.log(powersOfTwo(7))

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}
console.log(greet('nicky', 'nicky'))

function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(reverseWords('do what you want to bro'))

function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2
}

console.log(lovefunc(32, 11))

const quarterOf = (month) => {
    return month <= 3 ? 1 :
        month > 3 && month < 7 ? 2 :
            month > 6 && month < 10 ? 3 :
                4
}
//return Math.ceil(month / 3) is the better answer

console.log(quarterOf(7))

const areaOrPerimeter = function (l, w) {
    return l === w ? (l * w) : 2 * (l + w)
}

console.log(areaOrPerimeter(7, 7))

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y)
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    if (distanceToPump <= (fuelLeft * mpg)) {
        return true
    } else {
        return false
    }
}

console.log(zeroFuel(75, 22, 2))

function bmi(weight, height) {
    const bmi = weight / (height * height)

    if (bmi <= 18.5) {
        return "Underweight"
    }

    if (bmi <= 25.0) {
        return "Normal"
    }

    if (bmi <= 30.0) {
        return "Overweight"
    }

    if (bmi > 30) {
        return "Obese"
    }

}

console.log(bmi(89, 1.65))

function take(arr, n) {
    return arr.slice(0, n)
}
console.log(take(['cow', 2, true, 8, 'butt', 'head', { name: 'nicky' }, 4, 5, 6, 12, 65, 'yo'], 10))

function twiceAsOld(dadYearsOld, sonYearsOld) {
    const son2 = sonYearsOld * 2
    const years = dadYearsOld >= son2 ? dadYearsOld - son2 : son2 - dadYearsOld
    return years
}
//return Math.abs(dadYearsOld - 2 * sonYearsOld)
//Math.abs(dad, son) finds the difference

console.log(twiceAsOld(56, 18))

function abbrevName(name) {
    const splitName = name.toUpperCase().split(' ')
    return `${splitName[0].charAt(0)}.${splitName[1].charAt(0)}`
}

console.log(abbrevName('nicky Reed'))

function removeChar(str) {
    return str.split('').slice(1, str.length - 1).join('')
}

console.log(removeChar('sdansodifmoi'))

function spEng(sentence) {
    return sentence.toLowerCase().includes('english')
}

console.log(spEng('abcEnglisdefs'))

function find_average(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return array.length === 0 ? 0 : sum / array.length
}
console.log(find_average([]))
//using reduce:
//return array.reduce((a, b) => (a + b)) / array.length;

function first(arr, n) {
    if (n == 0) {
        return []
    }
    if (!n) {
        return arr.slice(0, 1)
    }
    return arr.slice(0, n)

}
console.log(first(['a', 'b', 'c', 'd', 'e']))

function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n * m
    } else {
        return 0
    }
}
console.log(paperwork(5, 5))

function updateLight(current) {
    return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}

console.log(updateLight('red'))

function enough(cap, on, wait) {
    const seatsLeft = (cap - on)
    if (wait <= seatsLeft) {
        return 0
    } else {
        return wait - seatsLeft
    }
}

console.log(enough(100, 60, 50))

function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy'
    } else if (old < 18) {
        return 'drink coke'
    } else if (old < 21) {
        return 'drink beer'
    } else if (old >= 21) {
        return 'drink whisky'
    }
}
console.log(peopleWithAgeDrink(13))

function dutyFree(normPrice, discount, hol) {
    const percentage = discount / 100
    const savings = normPrice * percentage
    return Math.floor(hol / savings)
}

//function dutyFree(normPrice, discount, hol){
// return (Math.floor(hol / normPrice / discount * 100))
// }

console.log(dutyFree(24, 35, 3000))

function preFizz(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i + 1)
    }
    return arr
}

console.log(preFizz(16))

//unchecked


//buy 2 get one free special, return the total cost
function mango(quantity, price) {
    if (quantity < 3) {
        return quantity * price
    }
    const threes = quantity / 3
    const discount = Math.floor(threes) * price
    return (price * quantity) - discount
}

console.log(mango(11, 5))

//swap array args (only 2 items)
function swapValues(args) {
    return args.reverse()
}

// return an array containing all of the strings in the input array except those that match strings in geese
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    const newGeese = []
    for (let i = 0; i < birds.length; i++) {
        if (!geese.includes(birds[i])) {
            newGeese.push(birds[i])
        }
    }
    return newGeese
}
//return birds.filter(b => !geese.includes(b)) is the simpler solution
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))


//generates a range of integers from min to max, with the step
function generateRange(min, max, step) {
    let arr = []
    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}

console.log(generateRange(40, 180, 8))

//find number of sheep that are present
function countSheep(arrayOfSheep) {
    let sheep = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheep += 1
        }
    }
    return sheep
}

console.log(countSheep([true, true, true, false]))


//code to convert miles per imperial gallon to kilometers per liter
function converter(mpg) {
    const perLitre = mpg / 4.54609188
    const kilometers = (perLitre * 1.609344).toFixed(2)
    return parseFloat(kilometers)
}

console.log(converter(20))

//return age of pets bought humanYears ago [humanYears ago, cat age, dog age]
function humanYearsCatYearsDogYears(humanYears) {
    if (humanYears === 1) {
        return [humanYears, 15, 15]
    } if (humanYears === 2) {
        return [humanYears, 24, 24]
    }
    return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
}

console.log(humanYearsCatYearsDogYears(10))

//returns an array of integers from n to 1 where n>0
function reverseSeq(n) {
    const arr = [...Array(n).keys()]
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(n - i)
    }
    return newArr
}
console.log(reverseSeq(14))

//turn number into reversed array
function digitize(n) {
    const separateNums = n.toString().split('')
    const parsedNums = separateNums.map(num => parseInt(num))
    return parsedNums.reverse()
    //  return String(n).split('').map(Number).reverse() for a one-liner
}
console.log(digitize(89234985))

//return array with all missing numbers added
function pipeFix(numbers) {
    const min = Math.min(...numbers)
    const max = Math.max(...numbers)
    let arr = []
    for (let i = min; i <= max; i++) {
        arr.push(i)
    }
    return arr
}
console.log(pipeFix([3, 4, 5, 6, 7, 8, 25]))

//sort words in alphabetical order return first word with *** between letters
function twoSort(s) {
    const sorted = s.sort()
    return sorted[0].split('').join('***')
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

//see if any of the numbers are the character codes for lower case vowels
function isVow(a) {
    return a.map((num) => {
        if (num === 97) {
            return 'a'
        }
        if (num === 101) {
            return 'e'
        }
        if (num === 105) {
            return 'i'
        }
        if (num === 111) {
            return 'o'
        }
        if (num === 117) {
            return 'u'
        }
        return num
    })
}
console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]))

//how many dalmations
function howManyDalmations(number) {
    const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]

    return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
}
console.log(howManyDalmations(35))

//find longest word and return its length
function findLongest(str) {
    const arrOfWords = str.split(" ")
    let longest = 0
    for (let i = 0; i < arrOfWords.length; i++) {
        if (arrOfWords[i].length > longest) {
            longest = arrOfWords[i].length
        }
    }
    return longest
}
console.log(findLongest("The quick white fox jumped around the massive dog"))

