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
console.log('#############################################');


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
console.log('#############################################');


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
console.log('#############################################');


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
console.log('#############################################');


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
console.log('#############################################');