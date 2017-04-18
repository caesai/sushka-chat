import React, { PropTypes } from 'react';
import Linked from './Linked';
import { connect } from 'react-redux';
import * as styles from './scss/Message.scss';

let urlRegex = /(https?:\/\/[^\s]+)/g;

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.renderLink = this.renderLink.bind(this);
  }
  renderLink(text) {
    let parts = text.split(urlRegex);

    for (let i = 1; i < parts.length; i += 2) {
        parts[i] = <a key={'link' + i} href={parts[i]} target="_blank">{parts[i]}</a>;
    }

    return parts;
  }
  render(){
    let {message} = this.props;
    let parsedMsg = message.replace(/(<([^>]+)>)/ig,';');
    let msgArray = parsedMsg.split(';');
    return (
        <div className={styles.message} >
            {msgArray.map((line, key) =>
              <p key={key}>
                {line.match(urlRegex) ?
                    this.renderLink(line) :
                    line
                }
              </p>
            )}
        </div>
    );
  }
}


//
// Message.propTypes = {
//     message: PropTypes.string.isRequired
// };

// export default Message;
