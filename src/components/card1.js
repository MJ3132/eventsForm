import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Fire from './../assets/fire.png'

library.add(faUserCircle)

export default class CardOne extends Component {
  render() {
    return (
        <div className="card-1-container">
        <Card className="card-a">
          <div className="avatar-container">
            <FontAwesomeIcon icon={faUserCircle} className="avatar" />
          </div>
          <div className="company-name-container">
            <p className="company-name">
              Affiliated Company
            </p>
          </div>
          <div className="any-container">

          </div>
        </Card>
        <Card className="card-b">
          <div className="avatar-container">
            <img src={Fire} className="fire" alt="fire" />
          </div>
          <div className="copy-right-container">
            <p className="copy-right">
              Copyright Startupfuel 2018
            </p>
          </div>
          <div className="copy-right-container">
            <p className="copy-right terms-service-message">
              Terms of Servive <span>|</span> Privacy Policy
            </p>
          </div>
        </Card>
      </div>
    )
  }
}
