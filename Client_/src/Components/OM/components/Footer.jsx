import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <div className='w-full  bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>KITCOEK</h6>
          <ul>
            <li>An institute established </li>
            <li>in 1983,KIT(Autonomous)</li> 
            <li>reflects the vision of</li>
            <li>leading industrialists </li>
            <li>and educationalists.</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>ABOUT</h6>
          <ul>
            <li className='py-1'>About KITCoEK</li>
            <li className='py-1'>Founder Trustees</li>
            <li className='py-1'>Board Of Directors</li>
            <li className='py-1'>IQAC</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercare pt-2'>CONTACT</h6>
          <ul>
            <li className='py-1'>R.S. No. 199B/1-3, Gokul - Shirgoan, Kolhapur - 416 234, Maharashtra</li>
            <li className='py-1'>info@kitcoek.in</li>
            <li className='py-1'>+917769001199</li>
            <li className='py-1'>+919168781199</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>© {year} Copyright : Event Spectra</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
