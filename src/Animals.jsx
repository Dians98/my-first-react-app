//DANS CETTE FONCTION C'EST LA VERSION

export default function Animals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  return <AnimalList animals={animals} />;
}

function AnimalList({ animals }) {
  if (!animals || animals.length === 0) {
    return <h1>No animals available.</h1>;
  }

  return (
    <>
      <h1>Animals</h1>
      <ul>
        {animals.map((animal) => {
          return <AnimalListItem key={animal} animal={animal} />;
        })}
      </ul>
    </>
  );
}

function AnimalListItem({ animal }) {
  return animal.startsWith("L") && <li>{animal}</li>;
}
