import React, { useEffect } from 'react';
import Header from '../organism/header';
import SideMenu from "../organism/sidemenu";

function Report() {
  useEffect(() => {
    document.title = 'Home';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  const backgroundColor = localStorage.getItem('backgroundColor') || '#d9d9d9';

  return (
    <div style={{ height: '100vh', display: "flex", flexDirection: "column", overflow: 'hidden', backgroundColor: backgroundColor }}>
      <Header />
      <div style={{ display: 'flex', height: '-webkit-fill-available', overflow: 'hidden' }}>
        <div style={{ width: '85px', overflow: 'hidden', backgroundColor:"white" }}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default Report;
