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
                        <Task id={i} taskData = {item} deleteTask={this.deleteTask} finishTask={this.finishTask}/>
                    </div>
                )
            })
        )
    }

    deleteTask = (id) => {
        // CREATE PLACEHOLDER ARRAY FOR CHANGING
        let newTasksList = this.state.tasks;

        // REMOVE TASK FROM TASK ARRAY BY INDEX
        newTasksList.splice(id,1);

        // UPDATE STATE
        this.setState({
            tasks: newTasksList
        },()=>{
            // ADD CONFIRMATION MESSAGE
            this.props.changeMessage('Task deleted');
        })
    }

    finishTask = (id) => {
        // CREATE PLACEHOLDER ARRAY FOR CHANGING
        let newTasksList = this.state.tasks;
        
        // UPDATE TASK STATUS
        newTasksList[id].status = 'Finished';
        
        // UPDATE STATE
        this.setState({
            tasks: newTasksList
        },()=>{
            // ADD CONFIRMATION MESSAGE
            this.props.changeMessage('Task finished');
        })
    }
    
    newTaskButton = () => {
        const addNewTask = () => {
            this.setState({
                tasks: [...this.state.tasks, {task:`New Task ${this.state.num}`, status:'Urgent'}]
            },() => {
                // ADD CONFIRMATION MESSAGE
                this.props.changeMessage('Task added');
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