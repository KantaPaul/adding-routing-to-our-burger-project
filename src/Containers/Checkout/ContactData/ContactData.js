import React, { Component } from 'react'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

export default class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderhandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    let order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Kanta paul pobon',
        address: {
          street: 'Shyamoli',
          zipCode: '1200',
          country: 'Dhaka'
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order).then(res => {
      this.setState({
        loading: false,
      })
      this.props.history.push('/')
    }).catch(err => {
      this.setState({
        loading: false
      })
    })
  }

  render() {
    let form = (
      <form>
          <div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="Your Name Here"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Your email Here"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="street" placeholder="Your Street Here"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="zip" placeholder="Your ZIP Code Here"/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.orderhandler}>Submit Data</button>
        </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className="container mt-5">
        {form}
      </div>
    )
  }
}
