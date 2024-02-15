import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Footer from "../components/footer";
import { logout } from '../redux/slices/authSlice';

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    //const role = useSelector((state) => state?.auth?.role);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    async function onLogout(e) {
        e.preventDefault();
        const response = await dispatch(logout());
        if (response?.payload?.data) navigate("/");
    }

    return (
        <div className="min-h-screen flex flex-col">

            {/* Fixed Navbar */}
            <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-white text-xl font-bold">Your Logo</Link>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <FiMenu
                            size={"32px"}
                            className='font-bold text-white cursor-pointer'
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </div>

                    {/* Navigation Links for Larger Screens */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-red-700" : "text-white"
                                    } text-xl`
                                    }
                        
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 
                            ${isActive ? "text-red-700" : "text-white"
                        } text-xl`
                        }
                            
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 
                            ${isActive ? "text-red-700" : "text-white"
                        } text-xl`
                        }
                        >
                            Contact Us
                        </NavLink>

                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                <NavLink to="/user/profile" className="btn-primary px-4 py-1 font-semibold rounded-md text-xl">Profile</NavLink>
                                <Link to="#" onClick={onLogout} className="btn-secondary px-4 py-1 font-semibold rounded-md text-xl">Logout</Link>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/signin" className="btn-primary px-4 py-1 font-semibold rounded-md text-xl">Login</Link>
                                <Link to="/signup" className="btn-secondary px-4 py-1 font-semibold rounded-md text-xl">Signup</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-gray-800 p-4">
                    <NavLink
                        to="/"
                        className="block text-white py-2"
                        
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="block text-white py-2"
                       
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="block text-white py-2"
                        
                    >
                        Contact Us
                    </NavLink>

                    {isLoggedIn ? (
                        <div className="flex flex-col space-y-2 mt-4">
                            <NavLink to="/user/profile" className="text-white">Profile</NavLink>
                            <Link to="#" onClick={onLogout} className="text-white">Logout</Link>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-2 mt-4">
                            <Link to="/signin" className="text-white">Login</Link>
                            <Link to="/signup" className="text-white">Signup</Link>
                        </div>
                    )}
                </div>
            )}

            {/* Content */}
            <div className={`mt-${isMobileMenuOpen ? '16' : '0'} flex-grow`}>
                {children}
            </div>

            <Footer />
        </div>
    );
}

export default HomeLayout;
