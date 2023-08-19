import React, { useState, useRef, useEffect } from "react";
import "../styles/modal.css";

export const Modal = () => {
  /*
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  */

  useEffect(() => {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const myModal = document.getElementById('myModal');

    const openModal = (event) => {
      event.stopPropagation();
      myModal.style.display = 'block';
    };

    const closeModal = () => {
      myModal.style.display = 'none';
    };

    const handleOutsideClick = (event) => {
      //This checks if the clicked element (event.target) is a descendant of the modalDiv
      if (!myModal.contains(event.target)) {
        closeModal();
    }
  };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('click', handleOutsideClick);
   
    return () => {
        openBtn.removeEventListener('click', openModal);
        closeBtn.removeEventListener('click', closeModal);
        document.removeEventListener('click', handleOutsideClick);
    };
}, []);

  return (
    <div className="modal-conatiner">
      <button id="openBtn">Open Modal</button>

      <div className="modal" id="myModal">
        <div className="modal-content">
          <p>Akhil Maddineni</p>
          <p>Software Developer & Full-Stack Developer</p>
          <p>Email : akhil.maddineni23@gmail.com</p>
          <button id="closeBtn">Close Modal</button>
        </div>
      </div>

      <div>
        <p>Work Experince</p>
        <p>Projects</p>
        <p>Contact Me</p>
        <p>Extra-Circular Activities</p>
      </div>
    </div>
  );
};

