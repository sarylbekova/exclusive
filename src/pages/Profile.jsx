import React, { useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({
        firstName: "Md",
        lastName: "Rimel",
        email: "rimel111@gmail.com",
        address: "Kingston, 52336, United States",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = () => {
        console.log("Profile Updated: ", profile);
        alert("Profile updated successfully!");
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>Edit Your Profile</h2>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleInputChange}
                />
            </div>
            <h3>Password Changes</h3>
            <div>
                <label>Current Password:</label>
                <input
                    type="password"
                    name="currentPassword"
                    value={profile.currentPassword}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    name="newPassword"
                    value={profile.newPassword}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Confirm New Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={profile.confirmPassword}
                    onChange={handleInputChange}
                />
            </div>
            <button >Save Changes</button>
        </div>
    );
};

export default Profile;


