import React from "react";


interface ProfileProps {
  name: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, imageUrl }) => {
  return (
    <div className="profile">
      <img className="profile-image" src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
