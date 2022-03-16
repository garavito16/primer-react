import logo from './logo.svg';
import './App.css';

let taks = ["Learn React","Climb Mt. Everest","Run a marathon","Feed the dogs"];

function App() {
  return (
    <div className="App">
      <h1 className="title">Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul className="list">
        {
          taks.map(task=> {
            return (<li>{task}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
