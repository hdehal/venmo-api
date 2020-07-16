import React from 'react';
import './App.css';
import Receipts from './components/receipts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        this.setState({ receipts: data.data })
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      })
  }

  render() {
    return (
      <div className="App">

        <Container fluid>
          <Row>
            <Col>
              <h4>Latest Venmo Receipts</h4>
              <Receipts receipts={this.state.receipts} />
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default App;
