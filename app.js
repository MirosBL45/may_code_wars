// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
console.log('1. assignment');
console.log('Complete the solution so that the function will break up camel casing, using a space between words');

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}

console.log(solution('myNameIsMiroslavJovic'));
console.log('#######################------#######################');


// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log('2. assignment');
console.log('In this kata you are required to, given a string, replace every letter with its position in the alphabet');

function alphabetPosition(text) {
    return text.toLowerCase().split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
            return code - 96;
        }
        return '';
    }).filter(value => value !== '').join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log('#######################------#######################');


// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
console.log('3. assignment');
console.log('Given an array of integers, find the one that appears an odd number of times');

function findOdd(arr) {
    const count = {};
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    for (const numFin in count) {
        if (count[numFin] % 2 !== 0) {
            return Number(numFin);
        }
    }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log('#######################------#######################');


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
console.log('4. assignment');
console.log('Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched');

function pigIt(str) {
    return str.split(' ').map(word => {
        if (/^[a-zA-Z]+$/.test(word)) {
            return word.slice(1) + word[0] + 'ay'
        }
        return word;
    }).join(' ');
}

console.log(pigIt('Hello world !'));
console.log('#######################------#######################');


// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
console.log('5. assignment');
console.log('Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix');

function determinant(matrix) {
    const n = matrix.length;


    if (n === 1) {
        return matrix[0][0];
    }


    if (n === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }


    let det = 0;
    for (let col = 0; col < n; col++) {
        const minor = matrix.slice(1).map(row => row.filter((_, j) => j !== col));
        const sign = col % 2 === 0 ? 1 : -1;
        det += sign * matrix[0][col] * determinant(minor);
    }

    return det;
}

console.log(determinant([[2, 5, 3], [1, -2, -1], [1, 3, 4]]));
console.log('#######################------#######################');

// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
console.log('6. assignment');
console.log('Maximum number of electrons in a shell is distributed with a rule of 2n^2 (n being position of a shell)');

function atomicNumber(electrons) {
    let n = 1;
    let distribution = [];

    while (electrons > 0) {
        let maxElectronsInShell = 2 * n * n;

        if (electrons >= maxElectronsInShell) {
            distribution.push(maxElectronsInShell);
            electrons -= maxElectronsInShell;
        } else {
            distribution.push(electrons);
            electrons = 0;
        }
        n++;
    }
    return distribution;
}

console.log(atomicNumber(28));
console.log('#######################------#######################');

// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
console.log('7. assignment');
console.log('Let`s say that the `slide down` is the maximum sum of consecutive numbers from the top to the bottom of the pyramid.');

function longestSlideDown(pyramid) {
    let results = pyramid[pyramid.length - 1].slice();

    for (let row = pyramid.length - 2; row >= 0; row--) {
        for (let col = 0; col < pyramid[row].length; col++) {
            results[col] = pyramid[row][col] + Math.max(results[col], results[col + 1]);
        }
    }
    return results[0];
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
console.log('#######################------#######################');

// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
console.log('8. assignment');
console.log('Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square)');

function listSquared(m, n) {
    function getDivisors(num) {
        let divisors = [];
        for (let i = 0; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== num / i) {
                    divisors.push(num / i);
                }
            }
        }
        return divisors;
    }

    function isPerfectSquare(num) {
        return Number.isInteger(Math.sqrt(num));
    }

    let result = [];

    for (let i = m; i <= n; i++) {
        let divisors = getDivisors(i);
        let sumOfSquares = divisors.reduce((sum, divisor) => sum + divisor * divisor, 0);

        if (isPerfectSquare(sumOfSquares)) {
            result.push([i, sumOfSquares]);
        }
    }

    return result;
}

console.log(listSquared(42, 250));
console.log('#######################------#######################');

// Mexican Wave.
console.log('9. assignment');
console.log('Mexican Wave');

function wave(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }

        let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        result.push(waveStr);
    }

    return result;
}

console.log(wave("wave"));
console.log('#######################------#######################');

// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
console.log('10. assignment');
console.log('returns an array of the top-3 most occurring words, in descending order of the number of occurrences');

function topThreeWords(text) {
    const words = text.toLowerCase().match(/\b[a-z]+(?:'[a-z]+)*\b/g) || [];
    const wordCounts = {};

    words.forEach(word => {
        if (word in wordCounts) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);

    return sortedWords.slice(0, 3);
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."));
console.log('#######################------#######################');

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
console.log('11. assignment');
console.log('Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise');

function snail(array) {
    let result = [];

    while (array.length) {
        result = result.concat(array.shift());

        for (let i = 0; i < array.length; i++) {
            if (array[i].length) {
                result.push(array[i].pop());
            }
        }

        if (array.length) {
            result = result.concat(array.pop().reverse());
        }

        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length) {
                result.push(array[i].shift());
            }
        }
    }

    return result;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log('#######################------#######################');

//  create a NxN spiral with a given size.
console.log('12. assignment');
console.log(' create a NxN spiral with a given size');


console.log('#######################------#######################');