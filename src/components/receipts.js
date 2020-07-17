import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Receipts extends Component {

  render() {

    return (
      <div>

        {this.props.receipts.map((receipt, i) => (
          <div id="receiptsContainer" className="center">
            <Card style={{ "--animation-order": i }} className="toast">
              <Card.Subtitle>
                {/* Real fake names to protect the innocent via Venmo public API */}
                <strong>{receipt.actor.firstname}</strong> paid
                <strong> {receipt.transactions[0].target.firstname} </strong>
                {/* Fake cash monies for demo purposes */}
                <span className="alert-success">
                  {"$" + (Math.floor(Math.random() * (1000 - 100) + 100) / 10).toFixed(2)}
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