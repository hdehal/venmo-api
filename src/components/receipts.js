import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Receipts extends Component {

  render() {

    return (
      <div>

        {this.props.receipts.map((receipt, i) => (
          <div id="receiptsContainer" className="center">
            <Card>
              <Card.Subtitle><strong>{receipt.actor.name}</strong> paid <strong>{receipt.transactions[0].target.name}</strong></Card.Subtitle>
              <Card.Body>{receipt.message}</Card.Body>
            </Card>
          </div>
        ))}

      </div>
    )
  }
}

export default Receipts;