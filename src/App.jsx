// https://react-icons.github.io/react-icons/icons?name=fa
// https://www.npmjs.com/package/react-icons
// FA6 werkt niet met importeren.
// Styling react-icons. https://dev.to/ebereplenty/react-icons-tutorial-all-you-need-to-know-524

import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import './App.css';
import SearchBar from './components/searchbar/SearchBar';

export default function App() {
  return (
    <>
      <SearchBar />
      <FaHeart className="fa-heart-icon" />
      <FaRegHeart className="fa-reg-heart-icon" />
      <FaEnvelope className="fa-envelope-icon" />
      <FaRegEnvelope className="fa-reg-envelope-icon" />
      <FaSearch className="fa-search-icon" />
      <FaChevronLeft className="fa-chevron-left-icon" />
      <FaChevronDown className="fa-chevron-down-icon" />
      <FaPinterestSquare className="fa-pinterest-square-icon" />
      <FaFacebookSquare className="fa-facebook-square-icon" />
      <FaLinkedin className="fa-linkedin-icon" />
      <FaTwitter className="fa-twitter-icon" />
      <FaComment className="fa-comment-icon" />
      <FaUser className="fa-user-icon" />
      <FaLock className="fa-lock-icon" />
      <FaInfoCircle className="fa-info-circle-icon" />
      <FaRegArrowAltCircleRight className="fa-reg-arrow-circle-right-icon" />
      <FaExclamationTriangle className="fa-exclamation-triangle-icon" />
    </>
  );
}
