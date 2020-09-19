const replaceString = (word, search, replaceWith) => {
    return word.replace(new RegExp(search,'g'),replaceWith);
    };

const changeCase = (sentence, characterCase) => {
    if (characterCase === 'upper') {
        return sentence.toUpperCase();
    }else if (characterCase === 'lower'){
        return sentence.toLowerCase();
    }else {
        return sentence;
    }
};

const trimEdges = (sentence)  => { return sentence.trim();
};

const extractString = (sentence, start, end) => {
    if (start === 0 && end === 0) {
        return sentence;
    }else{
        return sentence.substring(start,end)
    }
};


const getInitials = (name) => {
    let nameSplit = name.split(' ');
    let firstLetters = '';
    for (const cur of nameSplit) {
        let firstLetter = cur.charAt(0).toUpperCase();
        firstLetters+= firstLetter;
    }
    return firstLetters;
};