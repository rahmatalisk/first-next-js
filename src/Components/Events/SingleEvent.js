import React from 'react';
import { Card } from 'react-bootstrap';

const SingleEvent = ({ data }) => {
    return (
        <div className='container my-5' id='single-event'>
            
            <Card >
                <Card.Img src={data.image} alt={data.title}/>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                    {data.description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleEvent;