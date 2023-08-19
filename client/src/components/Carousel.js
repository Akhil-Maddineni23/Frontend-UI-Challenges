import React , {useState} from 'react';
import '../styles/carousel.css';

import A1 from '../images/A1.JPG';
import A2 from '../images/A2.JPG';
import A3 from '../images/A3.JPG';
import A4 from '../images/A4.JPG';
import A5 from '../images/A5.JPG';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const Carousel = () => {
    const images = [ A1 , A2 , A3 , A4 , A5 ]
    const [currentIndex , setCurrentIndex ] = useState(0);
    const handlePrevImage = () => {
        if(currentIndex === 0){
            setCurrentIndex(images.length -1);
        }
        else{
            setCurrentIndex(currentIndex-1);
        }
    }
    const handleNextImage = () => {
        if(currentIndex === images.length -1){
            setCurrentIndex(0);
        }else{
            setCurrentIndex(currentIndex+1);
        }
    }
  return (
    <div className='main-container'>
        <div className='inner-div1'>
            <NavigateBeforeIcon style={{ fontSize: "50px" }} onClick = {handlePrevImage}/> 
            <img src={images[currentIndex]} alt="Akhil" />
            <NavigateNextIcon  style={{ fontSize: "50px"}} onClick = {handleNextImage} /> 
        </div>
        <div className='inner-div2'>
            {
                images.map((_ , index) => (
                    <div className='circle' key={index} style={{backgroundColor : index == currentIndex ? 'red' : 'yellow'}}></div>
                ))
            }
        </div>
    </div>
  )
}

