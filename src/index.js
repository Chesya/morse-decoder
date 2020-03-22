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
    '*****':  ' ',
};
function decode(expr) {
    expr = expr.split('');
    arr = [];
    arr2 = [];
    str = '';
    for (let i = 0; i < (expr.length/2); i++) {
            arr[i] = expr.slice(2*i,2*i+2).join('');
            if (arr[i] == '00') { arr[i] = ''};
            if (arr[i] == '10') { arr[i] = '.'};
            if (arr[i] == '11') { arr[i] = '-'};
            if (arr[i] == '**') { arr[i] = '*'};
    }
    for (let i = 0; i < (arr.length/5); i++) {
        arr2[i] = arr.slice(5*i,5*i+5).join('');
        str = str + MORSE_TABLE[arr2[i]];
    }
    return str;
}
module.exports = {
    decode
}
