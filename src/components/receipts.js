import React, { Component } from 'react';

class Receipts extends Component {

  render() {

    return (
      <div>
        {this.props.receipts.map((receipt) => (
          <p>{receipt.message}</p>
        ))}
      </div>
    )
  }
}

export default Receipts;