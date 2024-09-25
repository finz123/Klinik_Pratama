'use client'; // Tambahkan ini di baris pertama

import { Button, Grid2, Typography, Box } from '@mui/material';
import Image from 'next/image'; 
import Link from 'next/link'; // Import Link dari Next.js
import Footer from '../../components/footer';
import Header from '../../components/Header';
import Greeting from '../../components/Greeting';

const Polikaryawan = () => {
  // Definisikan fungsi handlePoliklinikSelect
  const handlePoliklinikSelect = (poliklinik) => {
    console.log(`Poliklinik yang dipilih: ${poliklinik}`);
    // Tambahkan logika lain yang diperlukan, seperti menyimpan pilihan atau melakukan navigasi
  };
  return (
    <>
      <Header />  
      
   {/* Box utama untuk menempatkan konten di tengah dengan marginTop */}
   <Box 
        display="flex" 
        flexDirection="row" 
        alignItems="flex-start" 
        p={5} 
        justifyContent="space-between"
        marginTop={12} // Menambahkan jarak dari header
      >
      <Box display="flex" flexDirection="column" alignItems="flex-start" p={5} paddingLeft={30}>
        <Greeting />

        {/* Tombol Kembali */}
        <Link href="/mobilejkn" passHref>
          <Button
            variant="outlined" // Gunakan variant outlined untuk border
            sx={{
              width: 250, // Membesarkan lebar tombol
              height: 100, // Membesarkan tinggi tombol
              borderColor: 'red', // Border berwarna merah
              color: 'red', // Tulisan berwarna merah
              borderRadius: '10px', // Sudut border
              marginTop: 5, // Jarak antara greeting dan tombol (menurunkan)
              '&:hover': {
                borderColor: 'darkred', // Warna border saat hover
                color: 'darkred', // Warna tulisan saat hover
              },
              fontSize: '24px', // Ukuran font lebih besar
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '50%', maxHeight: '600px', overflowY: 'auto' }}>
          <Link href="/validasi?poliklinik=PoliKlinik Umum" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Poliumum')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2, fontSize: '24px', }}
            >
              Poliklinik Umum
            </Button>
            </Link>

            <Link href="/validasi?poliklinik=Poliklinik Gigi dan Mulut" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Gigi dan Mulut')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2, fontSize: '24px', }}
            >
              Poliklinik Gigi dan Mulut
            </Button>
            </Link>


            <Link href="/validasi?poliklinik=Poliklinik KIA" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('KIA')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2, fontSize: '24px', }}
            >
              Poliklinik KIA
            </Button>
            </Link>

            <Link href="/validasi?poliklinik=Poliklinik Laboratorium" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Laboratorium')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2, fontSize: '24px', }}
            >
              Poliklinik Laboratorium
            </Button>
            </Link>

            <Link href="/validasi?poliklinik=Poliklinik UGD" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('UGD')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2,fontSize: '24px', }}
            >
              Poliklinik UGD
            </Button>
            </Link>

            <Link href="/validasi?poliklinik=Poli KB" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('KB')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2,fontSize: '24px', }}
            >
              Poli KB
            </Button>
            </Link>

            <Link href="/validasi?poliklinik=Poli Persalinan" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('Persalinan')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2,fontSize: '24px', }}
            >
              Poli Persalinan
            </Button>
            </Link>

            <Link href="/validasi?poliklinik= Poli TB & Paru" passHref>
            <Button
              variant="outlined"
              onClick={() => handlePoliklinikSelect('TB & Paru')}
              sx={{ ...buttonStyles, width: '450px', height: '60px', marginTop: 0.2,fontSize: '24px', }}
            >
              Poli TB & Paru
            </Button>
            </Link>
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
export default Polikaryawan;