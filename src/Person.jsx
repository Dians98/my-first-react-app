import React, { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ firstName: "John", name: "DOE", age:30 });

    const incrementAge = () => {
        setPerson({...person, age: person.age + 1});
    }

  return (
    <div className="inputGroup">
      <h3><span>La personne s'appele {person.firstName} {person.name} et elle a {person.age} ans</span></h3>

      <Input
        value={person.firstName}
        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
      />
      <Input
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <IncrementAgeBtn onClick={incrementAge}/>
    </div>
  );
}

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      value={value} // contrôle l’input avec la valeur du parent
      onChange={onChange} // appelle la fonction passée par le parent
    />
  );
}

function IncrementAgeBtn({onClick}){
    return <button onClick={onClick}>Augmenter son age</button>
}
