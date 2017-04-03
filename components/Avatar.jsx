import React, { PropTypes } from 'react';
import * as styles from './scss/Avatar.scss';

let Avatar  = ({avatar}) => {
    return (
            <img src={avatar} className={styles.avatar}/>
    );
};

const mapStateToProps = function(store) {
    return {
        messages: store.MessageReducer.avatar
    };
};

export default Avatar;
