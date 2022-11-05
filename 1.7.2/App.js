const Personagens = (props) => {
  const { familia } = props;
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];
  var filtro = /(redfield)/i;
  const FamiliaFiltro = personagens.filter((personagem) => {
    const Familia = personagem.match(filtro);
    return Familia;
  });

  console.log(FamiliaFiltro);

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagens
          .filter((personagem) => personagem.match(filtro))
          .map((personagem) => (
            <li>{personagem}</li>
          ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Personagens />
    </div>
  );
}
