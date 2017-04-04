import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store.jsx';
import * as styles from './scss/MainBox.scss';


class InfoBlock extends React.Component {
  render() {
    let {chosenUser} = this.props;
    return (
      <div>
        {chosenUser ?
          <h2 className={styles.userName}>
            {chosenUser.name}
            <span>{chosenUser.status}</span>
          </h2>

          : null
        }
      </div>
    )
  }
}

InfoBlock.propTypes = {
    chosenUser: PropTypes.object
};

const mapStateToProps = function(store) {
    return {
        chosenUser:  store.UserStatus.chosenUser
    };
};

export default connect(mapStateToProps)(InfoBlock);
