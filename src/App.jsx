

export default function App() {
  return (
    <div>
      <h1>Hello world ! this is my first component 😁 </h1>
      <p>I am very happy to be here !</p>
      <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button>Click me if you like !</button>
  )
}