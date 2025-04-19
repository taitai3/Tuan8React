import React from 'react';
import './Header.css';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>

      <div className="content-box">
        <div className="label">Recipe of the Day</div>
        <h1 className="title">Salad Caprese</h1>
        <p className="description">
          Classic Italian Salad Caprese—ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>
        <button className="cta-button">
          View now <FaArrowRight />
        </button>
      </div>
    </header>
  );
};

export default Header;
