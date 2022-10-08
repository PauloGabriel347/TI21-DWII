const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

const tituloAno = filmes.map((filme) => {
  return {
    titulo: filme.nome,
    ano: filme.lancamento,
  };
});

const arrayId = filmes.map((filme, id) => {
  return {
    id: id + 1,
    nome: filme.nome,
    ano: filme.lancamento,
    diretores: filme.diretores,
    genero: filme.generos,
  };
});
console.log(arrayId);
