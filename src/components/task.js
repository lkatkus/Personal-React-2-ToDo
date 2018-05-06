// MAIN IMPORT
import React,{ Component } from 'react';

// COMPONENT IMPORTS

// CSS
import './styles.css';

// COMPONENT
class Task extends Component{
    render(){
        return(
            <div className='task'>

                {this.props.taskData.task}

                <div>
                    <button>Finish</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default Task;