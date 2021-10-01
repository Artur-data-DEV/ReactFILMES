import React from "react";
import { Alert, ListGroup } from "react-bootstrap";

const Array = () => {
  const carros = ["Audi A3", "Fiat Uno", "Gol", "Jeep", "Subaru"];

  return (
    <>
      <h1>Carros</h1>

      {carros.map((carro) => (
        <p>{carro}</p>
      ))}

      {carros.map((carro) => (
        <Alert variant="danger">{carro}</Alert>
      ))}

      <ListGroup>
        {carros.map((carro) => (
          <ListGroup.Item>{carro}</ListGroup.Item>
        ))}
      </ListGroup>

    </>
  );
};

export default Array;
