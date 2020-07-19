import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { withTranslation, Trans } from 'react-i18next';

var prices = [140, 84.99, 10, 140, 500, 2400, 16.76, 34];

var rates = {
  USD: 1, // Default rate
  EUR: 0.87,
  JPY: 106.98,
  GBP: 0.80
}

var symbols = {
  USD: "$", // Default symbol
  EUR: "€",
  JPY: "¥",
  GBP: "£"
}

var emojis = ["💌", "🥕", "☕", "💸", "🙏", "🏠", "🍕", "💃"]

// Update emojis
function updateEmoji(emoji) {
  var elements = document.getElementsByClassName("message");

  emojis.forEach((emoji, index) => {
    elements[index].insertAdjacentHTML("beforeend", ' ' + emoji);
  });
}

// Update prices
function updatePrices(rate) {
  var elements = document.getElementsByClassName("price");

  prices.forEach((price, index) => {
    elements[index].innerHTML = (price * rate).toFixed(2);
  });
}

// Update symbols
// See also: https://docs.microsoft.com/en-us/globalization/locale/currency-formatting
function updateSymbols(symbol) {
  var elements = document.getElementsByClassName("price");

  prices.forEach((price, index) => {
    if (symbol !== "€") {
      elements[index].insertAdjacentHTML("afterbegin", symbol);
    } else {
      elements[index].insertAdjacentHTML("beforeend", symbol);
    }
  });
}

class Receipts extends Component {

  // Initial state
  constructor(props) {
    super(props);

    this.state = {
      rates: "$"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Initial prices
    updatePrices(rates.USD);
    // Initial symbols
    updateSymbols(symbols.USD);

    // On mobile or macOS only -- to avoid emoji issues in early Windows variants
    if (/Android|webOS|Mac|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
      // Add emojis to spice things up
      updateEmoji(emojis);
    }

  }

  handleChange(e) {
    // Update prices by currency
    updatePrices(rates[e.target.value]);

    // Update currency symbol
    updateSymbols(symbols[e.target.value]);

    // Update state with active currency
    this.setState({
      rates: symbols[e.target.value]
    })
  }

  render() {

    return (
      <div id="receiptsContainer" className="justify-content-center">
        <Row className="justify-content-center">
          <ListGroup horizontal id="selector" onClick={this.handleChange}>
            <ListGroup.Item value="USD" className={this.state.rates === "$" ? "active" : null} action>$</ListGroup.Item>
            <ListGroup.Item value="GBP" className={this.state.rates === "£" ? "active" : null} action>£</ListGroup.Item>
            <ListGroup.Item value="EUR" className={this.state.rates === "€" ? "active" : null} action>€</ListGroup.Item>
            <ListGroup.Item value="JPY" className={this.state.rates === "¥" ? "active" : null} action>¥</ListGroup.Item>
          </ListGroup>
        </Row>

        {this.props.receipts.map((receipt, i) => (
          <Card style={{ "--animation-order": i }} className="toast" key={i}>
            <Card.Subtitle>
              {/* Real fake names to protect the innocent via Venmo public API */}
              <strong>{receipt.actor.firstname}</strong> <Trans i18nKey="paid"></Trans>
                <strong> {receipt.transactions[0].target.firstname} </strong>
              {/* Fake cash monies for demo purposes */}
              <span className="alert-success price">
              </span>
            </Card.Subtitle>
            <Card.Body className="message">
              {receipt.message}
            </Card.Body>
          </Card>
        ))}
      </div>

    )
  }
}

export default Receipts;