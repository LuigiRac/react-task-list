
import tasks from "../data/tasks";

function MainComponent() {

    function currentTasks() {
        let currentItems = tasks.filter((task) => task.state.includes('backlog') || task.state.includes('in_progress')).map((task) =>

            <li key={task.id} >

                <div> <strong>{task.title}</strong> {task.state} </div>
                <div>Priority:{task.priority} </div>
                <div>Est. Time {task.estimatedTime}</div>
            </ li>);

        return currentItems

    };


    function completedTasks() {
        let completedItems = tasks.filter((task) => task.state.includes('completed')).map((task) =>

            <li key={task.id} >
                <strong>{task.title}</strong>
                <div>{task.state} </div>
                <div>Priority:{task.priority} </div>
                <div>Est. Time {task.estimatedTime}</div>
            </ li>);

        return completedItems
    };
    return (
        <main main className="container" >
            <h2>Current Tasks ({currentTasks().length})</h2>
            <ul className='list-style'>{currentTasks()}</ul>

            <h2>Completed Tasks ({completedTasks().length})</h2>
            <ul className='list-style'>{completedTasks()}</ul>
        </main >

    )
};



export default MainComponent;