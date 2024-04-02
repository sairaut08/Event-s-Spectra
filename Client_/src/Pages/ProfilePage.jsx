import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getProfile } from '../Redux/Slices/authSlice';
import image from '../assets/img1.jpg'


function ProfilePage() {

    // const dispatch = useDispatch()

    // const userData = useSelector(state => state?.auth?.data)
    // console.log(`userdata : ${userData.fullName}`);

    // useEffect( ()=>{
    //     async function getData(){
    //         await dispatch(getProfile())
    //     }
    // },[])    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <img 
          src={image}
        // src={userData.avatar.secure_url} 

        alt="User" className="rounded-full h-24 w-24 mb-4 mx-auto" />
        <h2 className="text-2xl font-bold mb-2">
            
            {/* {userData.fullName} */}
            Fullname
            
        </h2>
        <p className="text-gray-600 mb-4">
            {/* {userData.email} */}
            EMail
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
  
}

export default ProfilePage
