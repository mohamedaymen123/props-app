import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ item, alertFunction }) => {
  // console.log(alertFunction);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pic} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
          <Button variant="primary" onClick={() => alertFunction(item)}>
            Info
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;