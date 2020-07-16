import React from 'react';
import './App.css';

class App extends React.Component {

  // Initial state
  constructor(props) {
    super(props);

    this.state = {
      receipts: []
    }
  }

  componentDidMount() {
    // Using the public CORS-Anywhere vs local deployment for testing
    fetch('https://cors-anywhere.herokuapp.com/https://venmo.com/api/v5/public')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      })
  }

  render() {
    return (
      <div className="App">
        Venmo API App
      </div>
    )
  }
}

export default App;
