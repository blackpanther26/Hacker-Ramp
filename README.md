# 🛍️ Social Shopping Integration

## ❓ Problem Statement 

Integrate social media functionalities and user-generated content, such as influencer collaborations, customer reviews, and shoppable posts, to create an interactive and immersive shopping experience that resonates with fast fashion enthusiasts. The goal is to position Myntra as the go-to destination, driving customer growth and conversion.

## 🌟 Solution 

### Follow Requests and Activity Feed
- **Send and accept follow requests from friends.**
- **View friends' purchases on a dedicated page.**
- **Get follow suggestions based on mutual friends and fashion choices.**

### Group Formation & Shared Wishlists
- **Facilitate collaborative shopping experiences.**
- **Streamline the gifting process with personalized suggestions in groups.**
- **Easily manage shared wishlists.**

### AI-Powered Outfit Coordination
- **Enhance shopping for group events with coordinated outfit suggestions.**

### Group Deals Notifications
- **Notify users of group discounts and events like birthdays.**

## 🤖 Tech Stack

- **Frontend**: React, Vite, Chakra UI
- **Backend**: Firebase (Authentication, Firestore, Cloud Functions)

## 💡 Features

### User Interactions
- **Send and Accept Follow Requests from Friends**
- **Notifications for Group Deals and Events (e.g., Birthdays)**
- **Outfit Coordination**
- **Group Formation and Shared Wishlists**

## 🔄 Project Flow

![Untitled diagram-2024-07-15-140953](https://github.com/user-attachments/assets/258e3d9a-e881-4c11-ba5c-130b937434d8)

### 1. Send and Accept Follow Requests from Friends
- **Database Structure**: Users table in Firestore stores UIDs of followers and following in arrays.
- **Friend Suggestions**: Implemented using Firestore queries based on mutual friends and fashion choices.
- **Authentication**: Firebase Authentication ensures secure handling of user credentials.
- **UI Component**: React component displaying suggested friends based on mutual friends array.

### 2. Get Notifications Regarding Group Deals and Events
- **Event Data Collection**: Collect user event data (birthdays, anniversaries) via Firestore.
- **Database Structure**: Store event data in a dedicated field within the users' Firestore document.
- **Notification System**: Firebase Cloud Functions to trigger notifications on event dates.
- **UI Component**: Notification component in React to display alerts.

### 3. Outfit Coordination
- **Data Generation**: Synthesize a dataset for outfit recommendations.
- **Preprocessing**: Clean and preprocess the data for training.
- **Machine Learning**: Train a Random Forest model using Python or a relevant ML service.
- **Integration**: Deploy the model and integrate it with the backend using Firebase Cloud Functions.
- **UI Component**: React component to display outfit recommendations based on input parameters (number of members, gender, color preferences, etc.).

### 4. Group Formation and Shared Wishlist
- **Group Creation**: Enable users to send group formation requests via Firestore transactions.
- **Database Structure**: Store group data and shared wishlist items in a dedicated Firestore collection.
- **UI Component**: React components to manage group members and display shared wishlists.