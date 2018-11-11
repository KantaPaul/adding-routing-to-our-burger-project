import React, {Component} from 'react';
import CheckOutSummary from '../../components/Order/CheckoutSummary/CheckOutSummary'

class CheckOut extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  componentDidMount() {
    let query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    for (let parma of query.entries()) {
      ingredients[parma[0]] = +parma[1]
    }
    this.setState({
      ingredients: ingredients
    })
  }

  checkoutCancelHandeler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandeler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    return (
      <div className="text-center">
        <CheckOutSummary 
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancelHandeler}
          checkoutContinue={this.checkoutContinueHandeler}
        />
      </div>
    )
  }
}

export default CheckOut;
