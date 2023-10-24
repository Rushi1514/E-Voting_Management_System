import React, { useRef, useEffect, useState } from "react";
import { useData } from '../DataContext/DataContext';
import './EditProfile.css';
import axios from 'axios';

const EditProfile = () => {
    const { userData, setUserData } = useData();
    const imageRef = useRef(null);
    const inputRef = useRef(null);
    const [editedUserData, setEditedUserData] = useState(userData);
    const [isDataEdited, setIsDataEdited] = useState(false);

    useEffect(() => {
        setEditedUserData(userData);
    }, [userData]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        imageRef.current.src = imageUrl;
        setIsDataEdited(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData(prevUserData => ({
            ...prevUserData,
            [name]: value,
        }));
        setIsDataEdited(true);
    };

    const saveData = () => {
        // if (isDataEdited) {
        //     axios.post('http://localhost:5000/api/saveUserData/save', editedUserData, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     })
        //     .then(response => {
        //         setUserData(response.data);
        //         setIsDataEdited(false);
        //     })
        //     .catch(error => {
        //         console.error('Error saving data:', error);
        //     });
        // }
    };

    if (!userData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="edit-profile-container">
            <div className="upload-image">
                <h2>Upload Image</h2>
                <img alt="" ref={imageRef} />
                <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={handleFileChange}
                    ref={inputRef}
                />
                <label htmlFor="file">Select a file...</label>
            </div>
            <div className="user-info">
                <h2>Edit Profile</h2>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={editedUserData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={editedUserData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        value={editedUserData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        name="bio"
                        id="bio"
                        value={editedUserData.bio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="facebook">Facebook:</label>
                    <input
                        type="text"
                        name="socialMedia.facebook"
                        id="facebook"
                        value={editedUserData.socialMedia?.facebook ?? ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="twitter">Twitter:</label>
                    <input
                        type="text"
                        name="socialMedia.twitter"
                        id="twitter"
                        value={editedUserData.socialMedia?.twitter ?? ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="instagram">Instagram:</label>
                    <input
                        type="text"
                        name="socialMedia.instagram"
                        id="instagram"
                        value={editedUserData.socialMedia?.instagram ?? ''}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button onClick={saveData}>Save</button>
        </div>
    );
};

export default EditProfile;
