import React, { useEffect, useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '../../config/config';
import axios from 'axios';

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuItems, setMenuItems] = useState([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  useEffect(() => {
    axios.get(`${config.apiUrl}/menudata`)
      .then(response => {
        const menuData = response.data[0];
        if (menuData && menuData.menu && menuData.menu.sidemenu) {
          const mappedMenuItems = Object.entries(menuData.menu.sidemenu).map(([key, menuItem]) => ({
            ...menuItem,
            path: `/${key}`
          }));
          setMenuItems(mappedMenuItems);

          const selectedIndex = mappedMenuItems.findIndex(item => item.path === location.pathname);
          setSelectedOptionIndex(selectedIndex);
        }
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }, [location.pathname]);

  const handleOptionClick = (path, index) => {
    setSelectedOptionIndex(index);
    navigate(path);
  };

  return (
    <div style={{ width: 'fit-content', textAlign: 'center', margin: 'auto' }}>
      {menuItems.map((menuItem, index) => {
        const isSelected = selectedOptionIndex === index || (location.pathname === "/" && index === 0);
        return (
          <div
            key={menuItem.title}
            style={{
              display: 'block',
              textAlign: 'center',
              gap: '50px',
              marginTop: '70px',
              position: 'relative',
              transition: 'transform 0.3s ease',
              transform: isSelected ? 'scale(1.1)' : 'scale(1)',
            }}
            onClick={() => handleOptionClick(menuItem.path, index)}
           
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = isSelected ? 'scale(1.1)' : 'scale(1)'}
          >
            <Avatar
              src={isSelected ? menuItem.selected_icon : menuItem.icon}
              alt={menuItem.title}
              sx={{
                width: 30,
                height: 30,
                cursor: 'pointer',
                borderRadius: '0',
                margin: '10px',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: isSelected ? '#00AEF8' : '#000000',
                transition: 'color 0.3s ease',
              }}
            >
              {menuItem.title}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default SideMenu;