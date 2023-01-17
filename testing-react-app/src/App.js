import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';

function App() {
  const todos = [
    { id: 1, title: 'IQ Camera p1', completed: true },
    { id: 2, title: 'IQ Camera p2', completed: false }
  ]
  return (
    <div className="App">
      {
        todos.map((todo)=> {
          return (<Todo key={todo.id} todo={todo} />);
        })
      }
      <Todo />
    </div>
  );
}

export default App;
