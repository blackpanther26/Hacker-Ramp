// src/components/ShopWBuddy.js
import React from 'react';
import './css/GroupPage.css';

const ShopWBuddy = () => {
  return (
    <div className="shopwbuddy-container">
      <header className="header">
        <div className="logo">
          <img src="path_to_logo" alt="Myntra Logo" />
        </div>
        <nav className="nav">
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/home-living">Home & Living</a>
          <a href="/beauty">Beauty</a>
          <a href="/studio">Studio</a>
        </nav>
        <div className="profile">
          <a href="/profile">Profile</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/bag">Bag</a>
          <a href="/group">Group</a>
        </div>
      </header>
      <div className="content">
        <h1>ShopWBuddy</h1>
        <p>Not your usual collaboration feature</p>
        <div className="image-container">
          <img src="path_to_cart_image" alt="Shopping Cart" />
        </div>
        <div className="buttons">
          <a href="/create-group" className="button create-group">Create a group</a>
          <span>OR</span>
          <a href="/join-group" className="button join-group">Join a group</a>
        </div>
      </div>
    </div>
  );
};

export default ShopWBuddy;
