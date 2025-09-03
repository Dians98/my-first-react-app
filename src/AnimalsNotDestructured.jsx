export default function AnimalsNotDestructured() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>List of animals</h1>
      <AnimalsList animalsList={animals} />
    </div>
  );
}

function AnimalsList(props) {
  const animals = props.animalsList;

  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalsListItem key={animal} animalItem={animal} />;
      })}
    </ul>
  );
}

function AnimalsListItem(props) {
  const animal = props.animalItem;
  return <li>{animal}</li>;
}
