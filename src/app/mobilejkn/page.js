'use client'; // Tambahkan ini di baris pertama

import { Button, Grid2, Typography, Box } from '@mui/material';
import Image from 'next/image'; 
import Link from 'next/link'; // Import Link dari Next.js
import Footer from '../components/footer';
import Header from '../components/Header';
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const daftar = () => {
    return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"  
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        p={2}
      >
        <Typography variant="h3" marginBottom={5} justifyContent="center" align="center">
          Sudah Daftar di aplikasi <br />
          <span style={{ fontWeight: 'bold' }}>MobileJKN</span>?
        </Typography>

        <Grid2 container spacing={5} justifyContent="center">
        <Grid2 item>
          {/* Link untuk navigasi ke halaman karyawan */}
          <Link href="/mobilejkn/NoAntrian" passHref>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: 500,
                height: 400,
                backgroundColor: 'white',
                borderRadius: '50px',
                boxShadow: '0px 4px 20px rgba(65, 193, 70, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
              }}
            >
              <BsCheck style={{ marginRight: '10px', color: 'green', fontSize: '10rem' }} />
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'sans-serif',
                  fontWeight: '650',
                  color: 'green', // Mengubah warna teks menjadi hijau
                }}
              >
                Sudah
              </Typography>
            </Button>
          </Link>
        </Grid2>

          <Grid2 item>
          {/* Link untuk navigasi ke halaman umum */}
          <Link href="/mobilejkn/poliklinik" passHref>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: 500,
                height: 400,
                backgroundColor: 'white',
                borderRadius: '50px',
                boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
              }}
            >
              <IoIosClose style={{ marginRight: '8px', color: 'red', fontSize: '10rem' }} />
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'sans-serif',
                  fontWeight: '650',
                  color: 'red', // Mengubah warna teks menjadi merah
                }}
              >
                Belum
              </Typography>
            </Button>
          </Link>
        </Grid2>
        </Grid2>

        {/* Tombol Kembali */}
       <Link href="/karyawan" passHref>
          <Button
            variant="outlined" // Gunakan variant outlined untuk border
            sx={{
              width: 300,
              height: 100,
              borderColor: 'red', // Border berwarna merah
              color: 'red', // Tulisan berwarna merah
              borderRadius: '10px', // Sudut border
              marginTop: 7, // Jarak antara gambar dan tombol
              '&:hover': {
                borderColor: 'darkred', // Warna border saat hover
                color: 'darkred', // Warna tulisan saat hover
              },
              fontSize: '40px', // Ukuran font
              fontWeight: 'bold', // Ketebalan font, // Ketebalan font
              fontFamily: 'sans-serif', // Jenis font
              textTransform: 'none', // Menghindari semua huruf kapital
            }}
          >
            Kembali
          </Button>
        </Link>
      </Box>
      <Footer />
    </>
  );
}
export default daftar;
