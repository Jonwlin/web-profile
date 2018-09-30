import React, { Component } from 'react';
import './Header.css';
import { SocialIcon } from 'react-social-icons';

export default class Header extends Component {
  render () {
    return (
      <div id="homepage">
        <div id="profile">
          <h1>
            Jonathan Lin
          </h1>
          <SocialIcon url="http://linkedin.com/in/xjonathan" className="btn btn-circle" />
          <SocialIcon url="http://github.com/jwlin17" className="btn btn-circle" />
          <img src="/web-github-iso/kaggle.svg" alt="Kaggler's Website" className="btn btn-kaggle btn-circle" />
          <SocialIcon url="http://facebook.com/jonathan.xu.54" className="btn btn-circle" />
          <SocialIcon url="mailto:jwlin17@gmail.com" className="btn btn-circle" />
        </div>
      </div>
    );
  }
}
