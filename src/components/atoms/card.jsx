import React, { useState } from 'react';

const CustomizableCard = ({ onAddWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleAddWidget = () => {
    if (widgetName.trim() !== '' && selectedIcon) {
      const newWidget = {
        name: widgetName,
        icon: selectedIcon,
        size: { width: 3, height: 2 }, // Adjusted size to 3*2
      };
      onAddWidget(newWidget);
      // Reset input fields
      setWidgetName('');
      setSelectedIcon(null);
    }
  };
  

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3>Create Widget</h3>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        style={{ marginBottom: '10px', width: '100%', boxSizing: 'border-box', padding: '8px', fontSize: '16px' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Render icons */}
        {[...Array(10).keys()].map((index) => (
          <img
            key={index}
            src={`icon${index + 1}.png`} // Assuming icon images are named icon1.png, icon2.png, ...
            alt={`Icon ${index}`}
            style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedIcon(`icon${index + 1}.png`)} // Assuming icon URLs are structured like this
          />
        ))}
      </div>
      <button onClick={handleAddWidget} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>Add Widget</button>
    </div>
  );
};

export default CustomizableCard;
