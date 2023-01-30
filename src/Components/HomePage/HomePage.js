import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HomePageCard from './HomePageCard';

const HomePage = ({ data }) => {
    return (
        <section id='home-page'>
            <div className='container'>


                {data?.map((ev) => (
                    <Link className='text-black text-decoration-none border-0' key={ev.id} href={`/events/${ev.id}`} passHref>
                        <div className="event-item " href={`/events/${ev?.id}`}>
                            <div className="image">
                                {/* <Image width={600} height={400} alt={ev.title} src={ev.image} /> */}
                                <img className='img-fluid' alt={ev.title} src={ev.image} />
                            </div>
                            <div className="content ">
                                <h2> {ev.title} </h2>
                                <p> {ev.description} </p>
                            </div>
                        </div>
                    </Link>
                ))}



            </div>
        </section>
    );
};

export default HomePage;