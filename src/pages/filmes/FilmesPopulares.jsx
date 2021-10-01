import React, {useEffect, useState} from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Cartao from '../../components/Cartao';
import apiFilmes from '../../services/apiFilmes';
import { Link } from "react-router-dom";

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {   

        apiFilmes.get("/movie/popular?language=pt-BR").then( resultado => {
            setFilmes(resultado.data.results)
        });

    }, []);

    console.log(filmes);

    return (
        <>
            <h2>Filmes Populares</h2>
            <Row>

                {filmes.map(filme => (

                    <Col key={filme.id}  md={3} className="mb-3">
                        <Cartao title={filme.title} src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path}>
                            {filme.original_title} ({filme.release_date})
                            <hr/>
                            <Link to={"/filmes/" + filme.id}>
                                <div className="d-grid gap-2">
                                    <Button variant="primary">Detalhes</Button>
                                </div>
                            </Link>
                        </Cartao>
                    </Col>
                ))}

            </Row>

            
        </>
    )
}

export default FilmesPopulares
