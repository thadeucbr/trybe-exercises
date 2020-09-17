function gerarListaDeEstados() {
	const estados = ['São Paulo', 'Belo Horizonte', 'Rio de Janeiro'];
	for (let index = 0; index < estados.length; index += 1) {
		let option = document.createElement('option');
		option.value = estados[index];
		option.innerText = estados[index];
		document.getElementById('estado').appendChild(option);
	}
}
function validaDia(id) {
	const data = document.getElementById(id).value.split('/', 1).pop();
	if (data < 0 || data > 31) {
		return document.getElementById(id).setCustomValidity('Dia de inicio invalido');
	}
}

function validaMes(id) {
	const data = document.getElementById(id).value.split('/', 2).pop();
	if (data > 1 || data < 12) {
		return document.getElementById(id).setCustomValidity('Mes de inicio invalido');
	}
}

function validaAno(id) {
	const data = document.getElementById(id).value.split('/', 3).pop();
	if (data < 0) {
		return document.getElementById(id).setCustomValidity('Ano de inicio invalido');
	}
}

document.getElementById('enviar').addEventListener('click', () => {
	validaDia('data-inicio');
	validaMes('data-inicio');
	validaAno('data-inicio');
});
window.onload = gerarListaDeEstados();
