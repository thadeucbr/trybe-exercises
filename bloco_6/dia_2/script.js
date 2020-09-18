function gerarListaDeEstados() {
	const estados = ['São Paulo', 'Belo Horizonte', 'Rio de Janeiro'];
	for (let index = 0; index < estados.length; index += 1) {
		let option = document.createElement('option');
		option.value = estados[index];
		option.innerText = estados[index];
		document.getElementById('estado').appendChild(option);
	}
}
new JustValidate('.form', {
	Rules: {
		document: {
			required: true,
			maxLength: 300,
			minLength: 5,
		},
		email: {
			required: true,
			email: true,
		},
		checkbox: {
			required: true,
		},
		name: {
			required: true,
			minLength: 3,
			maxLength: 40,
		},
		text: {
			required: true,
			maxLength: 300,
			minLength: 5,
		},
		password: {
			required: true,
			password: true,
			minLength: 4,
			maxLength: 8,
		},
		zip: {
			required: true,
			zip: true,
		},
	},
});
document.getElementById('data-inicio').DatePickerX.init();
window.onload = gerarListaDeEstados();
