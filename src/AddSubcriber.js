import React, { Component } from 'react'
import Header from './Header'
import './AddSubcriber.css'
import {Link} from 'react-router-dom'

class AddSubcriber extends Component {

    constructor(){
        super();
        this.state = {
            id:0,
            name:'',
            phone:''
        }
    }
    

    inputHandler = (e) => {
        const state = this.state;
        this.setState({...state,[e.target.name]:e.target.value})
        
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriber(this.state);
        this.setState({id:0, name:'', phone:''})
    }

    render(){

        return (
            <div>
              <Header heading='Add-Subscriber'/>
              <div className='component-body-container'>
                <Link to='/'><button className='custom-btn'>Back</button></Link>
                <form className='subscriber-form' onSubmit={this.onFormSubmitted.bind(this)}>
                    <label  className='label-control'>Name</label> <br/>
                    <input id='name' type='text' className='input-control' name='name' value={this.state.name} onChange={this.inputHandler}/><br/><br/>
                    <label className='label-control'>Phone</label> <br/>
                    <input id='phone' type='text' className='input-control' name='phone' value={this.state.value} onChange={this.inputHandler}/><br/><br/>
                    <div className='subscriber-info-container'>
                        <span className='subscriber-to-add-heading'>Subcriber to be added: </span><br/>
                        <span className='subscriber-info'>Name:{this.state.name}</span><br/>
                        <span className='subscriber-info'>Phone: {this.state.phone} </span>
                    </div>
                    <button type='submit' className='custom-btn add-btn'>Add</button>
                </form>
              </div>
            </div>
          )
    }
  
}

export default AddSubcriber
