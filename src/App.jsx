
import './index.css'
import HeaderComponent from "./Component/HeaderComponent.jsx";
import tasks from "./data/tasks.js";


const person = {

}
function App() {
  // parte logica

  function currentTasks() {
    let currentItems = tasks.filter((task) => task.state.includes('backlog') || task.state.includes('in_progress')).map((task) => <li key={task.id} > <strong>{task.title}</strong> {task.state} Priority:{task.priority} Est. Time {task.estimatedTime}</ li>
    )

    return currentItems
  };

  function completedTasks() {
    let completedItems = tasks.filter((task) => task.state.includes('completed')).map((task) => <li key={task.id} > <strong>{task.title}</strong> {task.state} Priority:{task.priority} Est. Time {task.estimatedTime}</ li>
    )

    return completedItems
  };



  //parte html
  return (
    <>
      <HeaderComponent />

      <main className="container">
        <h2>Current Tasks</h2>
        <ul>{currentTasks()}</ul>

        <h2>Completed Tasks</h2>
        <ul>{completedTasks()}</ul>
      </main>

    </>

  );

}

export default App;