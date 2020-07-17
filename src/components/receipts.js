import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'

var prices = [
  140,
  200,
  342,
  140,
  140,
  200,
  342,
  34
];

var rates = {
  USD: 1, // default rate
  EUR: 0.87,
  JPY: 106.98,
  GBP: 0.80
}

var symbols = {
  USD: "$", // default symbol
  EUR: "€",
  JPY: "¥",
  GBP: "£"
}

// Update prices
function updatePrices(rate) {
  var elements = document.getElementsByClassName("price");

  prices.forEach((price, index) => {
    elements[index].innerHTML = (price * rate).toFixed(2);
  });
}

// Update symbols
function updateSymbol(symbol) {
  var elements = document.getElementsByClassName("price");

  prices.forEach((price, index) => {
    elements[index].innerHTML += symbol;
  });
}

class Receipts extends Component {

  // Initial state
  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    // Initial prices
    updatePrices(rates.USD);
  }

  handleChange(e) {
    // Update prices by currency
    updatePrices(rates[e.target.value]);
    // Append currency symbol
    updateSymbol(symbols[e.target.value]);
  }

  render() {

    return (
      <div>

        <Row className="justify-content-md-center">
          <ListGroup horizontal id="selector" onClick={this.handleChange}>
            <ListGroup.Item value="USD" action>$</ListGroup.Item>
            <ListGroup.Item value="EUR" action>€</ListGroup.Item>
            <ListGroup.Item value="JPY" action>¥</ListGroup.Item>
            <ListGroup.Item value="GBP" action>£</ListGroup.Item>
          </ListGroup>
        </Row>

        {this.props.receipts.map((receipt, i) => (
          <div id="receiptsContainer" className="center">
            <Card style={{ "--animation-order": i }} className="toast">
              <Card.Subtitle>
                {/* Real fake names to protect the innocent via Venmo public API */}
                <strong>{receipt.actor.firstname}</strong> paid
                <strong> {receipt.transactions[0].target.firstname} </strong>
                {/* Fake cash monies for demo purposes */}
                <span className="alert-success price">
                </span>
              </Card.Subtitle>
              <Card.Body>
                {receipt.message}
              </Card.Body>
            </Card>
          </div>
        ))}

      </div>
    )
  }
}

export default Receipts;