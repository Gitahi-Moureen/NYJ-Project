import React from 'react';
import { Link } from 'react-router-dom';

const profiles = [
  {
    id:1,
    name: 'Dorcus Tuukuo',
    position: 'Software Developer',
    description: 'Dorcus is a dedicated software developer with a passion for creating innovative solutions.',
    image: '/images/Tuukuo.jpeg', 
  },
  {
    id:2,
    name: 'Moureen Gitahi',
    position: 'Data Analyst',
    description: 'Moureen is a skilled data analyst who excels at transforming data into actionable insights.',
    image: '/images/Gitahi.jpeg',
  },
  {
    id:3,
    name: 'Esther Njoroge',
    position: 'Project Manager',
    description: 'Esther is an experienced project manager known for her effective leadership and organizational skills.',
    image: '/images/Esther.jpeg', 
  },
  {
    id:4,
    name: 'Margaret Nyambura',
    position: 'UX/UI Designer',
    description: 'Margaret specializes in user experience and interface design, creating intuitive and engaging applications.',
    image: '/images/Maggy.jpeg', 
  },
  {
    id:5,
    name: 'Teresia Wangui',
    position: 'DevOps Engineer',
    description: 'Teresia is a DevOps engineer focused on optimizing development and operations processes for efficiency.',
    image: '/images/Terry.jpeg', 
  },
];

const Profile = () => {
  return (
    <div>
      <h1>Profiles</h1>
      <ul className="profile-list">
        {profiles.map(profile => (
          <li key={profile.id} className="profile-card">
            <img src={profile.image} alt={`${profile.name}'s profile`} className="profile-pic" />
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <h3>{profile.position}</h3>
              <p>{profile.description}</p>
              <Link to={`/portfolio/${profile.id}`}>
              <button className="learn-more-button">Learn More</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;