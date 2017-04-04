import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.jsx';
import store from '../store/store.jsx';
import * as styles from './scss/MessageForm.scss';

const socket = io();

let MessageForm = ({dispatch, avatar}) => {
  let buttn;
  let input;
  let uploader;
  let emojiCont;
  // let emojiActive = false;
  return(
    <div className='message_form'>
      <img src={avatar} className={styles.avatar} alt=""/>
      <div className={styles.formBlock}>
        <form encType="multipart/form-data"
              action="/"
              method="post"
              onSubmit={e => {
                  e.preventDefault();
                  if (!input.innerHTML.trim()) {
                      return
                  }
                  socket.emit('chat message', {
                      'avatar': avatar,
                      'msg' : input.innerHTML
                  });
                  input.innerHTML = '';
                  }
              }
          >
            <div className={styles.textInput}>
              <div className={styles.messageTextarea}
                  ref={node => {
                      input = node
                  }}
                  placeholder="Написать сообщение"
                  contentEditable="true"
                  onKeyDown={(e) => {
                    if(e.keyCode === 13) {
                        document.execCommand('formatBlock', false, 'p');
                        input.innerHTML.replace(/(<([^>]+)>)/ig,"");
                        if (e.shiftKey) {
                            e.stopPropagation();
                        } else if (input.innerText.trim() !== "") {
                            buttn.click();
                        }
                        return false;
                    }
                  }}></div>
                  <input className={styles.uploader}
                     type="file"
                     name="uploads"
                     ref={(node) => uploader = node}
                     onChange={(e) => {
                        var files = e.target.files;
                        // store.dispatch(actions.loadFile(files));
                        store.dispatch(actions.fetchFile(files)).then(() =>
                          console.log(store.getState())
                        )
                     }}
                    />
                  <i className={'fa fa-picture-o ' + styles.fileTrigger}
                     aria-hidden="true"
                     onClick={()=>{
                        uploader.click();
                     }}>
                  </i>
                  <i className={'fa fa-smile-o ' + styles.emojiTrigger}
                     aria-hidden="true"
                     data-active="false"
                     onClick={(e)=> {
                      let emojiActive = e.currentTarget.dataset.active;
                      emojiCont.classList.toggle(styles.active, !emojiActive);
                      e.currentTarget.dataset.active = !emojiActive;
                  }}>
                  </i>
                  <div className={styles.emojiContainer} ref={(node) => emojiCont = node} >
                  </div>
                </div>
                <p>
                    <button className={styles.submitBtn}
                        type="submit"
                        ref={node => {
                          buttn = node
                        }}>
                        Отправить
                    </button>
                </p>
            </form>
        </div>
    </div>
  );
};

const mapStateToProps = function(store) {
    return {
        avatar: store.UserInfo.avatar
    };
};

MessageForm = connect(mapStateToProps,state => ({
    info: state.info
}))(MessageForm);


export default MessageForm;
