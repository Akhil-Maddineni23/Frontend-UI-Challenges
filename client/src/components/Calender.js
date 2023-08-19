import React, { useState, useEffect } from "react";
import "../styles/calender.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const Calender = () => {
  const currentDate = new Date();
  const currdayOfMonth = currentDate.getDate();
  const currmonth = currentDate.getMonth() + 1; 
  const curryear = currentDate.getFullYear();

  const [day, setDay] = useState(currdayOfMonth);
  const [monthIndex, setMonthIndex] = useState(currmonth);
  const [year, setYear] = useState(curryear);
  const [monthsExpand, setMonthsExpand] = useState(false);
  const [yearsExpand , setYearsExpand] = useState(false);
  const [monthdates, setMonthDates] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = []
  for (let i = 2000; i <= 2025; i++) {
    years.push(i);
  }

  const getMonthInfo = (month, year) => {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
  
    const numberOfDays = lastDay.getDate();
    const weekdayOfFirstDay = firstDay.getDay();

    const arr = []
    for(let i=0; i<weekdayOfFirstDay; i++){
      arr.push(null);
    }
    for(let i=1; i<=numberOfDays ; i++){
      arr.push(i)
    }
    setMonthDates(arr);
  }

  useEffect(() => {
    getMonthInfo(monthIndex , year);
  }, [])

  const handleExpandMonths = () => {
    setMonthsExpand(!monthsExpand);
  };

  const handleExpandYears = () => {
    setYearsExpand(!yearsExpand);
  }

  const handleSelectMonth = (index) => {
    setMonthIndex(index);
    setMonthsExpand(!monthsExpand);
    getMonthInfo(index , year);
  }

  const handleSelectYear = (year) =>{
    setYear(year);
    setYearsExpand(!yearsExpand);
    getMonthInfo(monthIndex , year);
  }

  const handleClickDay = (index) => {
    setDay(index);
  };

  return (
    <div className="main-calender-container">
      <div className="selected-date">
        <span>
          SELECT DATE -{" "}
          <span style={{ fontWeight: "bold" }}>
            {day}/{monthIndex}/{year}
          </span>
        </span>
      </div>
      <div className="select-year-month">
        <div className="year">
            <div className="outer-year">
            <span>{year}</span>
            {
                yearsExpand ? <ExpandLessIcon onClick={handleExpandYears} /> : <ExpandMoreIcon onClick={handleExpandYears} />
            }
            <div>
                {   yearsExpand && (
                    <ul className="years-list">
                        {years.map((year, index) => (
                            <div key={index} className="inner-year" onClick={() => handleSelectYear(year)}> {year}
                            </div>
                        ))}
                    </ul>
                )}
            </div>
            
        </div>  
        </div>
        <div className="month">
         <div className="outer-month">
         <span>{months[monthIndex-1]}</span>
          {
            monthsExpand ? <ExpandLessIcon onClick={handleExpandMonths} /> : <ExpandMoreIcon onClick={handleExpandMonths} />
          }  
         </div>
            {monthsExpand && (
                <ul className="months-list">
                    {months.map((month, index) => (
                    <div key={index} className="inner-month" onClick={() => handleSelectMonth(index+1)}> {month}
                    </div>
                    ))}
                </ul>
            )}
        </div>
        
      </div>
      <div className="date-grid">
        {["S", "M", "T", "W", "T", "F", "S"].map((item, index) => (
          <div className="date-cell" id={index} key={index}>
            <span>{item}</span>
          </div>
        ))}
        {monthdates && monthdates.map((date , index) => (
          <div className="date-cell" id={index} key={index}>
            { date && (
              <>
              {
              day === date ? ( <span onClick={() => handleClickDay(date)} style={{ backgroundColor: "red" }}> {date} </span>) : 
              ( <span onClick={() => handleClickDay(date)}>{date}</span>)
              }
              </>
            )}
          </div>
        ))
        }
      </div>
    </div>
  );
};
