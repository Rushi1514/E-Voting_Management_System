import React from 'react';
import { useData } from '../DataContext/DataContext'; 
import { useNavigate, Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const { userData, setUserData } = useData();
  const navigate = useNavigate();

  const logout = () => {
    setUserData(null);
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">User Profile</h2>
      {userData ? (
        <div className="profile-data">
          <div className="profile-image">
            <img
              src={userData.profileImage || 'default.jpg'}
              alt="Profile"
            />
          </div>
          <p>Username: {userData.username || 'No data'}</p>
          <p>Email: {userData.email || 'No data'}</p>
          <p>Description: {userData.description || 'No data'}</p>
          <p>Bio: {userData.bio || 'No data'}</p>
          <p>Facebook: {userData.socialMedia.facebook || 'No data'}</p>
          <p>Twitter: {userData.socialMedia.twitter || 'No data'}</p>
          <p>Instagram: {userData.socialMedia.instagram || 'No data'}</p>
          <button className="profile-logout-button" onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
      <button className="profile-button">
        <Link to='/edit' className="profile-link">Edit</Link>
      </button>
    </div>
  );
}

export default Profile;
