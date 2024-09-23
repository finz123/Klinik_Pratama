// components/Header.js
import { Box } from '@mui/material';
import Image from 'next/image'; // Impor komponen Image dari Next.js
import LiveClock from './LiveClock'; // Impor komponen LiveClock
import logo from '../public/logo.png'; // Path relatif dari folder public

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
        width: '100%',
        position: 'relative',
        backgroundColor: 'white', // Warna latar belakang header (opsional)
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto', // Logo tetap di kiri
          paddingRight: 2,
        }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={250}
          height={250}
        />
      </Box>

      <Box
        sx={{
          flex: '1 1 auto', // Memastikan LiveClock berada di tengah
          display: 'flex',
          justifyContent: 'center', // Mengatur LiveClock di tengah
        }}
      >
        <LiveClock />
      </Box>
    </Box>
  );
};

export default Header;
