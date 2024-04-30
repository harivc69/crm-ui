import React, { useEffect, useState } from 'react';
import Header from '../organism/header';
import MenuComponent from "../organism/menu";
import SideMenu from "../organism/sidemenu";
import CreateWidget from '../atoms/create_widgets';
import Submenu from '../organism/submenu';
import BackgroundColorChanger from '../atoms/BackgroundColorChanger';
import Footer from '../atoms/Footer';

function Home() {
  const [backgroundColor, setBackgroundColor] = useState(() => {
    // Check if there's a color stored in local storage, otherwise use default
    return localStorage.getItem('backgroundColor') || '#d9d9d9';
  });

  useEffect(() => {
    document.title = 'Home';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  // Function to handle color change
  const handleColorChange = (color) => {
    setBackgroundColor(color);
    // Store the color in local storage
    localStorage.setItem('backgroundColor', color);
  };

  // Generate fifty linear gradient colors with light shades
  const randomGradientColors = [];
  function generateRandomLightColor() {
    const r = Math.floor(Math.random() * 28) + 128; // Red channel between 128 and 255
    const g = Math.floor(Math.random() * 128) + 128; // Green channel between 128 and 255
    const b = Math.floor(Math.random() * 128) + 128; // Blue channel between 128 and 255
    return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
  }
  for (let i = 0; i < 30; i++) {
    const color1 = generateRandomLightColor();
    const color2 = generateRandomLightColor();
    const linearGradient = `linear-gradient(145deg, ${color1}, ${color2})`;
    randomGradientColors.push(linearGradient);
  }
  
  return (
    <div style={{ height: '100vh', display: "flex", flexDirection: "column", overflow: 'hidden', backgroundColor:"gray" }}>
      <Header  backgroundColor={backgroundColor} />
      <div style={{ display: 'flex', height: '-webkit-fill-available', overflow: 'hidden' }}>
        <div style={{ width: '85px', overflow: 'hidden', backgroundColor:"white" }}>
          <SideMenu backgroundColor={backgroundColor} />
        </div>
        <div style={{ width: '100%', marginRight:"-10px", backgroundColor: backgroundColor, overflow: 'hidden' }}>
          <div>
            <MenuComponent backgroundColor={backgroundColor} />
          </div>
         
         <div>

      <Submenu backgroundColor={backgroundColor} />
         </div>
          <div>
            <CreateWidget backgroundColor={backgroundColor} />
          </div>
     
          <BackgroundColorChanger colors={randomGradientColors} onColorChange={handleColorChange} />
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;
