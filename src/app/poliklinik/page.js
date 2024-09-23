'use client'; // Tambahkan ini di baris pertama

import { Button, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image'; 
import Link from 'next/link'; // Import Link dari Next.js
import Footer from '../components/footer';
import Header from '../components/Header';
import Greeting from '../components/Greeting';

export default function Poliklinik() {
  return (
    <>
      <Header />
      
      <Box display="flex" flexDirection="row" alignItems="flex-start" p={5} justifyContent="space-between">
        <Box display="flex" flexDirection="column" alignItems="flex-start" p={5} paddingLeft={15}>
          <Greeting />
          
          {/* Tombol Kembali */}
          <Link href="/karyawan" passHref>
            <Button
              variant="outlined" // Gunakan variant outlined untuk border
              sx={{
                width: 200,
                height: 75,
                borderColor: 'red', // Border berwarna merah
                color: 'red', // Tulisan berwarna merah
                borderRadius: '10px', // Sudut border
                marginTop: 2, // Jarak antara greeting dan tombol
                '&:hover': {
                  borderColor: 'darkred', // Warna border saat hover
                  color: 'darkred', // Warna tulisan saat hover
                },
                fontSize: '20px', // Ukuran font
                fontWeight: 'bold', // Ketebalan font
                fontFamily: 'sans-serif', // Jenis font
                textTransform: 'none', // Menghindari semua huruf kapital
              }}
            >
              Kembali
            </Button>
          </Link>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, width: '50%', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '50%', maxHeight: '300px', overflowY: 'auto' }}>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Poliumum')}
              sx={buttonStyles}
            >
              Poliklinik Umum
            </Button>

            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Gigi dan Mulut')}
              sx={buttonStyles}
            >
              Poliklinik Gigi dan Mulut
            </Button>

            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('KIA')}
              sx={buttonStyles}
            >
              Poliklinik KIA
            </Button>

            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Laboratorium')}
              sx={buttonStyles}
            >
              Poliklinik Laboratorium
            </Button>

            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('UGD')}
              sx={buttonStyles}
            >
              Poliklinik UGD
            </Button>

            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('KB')}
              sx={buttonStyles}
            >
              Poli KB
            </Button>

            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Persalinan')}
              sx={buttonStyles}
            >
              Poli Persalinan
            </Button>

            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('TB & Paru')}
              sx={buttonStyles}
            >
              Poli TB & Paru
            </Button>
          </Box>
        </Box>
      </Box>
      
      <Footer />
    </>
  );
}

const buttonStyles = {
  color: 'lightgreen',
  fontFamily: 'sans-serif',
  borderColor: 'lightgreen',
  fontSize: '20px',
  fontWeight: 'bold',
  textTransform: 'none',
  justifyContent: 'flex-start', // Membuat tulisan rata kiri
  textAlign: 'left', // Mengatur teks agar rata kiri
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: 'lightgreen',
    color: 'white',
  },
};
