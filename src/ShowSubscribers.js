import { React, Component } from 'react';
import './ShowSubscribers.css';
import Header from './Header';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  // }

  // componentDidMount() {
  //   let newSubscriber = {
  //     id:1,
  //     name: 'sumanth',
  //     phone: '9874898745'
  //   }
  //   let subscriberList = this.state.subscribersListToShow;
  //   subscriberList.push(newSubscriber)
  //   this.setState({subscribersListToShow: subscriberList})
  // }

 

  deleteHandler = () => {
    alert("Delete Clicked")
  }
  render(){
    return (
      <>
        <Header heading='phone-directory' />
        <div className='component-body-container'>
          <Link to='/add'><button className='btn'> ADD </button> </Link>
          <div className='grid-heading-container'>
            <span className='grid'>Name</span>
            <span className='grid'>Phone</span> 
            <span> Edit </span>         
          </div>
          {
            this.props.subscribersList.map((items,ind) => {
              return(
                <div className='grid-container' key={ind}>
                  <span className='grid-item'>{items.name}</span>
                  <span className='grid-item'>{items.phone}</span>
                  <button className='delete-btn' onClick={this.deleteHandler}>Delete</button>
                </div>
              )
            })
          }   
        </div>
        
      </>
  )
  }
  
  
}

export default ShowSubscribers;
