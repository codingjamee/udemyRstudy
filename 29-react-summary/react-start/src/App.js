import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo title="Cleaning" />
      <Todo title="Wash a car" />
      <Todo title="Start a  new project" />
    </div>
  );
}

export default App;
