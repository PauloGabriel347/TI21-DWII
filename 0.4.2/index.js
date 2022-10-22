const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

const calculoMedia = alunos.map((aluno) => {
  const mediaGeral = aluno.notas.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota;
  }, 0);
  aluno.mediaGeral = mediaGeral / aluno.notas.length;
  return aluno;
});

console.log(calculoMedia);
