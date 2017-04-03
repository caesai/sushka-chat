import React, { PropTypes } from 'react';
import Linked from './Linked.jsx';
import { connect } from 'react-redux';
import * as styles from './scss/Message.scss';

let urlRegex = /(https?:\/\/[^\s]+)/g;

let Message = ({message}) => {
    let parsedMsg = message.replace(/(<([^>]+)>)/ig,";");
    let msgArray = parsedMsg.split(";");
    return (
        <div className={styles.message} >
            {msgArray.map((line, key) =>
                    <p key={key}>
                        {line.match(urlRegex) ?
                            renderLink(line) :
                            line
                        }
                    </p>
            )}
        </div>
    );
};

function renderLink(text) {
    let parts = text.split(urlRegex);
    console.log(parts);
    for (let i = 1; i < parts.length; i += 2) {
        parts[i] = <a key={'link' + i} href={parts[i]} target="_blank">{parts[i]}</a>;
    }
    console.log(parts);

    return parts;
}

Message.propTypes = {
    message: PropTypes.string.isRequired
};

export default Message;
