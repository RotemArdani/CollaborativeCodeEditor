# README for Frontend

## Project Overview

The frontend of this project is a collaborative code editing application built using React with Redux for state management and Socket.io for real-time synchronization. The UI is designed to provide an intuitive and seamless experience for mentors and students to interact with code in real-time.

## Technologies Used

React - Component-based UI framework

Redux - State management for handling roles and real-time updates

Monaco Editor - Code editor with syntax highlighting

React Router - Client-side routing for navigation

CSS Modules - Styling and layout

## Folder Structure

frontend/  
│-- src/  
│   ├── components/&nbsp;&nbsp;&nbsp;    # Reusable UI components (e.g., Button, AppLayuot)  
│   ├── libs/&nbsp;&nbsp;&nbsp;          # AppRouter  
│   ├── pages/&nbsp;&nbsp;&nbsp;         # Main application pages (Lobby, CodeBlockPage)  
│   ├── redux/&nbsp;&nbsp;&nbsp;         # State management (roomSlice, userSlice)  
│   ├── utils/&nbsp;&nbsp;&nbsp;         # Helper functions and configurations  
│   ├── styles/&nbsp;&nbsp;&nbsp;        # CSS styling files  
│   ├── App.jsx&nbsp;&nbsp;&nbsp;        # Main application entry point  
│   ├── index.jsx&nbsp;&nbsp;&nbsp;      # React DOM render file  
│-- public/&nbsp;&nbsp;&nbsp;            # Static assets   
│-- .env&nbsp;&nbsp;&nbsp;               # Environment variables  
│-- package.json&nbsp;&nbsp;&nbsp;       # Dependencies and scripts  

## Installation & Setup

To set up and run the frontend locally:  

cd frontend  
npm install    
npm run dev      

Make sure to set up the .env file with VITE_SOCKET_URL and VITE_API_URL pointing to the backend server.

## Key Features

Role-based access (Mentor vs Student)  

Real-time collaborative editing  

Automatic disconnection handling  

Syntax highlighting & error handling  

## Deployment

For deployment, consider using Vercel or Netlify:  

npm run build  

This will generate a production-ready build inside the /dist folder.