'use client';
import { Box, Grid, Typography, Button } from '@mui/material';
import Link from 'next/link'; // Import Link dari Next.js
import Image from 'next/image'; // Impor komponen Image dari Next.js
import BPJS from '../public/BPJS.png';
import asuransi from '../public/asuransi.png';
import Umum from '../public/Umum.png';
import Footer from '../components/footer';
import Header from '../components/Header';

export default function umum() {
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
        <Typography variant="h4" marginBottom={10}>
          Mohon untuk memilih layanan
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            {/* Link untuk navigasi ke halaman karyawan */}
            <Link href="/poliklinik" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: 300,
                  height: 200,
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: `
                  -0px 4px 20px  rgba(22, 60, 142, 0.25),
                  4px 0px 20px rgba(65, 193, 70, 0.25)
                  `,
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <div>
                    <Image
                      src={BPJS}
                      alt="BPJS"
                      width={180}
                      height={180}
                    />
                  </div>
                </Box>
              </Button>
            </Link>
          </Grid>

          <Grid item>
            {/* Link untuk navigasi ke halaman umum */}
            <Link href="/poliklinik" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: 300,
                  height: 200,
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow:`
                  -0px 4px 20px  rgba(19, 119, 10, 0.25),
                  4px 0px 20px rgba(36, 172, 233, 0.25)
                   `,   
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Image
                    src={asuransi}
                    alt="asuransi"
                    width={100}
                    height={50}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'sans-serif',
                      fontWeight: '650',
                      backgroundImage:
                        'linear-gradient(to right, rgb(33, 150, 243), rgb(0, 255, 0))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Asuransi
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Grid>

          <Grid item>
            {/* Link untuk navigasi ke halaman karyawan */}
            <Link href="/poliklinik" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: 300,
                  height: 200,
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 20px rgba(43, 42, 41, 0.50)',
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <div>
                    <Image
                      src={Umum}
                      alt="Layanan Umum"
                      width={100}
                      height={50}
                    />
                  </div>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'sans-serif',
                      fontWeight: '650',
                      backgroundColor:'#2B2A29',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Layanan Umum
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Grid>
        </Grid>
       {/* Tombol Kembali */}
       <Link href="/" passHref>
          <Button
            variant="outlined" // Gunakan variant outlined untuk border
            sx={{
              width: 200,
              height: 75,
              borderColor: 'red', // Border berwarna merah
              color: 'red', // Tulisan berwarna merah
              borderRadius: '10px', // Sudut border
              marginTop: 7, // Jarak antara gambar dan tombol
              '&:hover': {
                borderColor: 'darkred', // Warna border saat hover
                color: 'darkred', // Warna tulisan saat hover
              },
              fontSize: '20px', // Ukuran font
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
