import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import config from '../../config/config';

const SubMenu = () => {
  const [subMenuData, setSubMenuData] = useState([]);
  const [selectedOptionIndex, ] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`${config.apiUrl}/menudata`)
      .then((response) => {
        console.log('Menu data received:', response.data);
        const menuData = response.data[0];
        if (menuData && menuData.menu && menuData.menu.submenu) {
          setSubMenuData(menuData.menu.submenu);
        }
      })
      .catch((error) => {
        console.error('Error fetching menu data:', error);
      });
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Dropdown 1:', dropdown1Value);
    console.log('Dropdown 2:', dropdown2Value);
    console.log('Description:', description);
    // You can add further logic here, like submitting data or closing the popup
    setIsOpen(false);
  };

  return(
    <div>
    
        <div style={{ width: 'fit-content', textAlign: 'center', display: 'flex', background: 'white', borderRadius: '10px', margin: '15px 0 10px 50px' }}>
          {Object.entries(subMenuData).map(([key, menuItem], index) => (
            <div style={{ width: 'fit-content' }} key={key}>
              <div
                style={{
                  display: 'flex',
                  background: hoveredIndex === index ? '#00AEF8' : 'transparent',
                  borderRadius: '10px',
                  paddingRight: hoveredIndex === index ? '10px' : '0',
                  fontWeight: 'bold'
                }}
                onClick={index === 1 ? () => setIsOpen(true) : undefined}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Avatar
                  src={index === selectedOptionIndex ? menuItem.selected_icon : menuItem.icon}
                  alt={menuItem.title}
                  sx={{
                    width: 30,
                    height: 30,
                    cursor: 'pointer',
                    borderRadius: '0',
                    margin: '10px',
                    transition: 'transform 0.3s ease',
                    transform: hoveredIndex === index || selectedOptionIndex === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <p
                  sx={{
                    transform: 'translateX(-50%)',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '5px',
                    color:'black'
                  }}
                >
                  {hoveredIndex === index || index === selectedOptionIndex ? menuItem.title : ''}
                </p>
              </div>
            </div>
          ))}
        </div>

      {/* MUI Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} style={{ boxShadow: '10px 10px 10px 10px white' }}>
        <DialogTitle>Popup Title 1</DialogTitle>

        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Dropdown 1</InputLabel>
            <Select value={dropdown1Value} onChange={(e) => setDropdown1Value(e.target.value)}>
              {/* Dropdown 1 options */}
              <MenuItem value={'option1'}>Option 1</MenuItem>
              <MenuItem value={'option2'}>Option 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Dropdown 2</InputLabel>
            <Select value={dropdown2Value} onChange={(e) => setDropdown2Value(e.target.value)}>
              {/* Dropdown 2 options */}
              <MenuItem value={'option1'}>Option 1</MenuItem>
              <MenuItem value={'option2'}>Option 2</MenuItem>
            </Select>
          </FormControl>
          <TextField
            multiline
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            placeholder="Enter description..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" style={{ background: '#00AEF8', opacity: '100%', color: 'white', fontWeight: '600', borderRadius: '5px' }}>Submit</Button>
          <Button onClick={() => setIsOpen(false)} style={{ background: 'red', opacity: '100%', color: 'white', fontWeight: '600', borderRadius: '5px' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubMenu;