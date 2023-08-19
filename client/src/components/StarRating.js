import React , { useState, useEffect , useRef } from 'react'
import '../styles/star-rating.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
  },
});


export const StarRating = () => {

  const [ rating , setRating ] = useState(1);
  const ratingRef = useRef();

  const handleStarClick = (clickedIndex) => {
    setRating(clickedIndex);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ratingRef.current && !ratingRef.current.contains(event.target)) {
        setRating(1);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='star-rating' ref={ratingRef}>
        {
          [1,2,3,4,5].map((index) => (
            <IconButton 
              key={index}
              onClick = {() => handleStarClick(index)}
              color={index <= rating ? 'primary' : 'inherit'}
            >
            {index <= rating ? <StarIcon style={{ fontSize: "70px"}}/> : <StarBorderIcon style={{ fontSize: "70px"}}/>}
            </IconButton>
          ))
        }
        <span>Rating = {rating}</span>  
      </div>
    </ThemeProvider>
  )
}

