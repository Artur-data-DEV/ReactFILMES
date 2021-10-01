import React, {useState} from 'react';
import { Button}  from "react-bootstrap";

const Estados = () => {

    const [contador, setContador] = useState(0);

    function subtrair () {
        if (contador){
            const valor = contador - 1;
            setContador(valor);
        }
    }
    function adicionar () {
        const valor = contador + 1;
        setContador(valor);
    }

    return (
        <>
            <h1>Estados</h1>

            <Button variant="danger" onClick={subtrair}>-</Button>
            <span>{'' + contador + ""}</span>
            <Button variant="success" onClick={adicionar}>+</Button>
        </>
    )
}

export default Estados
