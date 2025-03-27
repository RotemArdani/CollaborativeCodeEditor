# README for Backend

## Project Overview

The backend is a Node.js application built with Express.js and Socket.io for real-time communication. It manages user connections, handles room allocations, and synchronizes code updates among participants.

## Technologies Used

Node.js & Express.js - Web framework for API and socket communication

Socket.io - Real-time bidirectional event-based communication

MongoDB & Mongoose - Database for storing code blocks

dotenv - Environment variable management

## Folder Structure

backend/  
│-- controllers/     - Business logic for handling requests  
│-- models/          - Mongoose models (CodeBlock)  
│-- routes/          - Express API endpoints  
│-- sockets/         - WebSocket event handling (SocketController)  
│-- utils/           - Helper functions   
│-- server.js        - Express app entry point  
│-- package.json     - Dependencies and scripts  
│-- .env             - Environment variables  

## Installation & Setup

To set up and run the backend locally:  

cd backend  
npm install      
npm run dev     

Ensure that you have a .env file with the following variables:

PORT=5000  
MONGO_URI=mongodb+srv://your-db-url

## API Endpoints

Method - GET, Endpoint - /api/codeblocks, Description - Fetch all code blocks  
Method - GET, Endpoint - /api/codeblocks/:id, Description - Fetch spesific code block



## Deployment

For deployment, consider using Railway, Render, or Heroku.

npm run build  
npm start

Ensure that your MongoDB database is accessible in production.