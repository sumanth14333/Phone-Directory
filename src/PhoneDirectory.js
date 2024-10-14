import React, { Component } from 'react';
import AddSubcriber from './AddSubcriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {

    constructor(){
        super()
        this.state = {
            subscriberList:[]
        }
    }

    addSubscriber = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if (subscriberList.length >0){
            newSubscriber.id = subscriberList[subscriberList.length -1].id + 1;
        }
        else{
            newSubscriber.id = 1;
        }

        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList})
        console.log(this.state.subscriberList)
    }

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscriberList} />} />
{/* 
                    <Route exact path='/' render={ (props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} />} /> */}
                    <Route exact path='/add' render={  (props) => <AddSubcriber {...props} addSubscriber={this.addSubscriber}  />} />
                </div>
            </Router>
        )
        
    }
}

export default PhoneDirectory;