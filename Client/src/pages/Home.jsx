import { Link } from "react-router-dom";

import homePageMainImage from '../assets/Images/mainImage.jpg';
import HomeLayout from "../layouts/HomeLayout";
function Home() {

    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">KIT's  <span className="text-yellow-500 font-bold">Event Spectra</span></h1>
                    <p className="text-xl text-gray-200">
                    Embark on a journey of innovation and effortless exploration with
                    EventSpectra. We believe in simplifying your digital experience,
                    providing you with tools and insights that propel you into the
                    future. Discover the ease of connectivity and the power of
                    streamlined solutions.
                    </p>

                    <div className="space-x-6">
                        <Link to="/clubs" >
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore Clubs
                            </button>
                        </Link>
                        {/* <Link to="/contacts" >
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                ChatBot
                            </button>
                        </Link> */}
                    </div>
                </div>
                
                <div className="w-1/2 flex items-center justify-center ">
                    <img src={homePageMainImage} alt="home page"  className="w-[70%]"/>
                </div>
                
</div>
        </HomeLayout>
    )
}

export default Home;