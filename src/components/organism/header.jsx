import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Myprofile from '../molecules/my_profile';
import Hamburger from '../molecules/list';
import FullScreen from '../atoms/full_screen';
import Companylogo from '../atoms/company_logo';
import Search from '../atoms/search';

function Header() {
  return (
  <Box sx={{ flexGrow: 1 }}>
  <div position="static"  style={{ background: "white", color: 'black', boxShadow:'none', padding:'0px 15px' }}>
    <Toolbar sx={{ flexGrow: 1, marginLeft:"-30px" }}>
    <Myprofile/>
    <Hamburger />
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    <FullScreen />
    </Box>
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
   <Search/>
    </Box>

    <Box sx={{ flexGrow: 1 }} />
    <Box sx={{ display: { md: 'flex'} }}>
      <Companylogo/>
    </Box>
    </Toolbar>
  </div>
  </Box>
  );
}

export default Header;