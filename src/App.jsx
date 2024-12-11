
import './index.css'
import HeaderComponent from "./Component/HeaderComponent.jsx";
import tasks from "./data/tasks.js";


const person = {

}
function App() {
  // parte logica

  function tasksList() {
    let item = tasks.map((task) => {
      return <li key={task.id}> {task.state}</li >;
    });

    return item
  };



  //parte html
  return (
    <>
      <HeaderComponent />

      <main className="container">
        <h2>Current Tasks</h2>
        <ul>{tasksList()}</ul>

        <h2>Completed Tasks</h2>
        <ul>{tasksList()}</ul>
      </main>

    </>

  );

}

export default App;