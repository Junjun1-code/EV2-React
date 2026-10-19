import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
function Footer() {
    return (
        <Container style={{ backgroundColor: "rgb(206, 136, 46)" }}>
            <Row>
                <h3> Esta página ha sido creada con fines educativos. </h3> 
                <h3> No es recomendado su uso comercial. </h3>
                <a href='https://www.thecocktaildb.com'> Link de Api </a>
            </Row>
        </Container>
    );
}

export default Footer;