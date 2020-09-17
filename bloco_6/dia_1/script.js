function gerarListaDeEstados(){
    const estados = ['São Paulo','Belo Horizonte','Rio de Janeiro'];
    for(let index = 0; index < estados.length; index += 1){
        let option = document.createElement('option');
        option.value = estados[index];
        option.innerText = estados[index];
        document.getElementById('estado').appendChild(option);
    }
}

window.onload = gerarListaDeEstados();