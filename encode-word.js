const emojis = require('./emojis.js');


// string-building version - boolean version - 
const encodeWordAlt = function(word) {
    let result = '';
    let found = false;
    for (const char of word) {
        found = false;
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                result += emoji.symbol;
                found = true;
            }
        }
        if (found === false) {
            result += char;
        }
    }
    return result;
}

// -  as a map
const encodeWord = function(word) {
    const letters = word.split('');
    const symbols = letters.map(function(char) {
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                return emoji.symbol;
            }
        }
        return char;
    });

    
    
return symbols.join('')
}


module.exports = encodeWord;