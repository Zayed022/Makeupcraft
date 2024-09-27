import React from 'react';

const VisitInstagramButton = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/makeupcraft_bysana/', '_blank');
  };

  return (
    <button className='rounded-lg text-red-400' onClick={redirectToInstagram} style={styles.button}>
      Visit My Instagram
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#E1306C', // Instagram brand color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default VisitInstagramButton;
