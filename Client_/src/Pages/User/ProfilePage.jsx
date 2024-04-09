import React from 'react';
import { useSelector } from 'react-redux';
import BaseLayout from '../../Layouts/BaseLayout';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const userData = useSelector(state => state?.auth?.data);
  // console.log(userData.fullName);

  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <img
            src={userData?.avatar?.secure_url}
            alt="User"
            className="rounded-full h-24 w-24 mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">Name: {userData?.fullName}</h2>
          <p className="text-gray-600 mb-2 text-center">Email: {userData?.email}</p>
          <p className="text-gray-600 mb-4 text-center">Role: {userData?.role}</p>
          <div className="flex justify-around">
            <Link to="/user/edit-profile">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit Profile
              </button>
            </Link>
            <Link to="/user/change-password">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Change Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default ProfilePage;
