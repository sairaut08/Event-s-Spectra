import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import img from '../../assets/img1.jpg'
import BaseLayout from '../../Layouts/BaseLayout'


function ClubDescription() {

    const {state} = useLocation()
    

    useEffect(()=>{
        console.log(state);
    },[])


  return (
    <BaseLayout>
        <main className='w-full pt-24 md:ml-20 md:mr-20'>
            <section className='w-full flex flex-col pr-32 md:flex-row mb-32 '>
                <div className='w-full md:w-1/3 overflow-hidden rounded-lg mb-4 md:mb-0'>
                    <img src={state.thumbnail.secure_url} alt="club thumbnail" className='w-full' />
                </div>
                <div className='pl-0 md:pl-32'>
                    <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text uppercase mb-4'>{state.clubName}</h1>
                    <h3 className='text-lg md:text-2xl text-orange-500'>{state.tagline}</h3>
                    <h3 className='text-base md:text-lg mt-3 text-justify'>{state.description}</h3>
                </div>
            </section>
        </main>

    </BaseLayout>
  )
}

export default ClubDescription
