import React from 'react';
import img from '../Assets/img1.jpg'
import img2 from '../Assets/img2.png'

const ContactUsPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center"style={{ backgroundImage: `url(${img2})` }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Image Section */}
                <div className="md:w-1/2 p-3">
                    <img src={img} className="h-full w-full object-cover rounded-lg shadow-lg" />
                </div>

                {/* Contact Form Section */}
                <div className="md:w-1/2 p-6 ">
                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                        <h1 className="text-3xl font-bold text-gray-800 bg-gray-200 py-4 px-6">Contact Us</h1>
                        <div className="p-6">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                                    <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                                    <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email address" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                                    <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message"></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
