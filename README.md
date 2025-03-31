# Project: Collaborative Code Editor

## Overview

Hi (: this project is a real-time collaborative code editor designed for mentors and students to interact seamlessly. The system allows a single mentor to oversee the code edits of multiple students, with strict role-based permissions and real-time synchronization.

## Future Optimizations
if had more free time I would:
- Persist mentor id across sessions using a database or localStorag (so mentor will be save even after reload/diconnect).

- Enhance UI interactivity for a smoother user experience.

- Auto-redirect users to an available room instead of the lobby.

## Technologies Used

### Frontend:
Netlify - deployment

VITE

React – Component-based UI development

Redux – State management

Monaco Editor – Code editor with syntax highlighting

React Router – Client-side routing

CSS Modules – Styling

### Backend:
Render - deployment

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

#### Update environment variables according to your needs:  
For example:  
for .env frontend:  
VITE_SOCKET_URL=http://localhost:5000  
VITE_API_URL=http://localhost:5000    

for .env backend:  
PORT=5000  
FRONTEND_URL=http://localhost:5173  
MONGO_DB_CONNECTION_STRING=your mongodb string  

#### Setup the Backend:  

cd backend  
npm install    
npm run dev    

#### Setup the Frontend:  

cd frontend  
npm install  
npm run dev  

Don't forget to update environment variables according to your needs.  

## Deployment

#### For deployment, consider:  

Frontend: Vercel / Netlify  

Backend: Railway / Render / Heroku  

#### To build for production:  

npm run build

