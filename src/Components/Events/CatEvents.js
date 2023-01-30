import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';

const CatEvents = ({ data, pageName }) => {
    return (
        <div className="container my-md-5 my-3">
            <div id="cat_events">
            <h1 className='mb-4'> Events in {pageName} </h1>

            <div className="content">
                {data.map((ev) => (
                    <Link className='text-black text-decoration-none' key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <Card className='border-0' >
                            <Card.Img  alt={ev.title} src={ev.image} />
                            <Card.Body className='p-0'>
                                <Card.Title>{ev.title}</Card.Title>
                                <Card.Text>
                                {ev.description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        
                    </Link>
                ))}
            </div>
        </div>
        </div>
    );
};

export default CatEvents;