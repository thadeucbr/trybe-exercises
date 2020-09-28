const usuario = {
    nome: 'thadeu',
    sobrenome: 'castelo branco'
}

const endereco = {
    rua: 'Ministro Godoi',
    numero: '420',
    tipo: 'apto'
}

const teste = Object.assign(usuario, endereco);
teste.nome = 'maracutaia';
console.log(teste);
console.log(usuario);