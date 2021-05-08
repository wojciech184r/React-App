import React, { Component } from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends Component {
    state = { 
        value: '',
        isEmpty: true,
        sendingMessage: ''

     } 

     handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            value: '',
            isEmpty:true,
        })
       
        
     }
     

     handleChange = (e) =>{
         if(e.target.value.length > 0){
             this.setState({
                 value: e.target.value,
                 isEmpty: false,
             })
         }else{
            this.setState({
                value: e.target.value,
                isEmpty: true,
         })
     }
    }
    render() { 
        return ( 
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Write to Us</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="write message"></textarea>
                    <button>Send</button>
                </form>
                <Prompt
                    when={!this.state.isEmpty}
                    message="You didn't seend message are U stil want to live page?"
                    />
                    
            </div>
         );
    }
}
 
export default ContactPage;