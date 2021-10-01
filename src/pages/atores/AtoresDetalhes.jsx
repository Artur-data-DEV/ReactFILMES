import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import apiFilmes from '../../services/apiFilmes'
import {FaRegHandPointLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';

const AtoresDetalhes = (props) => {

    const [atores, setAtores] = useState({})
    const [filmes, setFilmes] = useState([])
    const [imagens, setImagens] = useState([])

    useEffect(() => {  
        const id = props.match.params.id
        
        apiFilmes.get(`/person/${id}?language=pt-BR`).then((resultado) => {
            setAtores(resultado.data);
        });

        apiFilmes.get(`/person/${id}/movie_credits?language=pt-BR`).then((resultado) => {
            setFilmes(resultado.data.cast);
        });
        apiFilmes.get(`/person/${id}/images?language=pt-BR`).then((resultado) => {
            setImagens(resultado.data.profiles);
        });
    
    }, [props]);

    ////console.log(atores);

    return (
        <>
            { atores.id &&
                <>
                    <Row>
                        <Col md= "3">
                            <Card title={`${atores.character}(${atores.name})`}>
                                <Card.Img variant="top"
                                    src={`https://image.tmdb.org/t/p/w500/${atores.profile_path}`}
                                />                     
                            </Card>

                        </Col>
                        <Col md= "9">
                            <h1>{atores.name}</h1>
                            {atores.birthday && <p>Data de Nascimento: {atores.birthday}</p>}
                            {atores.deathday && <p>Data da Morte: {atores.deathday}</p>}
                            {atores.place_of_birth && <p>Naturalidade: {atores.place_of_birth}</p>}
                            <p>{atores.biography}</p>
                        </Col>
                    </Row>
                    <hr/>

                    <Button variant="dark" onClick={()=> props.history.goBack()}> 
                        <FaRegHandPointLeft/> Voltar
                    </Button>

                   

                

                    <hr/>
                    <h1>Histórico de Filmes</h1>
                    <Row>
                        {filmes.map(filme => (
                        <React.Fragment key={filme.id}>
                            {
                                filme.poster_path &&
                                <Col md="1">
                                    <Link to={`/filmes/${filme.id}`}>
                                        <Card title={`${filme.title}`}>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>                     
                                        </Card>
                                    </Link>
                                </Col>
                            }
                        </React.Fragment>
                        ))}
                    </Row>
                    <hr/>
                </>
            }


        </>
    )
}

export default AtoresDetalhes
