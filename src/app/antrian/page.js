'use client';

import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; // Untuk navigasi kembali ke halaman lain
import Image from 'next/image'; // Impor komponen Image dari Next.js
import logo from "../public/logo.png";

const Antrian = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: '100vh', // Mengatur tinggi menjadi 100% dari viewport
        display: 'flex', // Menggunakan Flexbox
        justifyContent: 'center', // Untuk menempatkan konten di tengah secara horizontal
        alignItems: 'center', // Untuk menempatkan konten di tengah secara vertikal
        flexDirection: 'column', // Menyusun elemen secara vertikal
        textAlign: 'center' // Menjaga teks di tengah
      }}
    >
      {/* Gambar logo */}
      <Image
        src={logo}
        alt="Logo"
        width={400}
        height={400}
        style={{ marginBottom: '40px' }}
      />

      {/* Informasi Antrian */}
      <Typography variant="h4" sx={{ marginBottom: '30px', fontSize: '2rem' }}>
        Antrian anda adalah
      </Typography>
      <Typography variant="h3" color="primary" sx={{ marginBottom: '10px', fontSize: '5rem' }}>
        BK-001 {/* Nomor antrian bisa juga diambil dari API jika diperlukan */}
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: '20px', fontSize: '2rem' }}>
        Silahkan ambil kertas antrian anda yang sudah <br />
        dicetak oleh mesin anjungan ini.
      </Typography>

      {/* Tombol */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white', // Latar belakang tombol putih
          color: '#41C146', // Warna teks hijau
          width: '500px',
          height: '70px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          border: '2px solid rgba(65, 193, 70, 0.5)', // Border hijau
          boxShadow: '0px 4px 8px rgba(65, 193, 70, 0.5)',
          '&:hover': {
            backgroundColor: 'lightgreen', // Warna latar saat hover
          },
        }}
        onClick={handlePrint} // Aksi ketika klik "Saya Mengerti"
      >
        Saya mengerti
      </Button>
    </Box>
  );
};

export default Antrian;
