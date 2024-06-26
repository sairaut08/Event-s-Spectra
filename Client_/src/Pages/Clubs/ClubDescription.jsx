import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseLayout from '../../Layouts/BaseLayout';
import axiosInstance from '../../Helpers/axiosInstance';
import EventCard from '../../Components/SARVESH/EventCard';

function ClubDescription() {
  const { state } = useLocation();
  const [eventDetails, setEventDetails] = useState([]);

  async function fetchEventDetails() {
    try {
      const response = await axiosInstance.get(`/clubs/${state._id}/events`);
      setEventDetails(response.data.events);
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  }

  useEffect(() => {
    fetchEventDetails();
  }, [state]);

  return (
    <BaseLayout>
      <main className='w-full pt-24 md:ml-20 md:mr-20'>
        <section className='w-full flex flex-col pr-32 md:flex-row mb-32'>
          <div className='w-full md:w-1/3 overflow-hidden rounded-lg mb-4 md:mb-0'>
            <img
              src={state.thumbnail.secure_url}
              alt='club thumbnail'
              className='w-full h-64 object-cover object-center'
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className='pl-0 md:pl-32'>
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text uppercase mb-4'>
              {state.clubName}
            </h1>
            <h3 className='text-lg md:text-2xl text-orange-500 ml-2'>{state.tagline}</h3>
            <h3 className='text-base md:text-lg mt-10 text-justify ml-2'>{state.description}</h3>
          </div>
        </section>

        <section>
          <h1 className='text-3xl font-bold mb-4'>Explore our events ...</h1>
          <div className='flex flex-wrap gap-10 mb-10 justify-center items-center'>
            {eventDetails.length > 0 ? (
              eventDetails.map((element) => element && <EventCard key={element._id} data={element} />)
            ) : (
              <h1 className='text-4xl text-gray-500'>No events to display !!</h1>
            )}
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}

export default ClubDescription;
