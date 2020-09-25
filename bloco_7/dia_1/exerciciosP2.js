function findLongestWord(str){
    let longestWord = str.split(' ').reduce(function(longest,currentWord){
        return currentWord.length > longest.length ? currentWord : longest;
    },'');
    return console.log(longestWord);
};

findLongestWord('Essa maracutaia maluca');

let clickCounter = 0;
document.getElementById('button').addEventListener('click', () => {
    clickCounter += 1;
    document.getElementById('clicks').innerText = `Clicks: ${clickCounter}`;
})