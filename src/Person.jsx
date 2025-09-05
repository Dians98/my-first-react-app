import React, { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ firstName: "John", name: "DOE" });

  return (
    <div className="inputGroup">
      <h1>
        {person.firstName} {person.name}
      </h1>
      <Input
        value={person.firstName}
        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
      />
      <Input
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
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
