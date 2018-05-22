import React, {Component} from 'react';
import db from '../firebase';
import {} from 'react-redux';
import {updateChat} from '../actions';
import { connect } from 'react-redux';

// actions updates the state

// export the db
class Chat extends Component {
    componentDidMount(){
        db.ref('/chat-log').on('value',(snapshot)=>{
            // console.log('Chat Data: ',snapshot.val());
            // need to show the snapshot as a state
            this.props.updateChat(snapshot.val());
        });
    }
    // can't really use snapshot as a parameter
    render(){
        console.log('Chat Log: ', this.props.chatLog)
        // const chatElements = object.keys
        const {chatLog}=this.props;
        const chatElements=Object.keys(chatLog).map((key,index)=>{
            const {name,message}=chatLog[key];
            return <li className="collection-item" key={key}> <b>{name}:</b>{message}</li>
        })

        return (
            <div className="div">
                <h1 className="center">Chat Room</h1>
                <ul className="collection">
                    {chatElements}
                </ul>
            </div>
        )
    }
    
}
function mapStateToProps(state){
    return{
        chatLog:state.chat.log
    }
}
export default connect(mapStateToProps,{updateChat})(Chat);