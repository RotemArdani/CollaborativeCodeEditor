# Project: Collaborative Code Editor

## Overview

This project is a real-time collaborative code editor designed for mentors and students to interact seamlessly. The system allows a single mentor to oversee the code edits of multiple students, with strict role-based permissions and real-time synchronization.

## Technologies Used

### Frontend:

React – Component-based UI development

Redux – State management

Monaco Editor – Code editor with syntax highlighting

React Router – Client-side routing

CSS Modules – Styling

### Backend:

Node.js & Express.js – Web server & API

Socket.io – Real-time bidirectional communication

MongoDB & Mongoose – NoSQL database for storing code blocks

dotenv – Environment variable management

## Project Structure  

project-root/  
│-- frontend/       
│-- backend/         
│-- README.md         

you can see more detailes in each folder README.

## Installation & Setup  

### Prerequisites:  

Node.js (v16+)  

MongoDB  

npm / yarn  

### Running the Project Locally:
#### Clone the repository:  

git clone https://github.com/CollaborativeCodeEditor.git
cd CollaborativeCodeEditor

#### Setup the Backend:  

cd backend  
npm install    
cp .env.example .env    
npm run dev    

#### Setup the Frontend:  

cd frontend  
npm install  
cp .env.example .env  
npm run dev  

## Deployment

#### For deployment, consider:  

Frontend: Vercel / Netlify  

Backend: Railway / Render / Heroku  

#### To build for production:  

npm run build

