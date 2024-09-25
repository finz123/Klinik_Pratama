'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Button, Box, Modal, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../public/logo.png';
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import GenerateAntrian from '../components/GenerateAntrian';
import ReactToPrint from 'react-to-print';

const Validasi = () => {
  const [poliklinik, setPoliklinik] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const printRef = useRef();
  const router = useRouter();
  const [antrianData, setAntrianData] = useState({
    location: '',
    queueNumber: '',
    namaSub: '',
    strTime: new Date().toLocaleTimeString(),
    strDate: new Date().toLocaleDateString(),
  });
  //Inisialisasi state untuk modal print
  const [visiblePrint, setVisiblePrint] = useState(false); // Pastikan ini ada

  useEffect(() => {
    const fetchPoliklinik = async () => {
      const query = new URLSearchParams(window.location.search);
      const selectedPoliklinik = query.get('poliklinik');
      setPoliklinik(selectedPoliklinik || 'Poliklinik Default');
      setIsLoading(false);
    };

    fetchPoliklinik();
  }, []);

  const handlePrintAndRedirect = () => {
    // Update state dengan informasi antrian yang akan dicetak
    setAntrianData({
      location: 'Lokasi yang dipilih', // Sesuaikan dengan lokasi
      queueNumber: '123', // Ganti dengan nomor antrian yang sesuai
      namaSub: 'Nama Sub', // Ganti dengan nama sub yang sesuai
      strTime: new Date().toLocaleTimeString(),
      strDate: new Date().toLocaleDateString(),
    });

    setVisiblePrint(true); // Tampilkan modal print
  
    // Menunggu modal untuk dirender sebelum mencetak
    setTimeout(() => {
      window.print(); // Membuka dialog cetak
    }, 0);
  };

  const handleBelum = () => {
    router.push('/karyawan/polikaryawan');
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box 
      sx={{ 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <Box
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={400}
          height={400}
          style={{ marginBottom: '40px' }}
        />
        
        <Typography variant="h4" sx={{ marginBottom: '30px', fontSize: '3rem' }}>
          Poliklinik yang dipilih adalah
        </Typography>
        <Typography variant="h3" color="primary" sx={{ marginBottom: '30px', fontSize: '5rem' }}>
          {poliklinik}
        </Typography>
        <Typography variant="h4" sx={{ fontSize: '3rem' }}>
          Apakah poliklinik yang anda pilih sudah benar?
        </Typography>
        

        {/* Tombol */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px', bgcolor: 'white', p: 2, borderRadius: '8px', gap: 10 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'green',
            width: '200px',
            height: '70px',
            fontSize: '1.5rem',
            
            boxShadow: '0px 4px 20px rgba(65, 193, 70, 0.35)',
            '&:hover': {
              backgroundColor: 'lightgreen',
            },
          }}
          onClick={handlePrintAndRedirect} // Panggil fungsi cetak dan redirect
        >
          <BsCheck style={{ marginRight: '8px', color: 'green', fontSize: '4rem' }} />
          Sudah
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'red',
            width: '200px',
            height: '70px',
            fontSize: '1.5rem',
            
            boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.35)',
            '&:hover': {
              backgroundColor: 'lightcoral',
            },
          }}
          onClick={handleBelum}
        >
          <IoIosClose style={{ marginRight: '8px', color: 'red', fontSize: '4rem' }} />
          Belum
        </Button>
      </Box>
    </Box>
          {/* Modal untuk Print */}
      <Modal
        open={visiblePrint} // Pastikan ini mengacu pada state yang benar
        onClose={() => setVisiblePrint(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ /* gaya modal Anda di sini */ }}>
          <ReactToPrint
            trigger={() => <Button>Print</Button>}
            content={() => printRef.current}
            pageStyle={`@page { margin: 10mm; }`}
            onAfterPrint={() => {
              setVisiblePrint(false); // Menyembunyikan modal setelah pencetakan
              router.push('/antrian'); // Arahkan ke halaman antrian setelah mencetak
            }}
          />
          <div ref={printRef}>
            <GenerateAntrian
              ref={printRef}
              location={antrianData.location}
              queueNumber={antrianData.queueNumber}
              namaSub={antrianData.namaSub}
              strTime={antrianData.strTime}
              strDate={antrianData.strDate}
            />
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default Validasi;
