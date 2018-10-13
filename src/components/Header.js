import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = (props) => {
  const { branding } = props;

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="mb-5">{branding}</h3>
      </header>
    </div>
  );
};

export default Header;
