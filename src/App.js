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
    fetch('https://venmo.com/api/v5/public?limit=1000')
      .then(res => res.json())
      .then((data) => {
        this.setState({ receipts: data })
      })
      .catch(console.log)
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
