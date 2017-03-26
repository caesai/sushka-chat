import React, { PropTypes } from 'react';

let Linked = ({url}) => {
    console.log(url);
    return (
        <a href={url}> {url} </a>
    )
};

Linked.propTypes = {
    url: PropTypes.string.isRequired
};


export default Linked;