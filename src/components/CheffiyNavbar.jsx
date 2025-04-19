import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import '../index.css'; // Đảm bảo rằng bạn đang đi lên một cấp để đến thư mục src


const CheffiyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/avatar_small.png" alt="Cheffiy Logo" />
        </div>

        {/* Search bar */}
        <div className="navbar-search">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="What would you like to cook?"
              className="search-input"
            />
            <FiSearch className="search-icon" />
          </div>
        </div>

        {/* Navigation links */}
        <div className="navbar-links">
          <Link to="/what-to-cook">What to cook</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/ingredients">Ingredients</Link>
          <Link to="/occasions">Occasions</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Auth buttons */}
        <div className="navbar-auth">
          <button className="btn-login">Login</button>
          <button className="btn-subscribe">Subscribe</button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="navbar-mobile-links">
        <Link to="/what-to-cook">What to cook</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/occasions">Occasions</Link>
        <Link to="/about">About Us</Link>
      </div>
    </nav>
  );
};

export default CheffiyNavbar;
