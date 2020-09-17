function gerarListaDeEstados(){
    const estados = ['São Paulo','Belo Horizonte','Rio de Janeiro'];
    for(let index = 0; index < estados.length; index += 1){
        let option = document.createElement('option');
        option.value = estados[index];
        option.innerText = estados[index];
        document.getElementById('estado').appendChild(option);
    }
}
    function validaDia(id){
        const data = document.getElementById(id).value.split('/',1).pop();
        if(data < 0 && data <= 31){
            return alert('Dia de inicio invalido');
        }
    }

    function validaMes(id){
        const data = document.getElementById(id).value.split('/',2).pop();
        if(data < 1 && data <= 12){
            return alert('Mes de inicio invalido');
        }
    }

    function validaAno(id){
        const data = document.getElementById(id).value.split('/',3).pop();
        if(data < 0){
            return alert('Ano de inicio invalido');
        }
    }

    function validaData(id){
        const data = document.getElementById(id).value.length;
        if(data !== 10){
            return alert('Digite a data no formato: dd/mm/aaaa (01/01/2020)')
        }
    }
window.onload = gerarListaDeEstados();