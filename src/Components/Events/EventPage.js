import Link from 'next/link';
import React from 'react';

const EventPage = ({data}) => {
    return (
        <div id="events_page">
        {data?.map((ev) => (
          <Link className='text-black text-decoration-none' key={ev.id} href={`/events/${ev.id}`} passHref>
            <div className="content">
              <img src={ev.image} alt={ev.title}  /> <h2>{ev.title} </h2>
            </div>
          </Link>
        ))}
      </div>
    );
};

export default EventPage;