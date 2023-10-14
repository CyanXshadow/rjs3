import React, { useState } from 'react';
import "./Task3CSS.css";

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
    setIsColorListVisible(false);
  };

  const buttonStyling = {
    backgroundColor: selectedColor || 'initial',
    cursor: 'pointer'
  };

  return (
    <div class="center">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyling} onClick={toggleColorList}>Pick a color</button>
      </div>
      {isColorListVisible && (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {colors.map((color, index) => (
              <li key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: color,
                    cursor: 'pointer'
                  }}
                  onClick={() => handleColorClick(color)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
