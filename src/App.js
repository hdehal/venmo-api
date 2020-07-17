import React from 'react';
import './App.css';
import Receipts from './components/receipts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

class App extends React.Component {

  // Initial state
  constructor(props) {
    super(props);

    this.state = {
      receipts: [],
      loading: true
    }
  }

  componentDidMount() {
    // Using the public "CORS Anywhere" proxy server for testing
    fetch('https://cors-anywhere.herokuapp.com/https://venmo.com/api/v5/public')
      .then(res => res.json())
      .then((data) => {
        // Last 8 records into state only
        this.setState({ receipts: data.data.slice(0, 8), loading: false })
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
              <div>
                Data from <a href="https://venmo.com/api/v5/public" target="_blank" rel="noopener noreferrer">
                  <code>https://venmo.com/api/v5/public</code>
                </a>
              </div>
              {this.state.loading
                ? <Spinner animation="border" role="status" variant="primary">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                : <Receipts receipts={this.state.receipts} />}
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default App;
