"use client"; // Pastikan komponen ini dirender di sisi klien

import React from 'react';
import Typography from '@mui/material/Typography';
import Constant from '@/constants/constants';
import logo from '../public/logo.png'; // Sesuaikan path logo Anda

const GenerateAntrian = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='print-source page'>
	
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo.src} style={{ width: '15.2em', height: '5.5em' }} alt="Logo" />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5mm' }}>
        <Typography style={{ fontSize: '4mm', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }}>Antrian</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', borderBottomWidth: '.2mm', borderBottomStyle: 'solid', borderBottomColor: '#000000', padding: '0mm 0mm 2mm 0mm' }}>
        <Typography style={{ fontSize: '4mm', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }}>{props.namaSub}</Typography>
      </div>
     
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '4mm' }}>
        <Typography style={{ fontSize: '4mm', fontFamily: 'Poppins', fontWeight: 'bold', color: '#000000' }}>No. Antrian</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Typography style={{ fontSize: '15mm', fontFamily: 'Poppins', fontWeight: 'bold', color: '#000000' }}>{props.queueNumber}</Typography>
      </div>
	   <div style={{ display: 'flex',justifyContent: 'center', marginTop: '.5mm', marginLeft : '1mm' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '.5mm', marginLeft: '0.5mm' }}>
          <Typography style={{ fontSize: '4mm', fontFamily: 'Poppins', fontWeight: 'bold', color: '#000000' }}>Silahkan ke {props.location === "" ? "-" : props.location}</Typography>
        </div>
      </div>
      <div style={{ marginTop: '4%' }}>
        {/* Additional instructions or information can go here */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '6mm' }}>
        <div style={{ display: 'flex', marginTop: '4mm', alignItems: 'center', alignSelf: 'center' }}>
          <img src={logo.src} style={{ width: '1em', height: '1em', marginRight: '2mm' }} alt="Logo" />
          <Typography style={{ fontSize: '3mm', fontFamily: 'Poppins', fontWeight: 'bold', color: '#000000' }}>@2020 Powered By : Eksad Technology</Typography>
        </div>
        <div style={{ marginTop: '4mm' }}>
          <Typography style={{ fontSize: '3mm', fontFamily: 'Poppins', fontWeight: 'bold', color: '#000000' }}>
            {props.strTime} {props.strDate}
          </Typography>
        </div>
      </div>
    </div>
  );
});

export default GenerateAntrian;