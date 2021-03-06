import React from 'react';
import './App.css';
import Receipts from './components/receipts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { withTranslation, Trans } from 'react-i18next';

class App extends React.Component {

  // Initial state
  constructor(props) {
    super(props);

    this.state = {
      receipts: [],
      loading: true,
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

    const { i18n } = this.props;

    const currentLang = (Array.isArray(i18n.languages)) ? i18n.languages[0] : i18n.languages;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">

        <Container fluid>
          <Row className="justify-content-center">
            <Col>
              <h5><Trans i18nKey="heading"></Trans></h5>
              <Row className="justify-content-center">
                <p>
                  <Trans i18nKey="intro">
                    This simple React app uses Venmo API data as a test playground for currency conversion, internationalization (i18n), and accessibility (a11y).
                  </Trans>
                  <br />
                  <a href="https://venmo.com/api/v5/public" target="_blank" rel="noopener noreferrer"><code>https://venmo.com/api/v5/public</code></a>
                </p>
              </Row>
              <Row className="justify-content-center">
                <ListGroup horizontal>
                  <ListGroup.Item onClick={() => changeLanguage('en')} action className={currentLang === "en" ? "active" : null}>EN</ListGroup.Item>
                  <ListGroup.Item onClick={() => changeLanguage('de')} action className={currentLang === "de" ? "active" : null}>DE</ListGroup.Item>
                  <ListGroup.Item onClick={() => changeLanguage('fr')} action className={currentLang === "fr" ? "active" : null}>FR</ListGroup.Item>
                  <ListGroup.Item onClick={() => changeLanguage('jp')} action className={currentLang === "jp" ? "active" : null}>JP</ListGroup.Item>
                </ListGroup>
              </Row>
              {this.state.loading
                ? <><Spinner animation="border" role="status" variant="primary"></Spinner>
                  <div className="loading">
                    <Trans i18nKey="loading">Loading Venmo API</Trans>
                  </div></>
                : <Receipts receipts={this.state.receipts} i18n={i18n} />}
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default withTranslation()(App);