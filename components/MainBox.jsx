import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store.jsx';
import * as actions from '../actions/actions.jsx';
import MessageBox from './MessageBox.jsx';
import MessageForm from './MessageForm.jsx';
import InfoBlock from './InfoBlock.jsx';
import * as styles from './scss/MainBox.scss';

class MainBox extends React.Component {

  render() {
    let messages = [];
    let avatar = '';
    let chosenUser = {};
    let {chat} = this.props;

    console.log(chat);
    return (
      <div className={styles.mainBox}>
        <div className={styles.infoBlock + ' ' + (chat ? null : styles.active)}>
          <InfoBlock chosenUser={chosenUser} />
        </div>
        <div className={styles.chatBlock + ' ' + (chat ? styles.active : null)}>
          <i className={"fa fa-times " + styles.closeBtn}
             aria-hidden="true"
             onClick={(e) => {
               store.dispatch(actions.closeChat())
             }}></i>

          <MessageBox messages={messages} />
          <div className={styles.chatInput}>

              <MessageForm avatar={avatar} />
          </div>
        </div>
      </div>
    )
  }
}

MainBox.propTypes = {
    chat: PropTypes.boolean
};

const mapStateToProps = function(store) {
    return {
        chat:  store.UserStatus.chat
    };
};

export default connect(mapStateToProps)(MainBox);
