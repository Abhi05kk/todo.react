import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CountriesCards.css'

function CountriesCards({ country }) {
  return (
    <Card style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" className='cardImage' src={country.flags.png} />
      <Card.Body>
        <Card.Title>{country.name.common}</Card.Title>
        <Card.Text>
          {country.name.official}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CountriesCards;