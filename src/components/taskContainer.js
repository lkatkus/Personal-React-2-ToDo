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
        formData: {
            taskContent: '',
            taskPriority: ''
        }
    }

    // Function - Renders tasks from state.tasks
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

    // Function - deletes task
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

    // Function - sets task status to finished
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
    
    // Function - adds a 'add new task' button
    newTaskButton = () => {
        
        // Method - creates new task and adds tasks array
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

        const updateFormState = (event) => {
            
            let newFormData = {
                ...this.state.formData
            }

            let key = event.target.id;
            let value = event.target.value;

            newFormData[key] = value;

            this.setState({
                formData: newFormData
            })
        }

        const submitForm = (event) => {
            event.preventDefault();

            this.setState({
                tasks: [...this.state.tasks, {task:`${this.state.formData.taskContent}`, status:`${this.state.formData.taskPriority}`}]
            },() => {
                // Add confirmation message after adding new task
                this.props.changeMessage('Task added');
                
                // Reset form data after adding task
                this.setState({
                    formData:{
                        taskContent: '',
                        taskPriority: ''
                    }
                })
            });         
        }

        return(
            <div className='newTaskButton'>
                <form onSubmit={(event) => { submitForm(event) }}>

                    <div>
                        <label htmlFor="taskContent">Task description</label>
                        <input id="taskContent" name="taskContent" onChange={ (event) => { updateFormState(event) } } />
                    </div>

                    <div>
                        <label htmlFor="taskPriority">Task priority</label>
                        <select id="taskPriority" name="taskPriority" onChange={ (event) => { updateFormState(event) } }>
                            <option>Normal</option>
                            <option>Urgent</option>
                            <option>Critical</option>
                        </select>
                    </div>

                </form>
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