import React, { useEffect, useState } from 'react';

const ComingSoonPage = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
  
    const countDownDate = new Date("Apr 30, 2024 00:00:00").getTime();


    const intervalId = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const formattedCountdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      setCountdown(formattedCountdown);
      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown("COMING SOON!");
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Our Blog is Coming Soon!</h1>
        <p style={styles.p}>We are working hard to bring you amazing content. Stay tuned!</p>
        <div id="countdown" style={styles.countdown}>{countdown}</div>
      </div>
    </div>
  );
};


const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f3f3',
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
  },
  h1: {
    color: '#333',
    marginBottom: '20px',
  },
  p: {
    color: '#666',
    marginBottom: '30px',
  },
  countdown: {
    fontSize: '24px',
    color: '#888',
    border: '2px solid #333',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default ComingSoonPage;
