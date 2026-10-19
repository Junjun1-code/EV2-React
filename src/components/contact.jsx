import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Cards from './cards.jsx'
function Contact() {
    return (
        <Container>
            <Row>
                <h1> Encuentranos en estos lugares: </h1>
                <Cards  />
            </Row>
        </Container>
    );
}

export default Contact;