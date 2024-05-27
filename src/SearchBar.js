import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = async () => {
    const appId = 'ec1ae218'; // Zamień na swoje APP_ID
    const appKey = '2bac3e0970115827729e376eace78a2d'; // Zamień na swoje APP_KEY
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${searchQuery}&type=public&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    console.log(data);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin: '20px auto', 
      }}
    >
      <TextField
        fullWidth
        label="Wyszukaj przepisy"
        id="fullWidth"
        value={searchQuery}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            backgroundColor: 'red',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#f0f0f0', 
          },
        }}
      />
    </Box>
  );
}
