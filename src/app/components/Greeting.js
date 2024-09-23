import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      let greetingText = '';
      if (hour < 12) {
        greetingText = 'Selamat Pagi, Poliklinik apa yang ingin Anda kunjungi?';
      } else if (hour < 15) {
        greetingText = 'Selamat Siang, Poliklinik apa yang ingin Anda kunjungi?';
      } else if (hour < 18) {
        greetingText = 'Selamat Sore, Poliklinik apa yang ingin Anda kunjungi?';
      } else {
        greetingText = 'Selamat Malam, Poliklinik apa yang ingin Anda kunjungi?';
      }
      setGreeting(greetingText);
    };

    updateGreeting(); // Initial greeting
    const intervalId = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography variant="h4" mb={2} maxWidth={500} fontWeight={500} fontFamily={'sans-serif'} fontSize={30}>
      {greeting}
    </Typography>
  );
}

export default Greeting;