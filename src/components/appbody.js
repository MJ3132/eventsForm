import React, { Component } from 'react'
import "./../scss/components/appbody.scss";
import CardOne from "./card1";
import CardTwo from "./card2";
import CardThree from "./card3";

export default class AppBody extends Component {
  render() {
    return (
        <div className="app-body">
        <div className="container">
          <div className="message-container">
            <p className="message">Reach quality startups to apply for your apportunity that you can't find anywhere else.</p>
          </div>
          <div className="cards-container">
            <CardOne />
            <CardTwo />   
          </div>
        </div>
      </div>
    )
  }
}
