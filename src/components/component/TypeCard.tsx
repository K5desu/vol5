import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface PersonalityCardProps {
  title: string;
  description: string;
  color: string;
  tag: string;
  animationData: string;
}

const PersonalityCard: React.FC<PersonalityCardProps> = ({ title, description, color, tag, animationData }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
  <div style={{ 
    border: `2px solid ${color}`, 
    padding: '20px', 
    borderRadius: '10px', 
    marginBottom: '20px', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
    backgroundColor: '#fff' 
  }}>
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: '200px', width: '100%', marginBottom: '20px' }}
    />
    <h2 style={{ color: color, marginBottom: '10px' }}>{title}</h2>
    <p style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>{description}</p>
    <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#777' }}>{tag}</p>
  </div>

  
</div>
  );
};

export default PersonalityCard;
