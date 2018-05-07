// MAIN IMPORTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// COMPONENT IMPORTS
import TaskContainer from './components/taskContainer';

// CSS
import './styles.css';

// COMPONENT
class App extends Component {

    state = {
        message:''
    }

    checkMessage = () => {
        return (
            <div>
               derp
            </div>
        )
    }

    render(){ 
        return(
            <div className='mainContainer'>
                <h1>React To-Do List</h1>
                { this.state.message ? this.state.message : null }
                <TaskContainer
                    changeMessage={(newMessage)=>{
                        this.setState({
                            message:newMessage
                        }, () =>{
                            console.log(this.state.message);
                            console.log(this.state)
                        })
                    }}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
