import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <HomeIcon style={{ fontSize: "25px" }} />
      </Link>

      <Link to="/pagination" style={{ textDecoration: "none" }}>
        Pagination
      </Link>

      <Link to="/infinite-scroll" style={{ textDecoration: "none" }}>
        Infinite Scroll
      </Link>

      <Link to="/star-rating" style={{ textDecoration: "none" }}>
        Star Rating
      </Link>

      <Link to="/modal" style={{ textDecoration: "none" }}>
        Modal
      </Link>

      <Link to="/accordion" style={{ textDecoration: "none" }}>
        Accordion
      </Link>

      <Link to="/carousel" style={{ textDecoration: "none" }}>
        Carousel
      </Link>

      <Link to="/tictactoe" style={{ textDecoration: "none" }}>
        Tic-Tac-Toe
      </Link>

      <Link to="/analog-clock" style={{ textDecoration: "none" }}>
        Analog-Clock
      </Link>

      <Link to="/poll-widget" style={{ textDecoration: "none" }}>
        Poll Widget
      </Link>

      <Link to="/calender" style={{ textDecoration: "none" }}>
        Calender
      </Link>

      <Link to="/file-explorer" style={{ textDecoration: "none" }}>
        File Explorer
      </Link>

    </div>
  );
};
