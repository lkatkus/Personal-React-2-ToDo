// MAIN IMPORT
import React, { Component } from 'react';

// COMPONENT IMPORTS
import Task from './task';

// CSS
import './styles.css';

// COMPONENT
class TaskContainer extends Component {

    state = {
        tasks : [
            {task:'Learn ReactJS', status:'In progress'},
            {task:'Get a job', status:'Urgent'},
            {task:'Learn NodeJS', status:'In progress'},
            {task:'Plan summer vacation', status:'In progress'},
            {task:'Build a house', status:'In progress'}
        ],
        num: 1 /* HELPER FOR TESTING */
    }

    renderTasks = () => {
        return(
            this.state.tasks.map((item,i)=>{
                return(
                    <div key={i}>
                        <Task taskData = {item} />
                    </div>
                )
            })
        )
    }
    
    newTaskButton = () => {
        const addNewTask = () => {
            this.setState({
                tasks: [...this.state.tasks, {task:`New Task ${this.state.num}`, status:'Urgent'}]
            },() => {
                console.log(this.state.tasks)
                this.setState({
                    num: this.state.num + 1
                })
            } );
        }

        return(
            <div className='newTaskButton' onClick={addNewTask}>
                Add new tasks
            </div>
        )
    }

    render(){
        return(
            <div className='taskContainer'>
                { this.renderTasks() }
                { this.newTaskButton() }
            </div>
        )
    }
}

export default TaskContainer;