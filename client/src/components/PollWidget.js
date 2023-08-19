import React , {useState , useEffect} from 'react';
import '../styles/poll.css';

export const PollWidget = () => {
    const [counters , setCounters] = useState([15, 10 , 25, 50]);
    const [percentages , setPercentages] = useState([15 , 10 , 25 , 50]);

    const calculatePercentages = (newCounters) =>{
        const totalSum = newCounters.reduce((sum, counter) => sum + counter, 0);
        const newPercentages = newCounters.map(counter => Math.round((counter / totalSum) * 100));
        setPercentages(newPercentages);
    }

    const handleClick = (index) => {
        const updatedCounters = [...counters];
        updatedCounters[index] += 10;
        setCounters(updatedCounters);
        calculatePercentages(updatedCounters)
    };
    
  return (
    <div className='main-poll-container'>
        <div className='heading'>
            <span>What's your Favorite Programming Language ?</span>
        </div>
        <div className='options' onClick={() => handleClick(0)} >
            <div className="fill-bar" style={{ width: `${percentages[0]}%` }}></div>
            <span className='option-text'>C</span>
            <span className='option-text'>{percentages[0]}%</span>
        </div>
        <div className='options' onClick={() => handleClick(1)}>
            <div className="fill-bar" style={{ width: `${percentages[1]}%` }}></div>
            <span className='option-text'>C++</span>
            <span className='option-text'>{percentages[1]}%</span>
        </div>
        <div className='options' onClick={() => handleClick(2)}>
            <div className="fill-bar" style={{ width: `${percentages[2]}%` }}></div>
            <span className='option-text'>Python</span>
            <span className='option-text'>{percentages[2]}%</span>
        </div>
        <div className='options' onClick={() => handleClick(3)}>
            <div className="fill-bar" style={{ width: `${percentages[3]}%` }}></div>
            <span className='option-text'>JavaScript</span>
            <span className='option-text'>{percentages[3]}%</span>
        </div>
    </div>
  )
}

