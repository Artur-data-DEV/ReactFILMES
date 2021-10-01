import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Objetos = () => {
  const carros = [
    {
      marca: "Audi",
      modelo: "A3",
      ano: 2020,
      placa: "BGE 0458",
      foto: "https://cdn.motor1.com/images/mgl/Q00jN/s1/audi-a3-limousine-2020.jpg",
    },
    {
      marca: "Ford",
      modelo: "Ranger",
      ano: 2010,
      placa: "SDR 0898",
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/02/raptor-stills-outdoor-3-print-1-e1518017860323.jpg?quality=70&strip=info",
    },
    {
      marca: "Vw",
      modelo: "Gol",
      ano: 2018,
      placa: "BGE 9658",
      foto: "https://cdn.motor1.com/images/mgl/o3M6L/s1/gol.jpg",
    },
    {
      marca: "Fiat",
      modelo: "Uno",
      ano: 2015,
      placa: "BGE 0441",
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/07/Fiat-Uno-Drive-1-1-C%C3%B3pia.jpg?quality=70&strip=info",
    },
    {
      marca: "Subaru",
      modelo: "Impreza",
      ano: 2018,
      placa: "BGE 7584",
      foto: "https://www.assobrav.com.br/wp-content/uploads/2018/01/97d0d6d903.jpeg",
    },
    {
        marca: "BMW",
        modelo: "Série 8",
        ano: 2021,
        placa: "M IA 2686",
        foto: "https://1.bp.blogspot.com/-QjRhLuO1ni4/XQmPZGXROaI/AAAAAAAAVLc/g1kDrkR9HjA3wSKQ3d_0u76h-EWLrp-JQCLcBGAs/s1600/BMW-Serie-8-Grand-Coupe%2B%25284%2529.jpg",
    },
    {
        marca: "VW",
        modelo: "Polo",
        ano: 2020,
        placa: "OPQJ 2896",
        foto: "https://motortudo.com/wp-content/uploads/2020/04/Ficha-T%C3%A9cnica-Volkswagen-Polo-1.6-2020.jpg",
    },
    {
        marca: "Hyundai",
        modelo: "i30",
        ano: 2021,
        placa: "OCDJ 2896",
        foto: "https://listacarros2021.com.br/wp-content/uploads/ficha-tecnica-hyundai-i30.jpg"
    }
  ];
  return (
    <>
      <h1>Objetos de Carros</h1>
      <hr />

      <Row>
        {carros.map((carro) => (
          <Col md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={carro.foto} />
              <Card.Body>
                <Card.Title>
                  {carro.marca} - {carro.modelo}
                </Card.Title>
                <hr />
                <Card.Text>
                  <p>Placa: {carro.placa}</p>
                  <p>Ano de Fabricação: {carro.ano}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Objetos;
