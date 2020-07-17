import React from 'react';
import './App.css';
import Receipts from './components/receipts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { withTranslation } from 'react-i18next';

class App extends React.Component {

  // Initial state
  constructor(props) {
    super(props);

    this.state = {
      receipts: [],
      loading: true,
      language: "en"
    }
  }

  componentDidMount() {
    // Private whitelist-restricted Heroku deployment of "CORS Anywhere"
    fetch('https://hdehal-cors.herokuapp.com/https://venmo.com/api/v5/public')
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

    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      
      // Set language to state
      this.setState({
        language: lng
      })
    };

    return (
      <div className="App">

        <Container fluid>
          <Row className="justify-content-center">
            <Col>
              <h5>{t('Latest Venmo Transactions')}</h5>
              <Row className="justify-content-center">
                <p>
                  This demo uses data from <a href="https://venmo.com/api/v5/public" target="_blank" rel="noopener noreferrer"><code>https://venmo.com/api/v5/public</code></a> to test currency conversion, internationalization (i18n), and accessibility (a11y).
                </p>
              </Row>
              <Row className="justify-content-center">
                <ListGroup horizontal>
                  <ListGroup.Item onClick={() => changeLanguage('en')} action className={this.state.language === "en" ? "active" : null}>EN</ListGroup.Item>
                  <ListGroup.Item onClick={() => changeLanguage('de')} action className={this.state.language === "de" ? "active" : null}>DE</ListGroup.Item>
                  <ListGroup.Item onClick={() => changeLanguage('fr')} action className={this.state.language === "fr" ? "active" : null}>FR</ListGroup.Item>
                  <ListGroup.Item onClick={() => changeLanguage('jp')} action className={this.state.language === "jp" ? "active" : null}>JP</ListGroup.Item>
                </ListGroup>
              </Row>
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

export default withTranslation('translations')(App);