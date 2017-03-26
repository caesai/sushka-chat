import React, { PropTypes } from 'react';

let Avatar  = ({avatar}) => {
    return (
            <img src={avatar} className="avatar-pic"/>
    );
};

const mapStateToProps = function(store) {
    return {
        messages: store.MessageReducer.avatar
    };
};

export default Avatar;