import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    receipts: []
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
