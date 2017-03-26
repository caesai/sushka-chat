import React, { PropTypes } from 'react';
import Message from './Message.jsx';
import Avatar from './Avatar.jsx';
import { connect } from 'react-redux';
import store from '../store/store.jsx';

let box;

let MessageBox = ({messages}) => {
    return (
        <div className="message-box" ref={ node => {box = node} } >
            {messages.map((message, key) =>
                <div className="chat-message" key={key}>
                    <div className="message-block-avatar">
                        <Avatar
                            avatar={message.avatar}
                        />
                    </div>
                    <Message
                        message={message.msg}
                    />
                </div>
            )}
        </div>
    );
};

MessageBox.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.array.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = function(store) {
    if (box) {
        box.scrollTop = box.scrollHeight;
    }
    return {
        messages: store.MessageReducer.messages,
        avatar: store.MessageReducer.avatar
    };
};

MessageBox = connect(mapStateToProps)(MessageBox);

export default MessageBox;