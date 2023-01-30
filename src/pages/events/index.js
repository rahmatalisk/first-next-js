import EventPage from '@/Components/Events/EventPage';
import React from 'react';

const Events = ({data}) => {
    return (
        <div className='container'>
            <EventPage data={data}/>
        </div>
    );
};

export default Events;


export async function getStaticProps() {
    const { events_categories } = await import('data/data.json');
    return {
      props: {
        data: events_categories,
      },
    };
  }