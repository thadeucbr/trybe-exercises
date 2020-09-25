function findLongestWord(str){
    let longestWord = str.split(' ').reduce(function(longest,currentWord){
        return currentWord.length > longest.length ? currentWord : longest;
    },'');
    return console.log(longestWord);
};

findLongestWord('Essa maracutaia maluca');