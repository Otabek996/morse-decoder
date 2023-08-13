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
    let letter = '';
    let res = '';
    let sentence = '';
    
    for (let i = 10; i <= expr.length; i += 10) {
        letter = String(Number(expr.slice(i - 10, i)));
        
        for (let i = 1; i < letter.length; i += 2) {
            if (letter == 'NaN') {
                sentence += ' ';
                res = '';
            } else if ((letter[i - 1] + letter[i]) == 10) {
                res += '.';
            } else {
                res += '-';
            }
        }

        if (res != '') sentence += MORSE_TABLE[res];
        res = '';
    }
    
    return sentence;
}

module.exports = {
    decode
}