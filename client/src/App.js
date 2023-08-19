import './App.css';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Pagination } from './components/Pagination';
import { InfiniteScroll } from './components/InfiniteScroll';
import { StarRating } from './components/StarRating';
import { Modal } from './components/Modal';
import { Accordion } from './components/Accordion';
import { Carousel } from './components/Carousel';
import { TicTacToe } from './components/TicTacToe';
import { AnalogClock } from './components/AnalogClock';
import { PollWidget } from './components/PollWidget';
import { Calender } from './components/Calender';
import { FileExplorer } from './components/FileExplorer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagination" element = {<Pagination />}  />
            <Route path="/infinite-scroll" element = {<InfiniteScroll />}  />
            <Route path="/star-rating" element = {<StarRating />}  />
            <Route path="/modal" element = {<Modal />}  />
            <Route path="/accordion" element = {<Accordion />}  />
            <Route path="/carousel" element = {<Carousel />}  />
            <Route path="/tictactoe" element = {<TicTacToe />}  />
            <Route path="/analog-clock" element = {<AnalogClock />}  />
            <Route path="/poll-widget" element = {<PollWidget />}  />
            <Route path="/calender" element = {<Calender />}  />
            <Route path="/file-explorer" element = {<FileExplorer />}  />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
