import React, { useEffect, useState, useRef } from "react";
import "../styles/accordion.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const Accordion = () => {
  
  const dummyData = [
    {
      name: "Accordion1",
      content: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
        feugiat. Aliquam eget maximus est, id dignissim quam.`,
    },
    {
      name: "Accordion2",
      content: `This email shows up to 10 repositories that are affected, but there could be more vulnerabilities across your repositories.
         Always verify the validity and compatibility of suggestions with your codebase.
        `,
    },
    {
      name: "Accordion3",
      content: `Our hiring team is currently in the process of reviewing all applications. 
        The team will get in touch with you soon if they find your profile relevant for the role.`,
    },
  ];
  
  return (
    <div className="main-accordion-container">
      {dummyData.map((data, index) => (
        <DisplayAccordion  key={index} data = {data}/>
      ))}
    </div>
  );
};

export const DisplayAccordion = ({ data }) => {
    const accordionRef = useRef();
    const [openContent, setOpenContent] = useState(false);
    const handleExpand = () => setOpenContent(!openContent);
  
    useEffect(() => {
      const handleDivClick = (event) => {
        if (accordionRef.current && accordionRef.current.contains(event.target)) {
          handleExpand();
        }
      };
  
      window.addEventListener("mousedown", handleDivClick);
  
      return () => {
        window.removeEventListener("mousedown", handleDivClick);
      };
    }, [openContent]);
  
    return (
      <div className="accordion">
        <div className="inner-content" ref={accordionRef}>
          <span>{data.name}</span>
          {openContent ? (
            <ExpandLessIcon onClick={handleExpand} />
          ) : (
            <ExpandMoreIcon onClick={handleExpand} />
          )}
        </div>
        {openContent && (
          <div className="hidden-content">
            <p>{data.content}</p>
          </div>
        )}
      </div>
    );
  };
  