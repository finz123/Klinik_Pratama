// components/Keyboard.js
'use client';

import { useState } from 'react';
import { Box, Grid2, Button, TextField } from '@mui/material';

const Keyboard = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <Box textAlign="center" p={2}>
      <TextField
        label="Nomor Antrean"
        variant="outlined"
        value={inputValue}
        fullWidth
        InputProps={{
          readOnly: true,
        }}
        sx={{
          mb: 2,
          border: '2px solid #f00',
          borderRadius: '10px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          },
          '& .MuiOutlinedInput-input': {
            textAlign: 'center',
            fontSize: '1.5rem',
          },
        }}
      />
      <Grid2 container spacing={1} justifyContent="center">
        {/* Row 1: Numbers 1234567890 */}
        <Grid2 container item xs={12} justifyContent="center">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((number) => (
            <Grid2 item xs={1} key={number}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(number)}
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '15px',
                  fontSize: '1.5rem',
                  height: '60px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                {number}
              </Button>
            </Grid2>
          ))}
        </Grid2>
        
        {/* Row 2: Letters QWERTYUIOP */}
        <Grid2 container item xs={12} justifyContent="center">
          {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => (
            <Grid2 item xs={1} key={letter}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(letter)}
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '15px',
                  fontSize: '1.5rem',
                  height: '60px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                {letter}
              </Button>
            </Grid2>
          ))}
        </Grid2>

        {/* Row 3: Letters ASDFGHJKL */}
        <Grid2 container item xs={12} justifyContent="center">
          {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter) => (
            <Grid2 item xs={1} key={letter}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(letter)}
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '15px',
                  fontSize: '1.5rem',
                  height: '60px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                {letter}
              </Button>
            </Grid2>
          ))}
        </Grid2>

        {/* Row 4: Letters ZXCVBNM and Delete */}
        <Grid2 container item xs={12} justifyContent="center">
          {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter) => (
            <Grid2 item xs={1} key={letter}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(letter)}
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '15px',
                  fontSize: '1.5rem',
                  height: '60px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                {letter}
              </Button>
            </Grid2>
          ))}
          <Grid2 item xs={1}>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              onClick={handleDelete}
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '15px',
                fontSize: '1.5rem',
                height: '60px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Delete
            </Button>
          </Grid2>
        </Grid2>

        {/* Row 5: Clear, Space, Enter */}
        <Grid2 container item xs={12} justifyContent="center">
          <Grid2 item xs={3}>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleClear}
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '15px',
                fontSize: '1.5rem',
                height: '60px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Clear
            </Button>
          </Grid2>
          <Grid2 item xs={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '15px',
                fontSize: '1.5rem',
                height: '60px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Space
            </Button>
          </Grid2>
          <Grid2 item xs={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '15px',
                fontSize: '1.5rem',
                height: '60px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Enter
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Keyboard;
