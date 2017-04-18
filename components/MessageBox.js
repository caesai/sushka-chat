import React, { PropTypes } from 'react';
import Message from './Message';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import store from '../store/store';
import * as styles from './scss/MessageBox.scss';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let box;
    let {messages} = this.props;
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
                        message={message.text}
                    />
                </div>
            )}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.MessageReducer.messages
});

export default connect(mapStateToProps)(MessageBox);
