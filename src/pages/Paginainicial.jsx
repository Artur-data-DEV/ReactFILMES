import React from "react";
import { Container } from "react-bootstrap";
import Box from "../components/Box"
import Helloworld from "./Helloworld";

const Paginainicial = () => {
  return (
    <>
      <Container>
        <p>Thayná</p>

        <Box title="Primeiro Card">
            <p>Lorem Lorem Lorem Lorem</p>
            <Helloworld/>
            <p>Lorem Lorem Lorem Lorem</p>
        </Box>
        <Box title="Segundo Card" />
        <Box title="Terceiro Card" />
      </Container>
    </>
  );
};

export default Paginainicial;
