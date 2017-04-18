import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import * as actions from '../actions/actions';
import MessageBox from './MessageBox';
import MessageForm from './MessageForm';
import InfoBlock from './InfoBlock';
import * as styles from './scss/MainBox.scss';

export default class MainBox extends React.Component {

  render() {
    let messages = [];
    let avatar = '';
    let chosenUser = {};
    return (
      <div className={styles.mainBox}>
        <div className={styles.infoBlock}>
          <InfoBlock chosenUser={chosenUser} />
        </div>
        <div className={styles.chatBlock}>

          <MessageBox messages={messages} />
          <div className={styles.chatInput}>

              <MessageForm avatar={avatar} />
          </div>
        </div>
      </div>
    )
  }
}

// export default connect()(MainBox);
