import React from 'react';
import './Header.css';

const Header = (props) => {

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col align-self-center">
            <h1> Memory Game </h1>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center">
            <h2> {props.currentText} </h2>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;