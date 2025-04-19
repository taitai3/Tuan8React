import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
<footer class="footer">
  <div class="footer-container">
    <div class="footer-columns">
      <div class="footer-about">
        <div>
          <h2 class="footer-title">About Us</h2>
          <p class="footer-text">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div class="newsletter">
            <div class="newsletter-form">
              <input type="email" placeholder="Enter your email" class="newsletter-input" />
              <button class="newsletter-button">Send</button>
            </div>
          </div>
        </div>
        <div class="footer-logo">
          <img src="/avatar_small.png" alt="Company Logo" class="logo-img" />
        </div>
      </div>

      <div class="footer-links">
        <div>
          <h3 class="footer-subtitle">Learn More</h3>
          <ul class="link-list">
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 class="footer-subtitle">Shop</h3>
          <ul class="link-list">
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-links">
        <h3 class="footer-subtitle">Recipes</h3>
        <ul class="link-list">
          <li><a href="#">Dinner</a></li>
          <li><a href="#">Healthy</a></li>
          <li><a href="#">Vegetarian</a></li>
          <li><a href="#">What to Cook This Week</a></li>
          <li><a href="#">Posts</a></li>
          <li><a href="#">Vegan</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright">© 2023 Charity Company. All rights reserved.</div>
      <div class="footer-policies">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Send Us Feedback</a>
      </div>
      <div class="footer-social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-pinterest"></i></a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;