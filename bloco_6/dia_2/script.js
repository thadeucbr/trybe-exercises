function gerarListaDeEstados() {
	const estados = ['São Paulo', 'Belo Horizonte', 'Rio de Janeiro'];
	for (let index = 0; index < estados.length; index += 1) {
		let option = document.createElement('option');
		option.value = estados[index];
		option.innerText = estados[index];
		document.getElementById('estado').appendChild(option);
	}
}

new window.JustValidate('.teste', {
	rules: {
		cargo: {
			required: true,
			minLength: 5,
			maxLength: 30,
		},
		resumoCv: {
			required: true,
			minLength: 50,
			maxLength: 1000,
		},
	},
});
document.getElementById('data-inicio').DatePickerX.init();
window.onload = gerarListaDeEstados();
