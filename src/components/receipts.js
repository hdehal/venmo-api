import React, { Component } from 'react';

class Receipts extends Component {

  render() {

    return (
      <div>

        {this.props.receipts.map((receipt) => (
          <div>
            <p><strong>{receipt.actor.name}</strong> paid <strong>{receipt.transactions[0].target.name}</strong></p>
            <p>{receipt.message}</p>
          </div>
        ))}

      </div>
    )
  }
}

export default Receipts;