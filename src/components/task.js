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
                    <button onClick={()=>{ this.props.finishTask(this.props.id) }}>Finish</button>
                    <button onClick={()=>{ this.props.deleteTask(this.props.id) }}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Task;