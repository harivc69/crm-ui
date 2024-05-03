// AddWidget.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { autocompleteClasses } from '@mui/material';

function AddWidget({ onClose, backgroundColor }) {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      style={{
        width: 320,
        height: autocompleteClasses,
        padding: 18,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        boxShadow: '0 0px 9px rgba(0, 0, 0, 0.9)',
        background: backgroundColor, // Use backgroundColor prop here
        marginLeft:'36%',
        marginTop:'-10%'
      }}
    >
      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', marginTop: '10%' }}>
        <img src="path_to_image_before_text_field" alt="" style={{ marginRight: 7, height: 20 }} />
        <span style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>NEW WIDGETS</span>
      </div>

      <div style={{ marginBottom: 16, marginTop:'10%' }}>
        <TextField
          label="Enter Widget Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 16 }}
          InputProps={{
            sx: {
              background: 'white',
              borderRadius: 2,
            },
          }}
        />
        <Select
          value={selectedOption}
          onChange={handleChange}
          displayEmpty
          fullWidth
          variant="outlined"
          style={{ marginTop: 5, backgroundColor: '#fff' }}
          sx={{
            background: 'white',
            borderRadius: 2,
          }}
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="Option 1">
            <img src="path_to_image_1" alt="Option 1" style={{ marginRight: 8, height: 20 }} />
          </MenuItem>
          <MenuItem value="Option 2">
            <img src="path_to_image_2" alt="Option 2" style={{ marginRight: 8, height: 20 }} />
          </MenuItem>
          <MenuItem value="Option 3">
            <img src="path_to_image_3" alt="Option 3" style={{ marginRight: 8, height: 20 }} />
          </MenuItem>
        </Select>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
          <Button variant="contained" color="primary" onClick={onClose}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddWidget;
