// src/components/ShopWBuddyWithFriends.jsx
import React from 'react';
import './css/CreateGroup.css';
//import CreateGroup from '../../pages/CreatePage/CreatePage';

const CreateGroup = () => {
  return (
    <div className="shopwbuddy-page">
      <header className="shopwbuddy-header">
        <img src="/path-to-your-logo.png" alt="Myntra Logo" className="myntra-logo" />
        <nav>
          <ul className="nav-links">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Studio</li>
          </ul>
        </nav>
        <div className="user-actions">
          <input type="text" placeholder="Search for products, brands and more" />
          <a href="/profile">Profile</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/bag">Bag</a>
          <a href="/group">Group</a>
        </div>
      </header>
      <main className="shopwbuddy-main">
        <div className="shopwbuddy-content">
          <h1>ShopWBuddy</h1>
          <p>Let's create a group now</p>
          <form className="group-form">
            <label htmlFor="group-name">Group Name:</label>
            <input type="text" id="group-name" name="group-name" placeholder="Enter group name" required />
            <button type="submit">Create Group</button>
          </form>
          <img src="/path-to-your-image.png" alt="Friends" className="friends-image" />
        </div>
        <div className="recommended-friends">
          <h2>Recommended friends</h2>
          <div className="friend">
            <img src="/path-to-friend-image.jpg" alt="Dhruvi Shah" />
            <div className="friend-info">
              <p>Dhruvi Shah</p>
              <button className="invite-button">Invite</button>
            </div>
          </div>
          <div className="friend">
            <img src="/path-to-friend-image.jpg" alt="Dhruvi Shah" />
            <div className="friend-info">
              <p>Dhruvi Shah</p>
              <button className="invite-button">Invite</button>
            </div>
          </div>
          <div className="friend">
            <img src="/path-to-friend-image.jpg" alt="Aarchi" />
            <div className="friend-info">
              <p>Aarchi</p>
              <button className="invited-button" disabled>Invited</button>
            </div>
          </div>
          <div className="friend">
            <img src="/path-to-friend-image.jpg" alt="Ayushka" />
            <div className="friend-info">
              <p>Ayushka</p>
              <button className="invited-button" disabled>Invited</button>
            </div>
          </div>
          <div className="friend">
            <img src="/path-to-friend-image.jpg" alt="Priyanshu" />
            <div className="friend-info">
              <p>Priyanshu</p>
              <button className="invited-button" disabled>Invited</button>
            </div>
          </div>
          <a href="/see-all" className="see-all">See all</a>
        </div>
      </main>
    </div>
  );
};

export default CreateGroup;
