import React, { useState, useEffect } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux' 
import { logout } from '../../../Redux/Slices/authSlice';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]); 


  const iconAndTextClass = nav ? 'text-white' : 'text-black';


  // state management use
  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;

  // checking if user is logged in and getting the role
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

  const role = useSelector((state) => state?.auth?.role)

  async function handleLogout(e){
    e.preventDefault()

    const response = await dispatch(logout())

    if(response?.payload?.success){
      navigate('/')
    }
  }

  return (
    <div className={`absolute w-full flex justify-between p-4 items-center ${nav ? 'bg-black' : ''}`}>
      <h1 className={`font-bold text-2xl z-20 ${iconAndTextClass}`}>
        <Link to='/' onClick={() => setNav(false)}>Event-Spectra</Link>
      </h1>
      <HiMenuAlt3 onClick={handleNav} className={`z-20 cursor-pointer ${iconAndTextClass}`} size={25} />
      <div
        className={
          nav
            ? 'fixed inset-0 ease-in duration-300 text-gray-300 bg-black/90 px-4 py-7 flex flex-col z-10'
            : 'fixed top-0 left-full ease-out duration-500 h-screen z-10'
        }
      >
        <ul className='flex flex-col h-full items-center justify-center space-y-4 text-xl'>
          <li ><Link to='/' onClick={() => setNav(false)}>Home</Link></li>
          {/* <li><Link to='/events' onClick={() => setNav(false)}>Events</Link></li>  */}
          <li><Link to='/clubs' onClick={() => setNav(false)}>Clubs</Link></li> 


          {

           
            isLoggedIn ? 
            
            (
              <>
                <li><Link to='/logout' onClick={(e) =>{ setNav(false) ; handleLogout(e)}}>Logout</Link></li>
                <li><Link to='/user/profile' onClick={() => setNav(false)}>Profile</Link></li>
              </>
            ):
            (
              <>
                <li><Link to='/login' onClick={() => setNav(false)}>Login</Link></li>
                <li><Link to='/signup' onClick={() => setNav(false)}>Sign Up</Link></li>
              </>
            ) 
          }

          
          <li><Link to='/about-us' onClick={() => setNav(false)}>About Us</Link></li>
          <li><Link to='/contact-us' onClick={() => setNav(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
