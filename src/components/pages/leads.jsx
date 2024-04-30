import React, { useEffect, useState } from 'react';
import Header from '../organism/header';
import SideMenu from "../organism/sidemenu";


function Leads() {
  const [backgroundColor] = useState(() => {
    // Check if there's a color stored in local storage, otherwise use default
    return localStorage.getItem('backgroundColor') || '#d9d9d9';
  });

  useEffect(() => {
    document.title = 'Home';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  return (
    <div style={{ height: '100vh', display: "flex", flexDirection: "column", overflow: 'hidden', backgroundColor:"gray" }}>
      <Header />
      <div style={{ display: 'flex', height: '-webkit-fill-available', overflow: 'hidden' }}>
        <div style={{ width: '85px', overflow: 'hidden', backgroundColor:"white" }}>
          <SideMenu />
        </div>
        <div style={{ width: '100%', marginRight:"-10px", backgroundColor: backgroundColor, overflow: 'hidden' }}>
          
        </div>
      </div>
    </div>
  );
}

export default Leads;