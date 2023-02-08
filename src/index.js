const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'Space':  ' ',
};
   let result = '';
let numArr = [];
let numArrClear = [];
 
let secStrLen = 10; //длина символов одной секции строки
let numString = '';
 
for (let i = 0; i < expr.length; i += secStrLen){
    numArr.push(expr.slice(i, i + secStrLen).padEnd(secStrLen, ".")); //разбил строку на секции по 10 символов и вывел в новый массив
 
}
/*console.log(numArr);*/
for (let z = 0; z < numArr.length; z++) {
   numArrClear.push(Number(numArr[z]));//удалил спереди лишние нули в каждой секции и добавил в новый массив(пробелы добавятся как NaN)
   numString = numArrClear.toString();

};

/*console.log(numString);*/
let dutNumString = numString.replace(/10/gi, '.'); //цифру 10 заменил на '.'
let resNumString = dutNumString.replace(/11/gi, '-');//цифру 11 заменил на '-'
let resNanString = resNumString.replace(/NaN/gi, 'Space');//заменил NaN на 'Space'
/*console.log(resNanString);*/
const resultMorse = resNanString.split(',');//Преобразовал строку Morse обратно в массив
/*console.log(resultMorse);*/
let resultArr = [];
let keys = Object.keys(MORSE_TABLE);

       for (let x = 0; x < resultMorse.length; x++) {
       for (let key in MORSE_TABLE) {
    if(key === resultMorse[x]){
        resultArr.push(MORSE_TABLE[key]);
    }


}
}
const resultString = resultArr.join('');
return resultString;

}

module.exports = {
    decode
}