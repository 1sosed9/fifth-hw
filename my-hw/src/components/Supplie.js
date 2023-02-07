import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Supplie(props) {
    return (
        <Card className={"col-3 my-1 "} style={{maxHeight: "25rem", overflowX: "hidden", boxSizing: "border-box" }}>
            <Card.Img variant="top" src={props.supplie.image} style={{ maxHeight: "20rem" }} />
            <Card.Body>
                <Card.Title>
                    {props.supplie.category}
                </Card.Title>
                <Card.Title>
                    {props.supplie.title}
                </Card.Title>
                <Card.Text>
                    {props.supplie.description}
                </Card.Text>
                <Button variant="primary" style={{width: "5rem"}}>{props.supplie.price}</Button>
            </Card.Body>
        </Card>
    );
}

export default Supplie;



