'use client';  // Ini penting agar komponen berjalan di sisi client
// pages/index.js
import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import Keyboard from '../../components/Keyboard';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Nomor Antrean</title>
      </Head>
      <Typography variant="h4" textAlign="center" mt={4}>
        Selamat Datang
      </Typography>
      <Typography variant="body1" textAlign="center" mb={4}>
        Silakan masukan nomor antrean anda
      </Typography>
      <Keyboard />
    </Container>
  );
}
