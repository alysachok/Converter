function convertToNumber() {
    const word = document.getElementById('wordInput').value;

    try {
        const result = wordToNumber(word);
        if (!word) {
            document.getElementById('wordInputResult').value = '';
        } else {
            document.getElementById('wordInputResult').value = result || 'Invalid input. Valid examples: one, two, three, twenty-one';
        }
    } catch (e) {
        document.getElementById('wordInputResult').value = 'Invalid input. Valid examples: one, two, three, twenty-one';
    }
}

function convertToWords() {
    const number = document.getElementById('numberInput').value;
    try {
        const result = numberToWord(number);
        if (NaN) {
            document.getElementById('numberInputResult').value = '';
        } else {
            document.getElementById('numberInputResult').value = result || 'Invalid input. Valid examples: 1, 2, 3, 21';
        }
    } catch (e) {
        document.getElementById('numberInputResult').value = 'Invalid input. Valid examples: 1, 2, 3, 21';
    }
}

// function formatNumberWithSpaces(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// }

function numberToWord(number) {

}

function wordToNumber(word) {
    const obj = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fifteen": 15,
        "sixteen": 16,
        "seventeen": 17,
        "eighteen": 18,
        "nineteen": 19,
        "twenty": 20,
        "thirty": 30,
        "forty": 40,
        "fifty": 50,
        "sixty": 60,
        "seventy": 70,
        "eighty": 80,
        "ninety": 90,
        "hundred": 100,
        "thousand": 1000,
        "million": 1000000
    };
    let newStr = word.replace(/-/g, " ");
    console.log(newStr);
    let newStrWitoutAnd = newStr.replace(" and ", " ");
    console.log(newStrWitoutAnd);
    let words = newStrWitoutAnd.split(' ');
    console.log(words);
    let result = 0;
    let currentNumber = 0;
    for (let i = 0; i < words.length; i++) {
        if (obj[words[i]] != null) {
            currentNumber = obj[words[i]];
            if (currentNumber >= 1000) {
                console.log("4")
                result = result * currentNumber;
                currentNumber = 0;
            } else if (currentNumber >= 100 && currentNumber < 1000) {
                console.log("3")
                if (result === 0) {
                    result = currentNumber;
                } else {
                    result = result * currentNumber;
                }
                currentNumber = 0;
            } else if (currentNumber < 100 && words[i + 1] === "hundred" && words.includes("thousand") && (i != 0)) {
                currentNumber = currentNumber * 100;
                result = result + currentNumber;
                i = i + 1;
                currentNumber = 0;
            } else {
                console.log("1")
                result = result + currentNumber;
            }
        }
    }
    console.log(result)
    return result;
}