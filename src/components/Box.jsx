import React from 'react'
import { Card } from 'react-bootstrap'

const Box = (props) => { 
    return (
        <>

        <Card border="danger">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
                {props.children}
            </Card.Text>
            </Card.Body>
        </Card>

        </>
    )
}

export default Box
