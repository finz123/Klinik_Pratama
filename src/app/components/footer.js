// components/Footer.js
import { Box, Typography } from '@mui/material';

const footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#07579A', // Sesuaikan dengan warna latar belakang
        padding: 2,
        boxShadow: '0 -1px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="body2" color="white">
        © Klinik Pratama 2024 - SIRS
      </Typography>
    </Box>
  );
};

export default footer;
