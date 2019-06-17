import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import '../../styles/header.css';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

const Modal = ({ children }) => (
  ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  )
);

const HeaderForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <header>
        <div id="modal-root" className="modal-position"></div>
        <div className="sides">
          <ToggleContent
            toggle={show => <a href="#0" onClick={() => {
              setIsSignIn(true);
              show();
            }} 
            className="login-button">Login</a>}
            content={ !isSignIn ? () => null : hide => (
              <Modal>
                <button className ="close-button" onClick={() => hide()}>X</button>
                <LoginForm/>
              </Modal>
            )}
          />
          <ToggleContent
            toggle={show => <a href="/#0" onClick={() => {
              setIsSignIn(false)
              show();
            }} 
            className="signup-button">SIGNUP</a>}
            content={isSignIn ? () => null :  hide => (
              <Modal>
                <button className ="close-button" onClick={() => hide()}>X</button>
                <SignupForm/>
              </Modal>
            )}
          />
        </div>
        <h1>I Love<span> you</span> 3000</h1>
        <div className="header">
          <div className="sides"> <a href="#0" className="menu">-</a></div>
          <div className="info">
            <h4><a href="#category">TRAN NGOC VINH</a></h4>
            <div className="meta">
              <a  href="#0" target="_b" className="author"></a><br/>
              By <a href="#0" target="_b">Vim</a> on June 06, 2019
            </div>
          </div>
        </div>
      </header>
    </div>
  )
};

export default HeaderForm;
