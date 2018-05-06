// MAIN IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENT IMPORTS
import TaskContainer from './components/taskContainer';

// CSS
import './styles.css';

// COMPONENT
const App = () => {
    
    return(
        <div className='mainContainer'>
            <h1>React To-Do List</h1>
            <TaskContainer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
