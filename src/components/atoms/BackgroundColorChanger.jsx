import React, { useState, useEffect } from 'react';
import theme1 from "../../assets/images/kk.png";

const BackgroundColorChanger = ({ colors, onColorChange, isFullScreen }) => {
  const [marginTop, setMarginTop] = useState("20%");

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    onColorChange(randomColor);
  };

  useEffect(() => {
    if (isFullScreen) {
      setMarginTop("48%");
    } else {
      setMarginTop("20%");
    }
  }, [isFullScreen]);

  return (
    <div>
      <img
        src={theme1}
        onClick={handleClick}
        style={{
          width: "30px",
          height: "auto",
          marginLeft: "95%",
          marginTop: marginTop,
        }}
        alt='img'
      />
    </div>
  );
};

export default BackgroundColorChanger;
