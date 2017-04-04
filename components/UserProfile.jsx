import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store.jsx';
import * as styles from './scss/UserProfile.scss';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.accountBtnClicked = this.accountBtnClicked.bind(this);
  }
  render() {
    let {chosenUser} = this.props;
    return (
      <div className={styles.userProfile}>
        <div className={chosenUser ? styles.infoBlockActive : styles.infoBlock}>
          {chosenUser ?
            <div>
              <button className={styles.accountBtn + ' ' + styles.active}
                  onClick={this.accountBtnClicked}
                  data-account='true'>
                  Счета
              </button>
              <button className={styles.accountBtn}
                  onClick={this.accountBtnClicked}
                  data-account='false'>
                  Вклады
              </button>
              <div data-account='true' className={styles.accountInfo  + ' ' + styles.active}>
                {chosenUser.account.map((account, key) => {
                  return (
                    <div key={key} className={styles.accountBlock}>
                      <p>Account: {account.id}</p>
                      <p>Balance: {account.sum}</p>
                    </div>
                  )
                })}
              </div>
              <div data-account='false' className={styles.accountInfo}>
                {chosenUser.deposit.map((deposit, key) => {
                  return (
                    <div key={key} className={styles.accountBlock}>
                      <p>Deposit: {deposit.id}</p>
                      <p>Balance: {deposit.sum}</p>
                    </div>
                  )
                })}
              </div>
            </div>
           : null}
        </div>
      </div>
    )
  }

  accountBtnClicked(e) {
    let activeBtn = document.querySelector('.' + styles.active);
    let btnTrigger = e.currentTarget.dataset.account;
    let infoBlock = document.querySelector('.'+ styles.accountInfo + '[data-account="' + btnTrigger +'"]');
    let activeBlock = document.querySelector('.'+ styles.accountInfo + '.' + styles.active);

    if (activeBtn) {
      activeBlock.classList.toggle(styles.active);
      activeBtn.classList.toggle(styles.active);
    }
    e.currentTarget.classList.toggle(styles.active);
    infoBlock.classList.toggle(styles.active);
  }
}

UserProfile.propTypes = {
    chosenUser: PropTypes.object
};

const mapStateToProps = function(store) {
    return {
        chosenUser:  store.UserStatus.chosenUser
    };
};

export default connect(mapStateToProps)(UserProfile);
