let memeInsert = document.getElementById('meme-insert');

memeInsert.addEventListener('input',function(){
    localStorage.setItem('img',memeInsert);
    document.getElementById('meme-image').style.backgroundImage = localStorage.getItem('img');
})