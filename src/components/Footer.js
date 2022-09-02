import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-newsletter">
        <div className="footer-newsletter-info">
          Get notified when something happens!
        </div>
        <div className="footer-newsletter-info-2">
          Straight to your mail box!
        </div>
        <div className="footer-newsletter-email-input-container">
          <input type="text" className="footer-newsletter-email-input" />
          <button className="footer-newsletter-email-button">SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-columns-container">
        <div className="footer-columns-info">
          <div className="footer-columns-info-title">INFO</div>
          <Link to={"/about"} className="about-Link">
            <div className="footer-columns-info-item">About Us</div>
          </Link>
          <div className="footer-columns-info-item">FAQ</div>
          <div className="footer-columns-info-item">Return Policy</div>
        </div>
        <div className="footer-columns-shop">
          <div className="footer-columns-shop-title">SHOP</div>
          <Link to={"/shop/clothes"} className="about-Link">
            <div className="footer-columns-shop-item">Clothes</div>
          </Link>
          <Link to={"/shop/figures"} className="about-Link">
            <div className="footer-columns-shop-item">Figures</div>
          </Link>
          <Link to={"/shop/mousePads"} className="about-Link">
            <div className="footer-columns-shop-item">Mouse Pads</div>
          </Link>
          <Link to={"/shop/posters"} className="about-Link">
            <div className="footer-columns-shop-item">Posters</div>
          </Link>
          <Link to={"/shop/stickers"} className="about-Link">
            <div className="footer-columns-shop-item">Stickers</div>
          </Link>
        </div>
        <div className="footer-columns-contact">
          <div className="footer-columns-contact-item-title">CONTACT</div>
          <div className="footer-columns-contact-item">Email</div>
          <div className="footer-columns-contact-item"><a href="https://github.com/NenoPr" className="about-Link">GitHub</a></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
