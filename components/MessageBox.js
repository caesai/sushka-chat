import React, { PropTypes } from 'react';
import Message from './Message';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import store from '../store/store';
import * as styles from './scss/MessageBox.scss';

let box;

let MessageBox = ({messages}) => {
    return (
        <div className={styles.messageBox} ref={ node => {box = node} } >
            {messages.map((message, key) =>
                <div className={styles.chatMessage} key={key}>
                    <div className={styles.messageBlockAvatar}>
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
