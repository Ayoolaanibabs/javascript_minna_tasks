var stringFormat =(str)=> {
    var splitWords = str.split(' ');
    var splitLetters = splitWords.map((words)=>{
        let newWord = ''
        for (var i=0; i<= words.length; i++){
            var letter = words.charAt(i)
            if (letter == letter.toUpperCase()){
                letter = letter.toLowerCase()
            }else{
                letter = letter.toUpperCase()
            }
            newWord += letter
        }
        return newWord;
    })

        let upperCased = splitLetters.filter((words)=>{
            return words[0] == words[0].toUpperCase()
        })
        let endingWithING = splitLetters.filter((words)=>{
            return words.slice(-3).toUpperCase() === 'ING';
        })
        let palindromeFilter = upperCased.filter(word => {
            return word.toLowerCase() === word.split('').reverse('').join('').toLowerCase()
        })
        if (palindromeFilter.length == 1){
            var palindrome = palindromeFilter[0]
        }else if (palindromeFilter.length >= 1) {
            palindrome = palindromeFilter
        }else{
            palindrome = []
        }
        return {'upperCased': upperCased, 'endingWithING': endingWithING, 'palindrome': palindrome}
    }