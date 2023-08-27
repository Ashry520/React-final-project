import React from 'react';

const UserDetails = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem('registrationData'));

  return (
    <div className="m-auto w-75 py-5">
      <h2>User Information</h2>
      {userData ? (
        <div>
          <div className="user-data my-2">
            <p><strong>Email:</strong> {userData.email}</p>
          </div>
          <div className="user-data my-2">
            <p><strong>First Name:</strong> {userData.first_name}</p>
          </div>
          <div className="user-data my-2">
            <p><strong>Last Name:</strong> {userData.last_name}</p>
          </div>
          <div className="user-data my-2">
            <p><strong>Age:</strong> {userData.age}</p>
          </div>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default UserDetails;
