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

///////unchecked by dereks

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

function mango(quantity, price) {
    const actualCost = price * .66
    return Math.ceil(quantity * actualCost)
}

console.log(mango(9, 5))

