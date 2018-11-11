import React, { Component } from 'react'
import Burger from '../../Burger/Burger';

export default class CheckOutSummary extends Component {
  render() {
    return (
      <div>
        <h1>We hopes it tastes well !</h1>
        <div style={{width: '300px', margin: 'auto'}}>
          <Burger ingredients={this.props.ingredients} />
        </div>
        <div className="btn-group">
          <button className="btn btn-danger btn-lg" onClick={this.props.checkoutCancel}>Cancel</button>
          <button className="btn btn-primary btn-lg" onClick={this.props.checkoutContinue}>Continue</button>
        </div>
      </div>
    )
  }
}
