'use client'; // Tambahkan ini di baris pertama

import { Button, Grid2, Typography, Box } from '@mui/material';
import Image from 'next/image'; 
import Link from 'next/link'; // Import Link dari Next.js
import logo_karyawan from './public/logo_karyawan.jpeg';
import logo_umum from './public/logo_umum.jpeg';
import Footer from './components/footer';
import Header from './components/Header';

export default function Home() {
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
        <Typography variant="h3" marginBottom={10} justifyContent="center">
          Mohon untuk memilih layanan
        </Typography>

        <Grid2 container spacing={5} justifyContent="center">
          <Grid2 item>
            {/* Link untuk navigasi ke halaman karyawan */}
            <Link href="/karyawan" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: 500,
                  height: 400,
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: `
                  -0px 4px 20px  rgba(255, 0, 0, 0.25), 
                  4px 0px 20px rgba(36, 172, 233, 0.25) 
                  `,
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <div>
                    <Image
                      src={logo_karyawan}
                      alt="Logo Karyawan"
                      width={150}
                      height={50}
                    />
                  </div>

                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: 'sans-serif',
                      fontWeight: '650',
                      backgroundImage:
                        'linear-gradient(to right, #24ACE9, #FF0000)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Karyawan
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Grid2>

          <Grid2 item>
            {/* Link untuk navigasi ke halaman umum */}
            <Link href="/umum" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: 500,
                  height: 400,
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: `
                  -0px 4px 20px  rgba(65, 193, 70, 0.25), 
                  4px 0px 20px rgba(36, 172, 233, 0.25)
                  `,
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Image
                    src={logo_umum}
                    alt="Logo Umum"
                    width={150}
                    height={50}
                  />

                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: 'sans-serif',
                      fontWeight: '650',
                      backgroundImage:
                        'linear-gradient(to bottom, #24ACE9, #41C146)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Umum
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Grid2>
        </Grid2>
      </Box>
      <Footer />
    </>
  );
}
