// AboutUsPage.js

import React from 'react';
import img from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'

const About = () => {
    return (
        <div className="min-h-screen bg-gray-200  
        
        "style={{ backgroundImage: `url(${img2})` }}
        
        >
            <div className="container mx-auto py-20 px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 md:order-2">
                        <div className="text-center md:text-left">
                            {/* Title with attractive font and centered alignment */}
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 ml-48 mb-4">About Us</h1>

                            {/* Styled paragraphs */}
                            <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-4">
                            EMS allows users to plan and schedule events by defining event details such as date, time, location, agenda, and objectives. It may also include tools for setting up recurring events or managing multiple events simultaneously.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                            EMS provides tools for managing speakers, presenters, and performers, including scheduling, communication, and coordination of their participation in events.                            </p>
                            <br></br>
                            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                                This feature assists in selecting and managing event venues, including venue booking, floor planning, seating arrangements, and logistics coordination. feugiat, non sagittis arcu rutrum. Duis
                                tristique elit id malesuada dignissim.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:order-1 mb-6 md:mb-0 ">
                        {/* Adjusted image width and height */}
                        <img src={img} alt="About Us" className="h-96 w-auto rounded-lg shadow-lg mt-14" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
