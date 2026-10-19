import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Api from '../api.js'


function Cards({ drink }) {
  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith("strIngredient") && drink[key])
    .map((key) => drink[key]);

  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={drink.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{drink.strDrink}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;