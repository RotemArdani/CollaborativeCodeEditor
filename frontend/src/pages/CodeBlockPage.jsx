import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { updateRoom, setMentorId } from '../redux/roomSlice';
import MonacoEditor from '@monaco-editor/react';
import Button from '../components/ui/Button';
import '../styles/codeblock.css';

const socket = io(import.meta.env.REACT_APP_SOCKET_URL);

function CodeBlockPage() {
  const navigate = useNavigate();
  const codeBlock = useLoaderData();
  const dispatch = useDispatch();
  console.log("CodeBlock Data from page:", codeBlock);
  const [code, setCode] = useState(codeBlock.code);
  const [usersCount, setUsersCount] = useState(0);
  const solution = codeBlock.solution;
  const id = codeBlock._id;

  const [role, setUserRole] = useState();
  const [showPopup, setShowPopup] = useState(false);  
  const [popupMessage, setPopupMessage] = useState('');  

  // in case of unavailable room or mentor leaving
  const showPopupAndRedirect = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/lobby');  
    }, 1000); 
  };

  useEffect(() => {
    socket.emit('joinRoom', id);

    socket.on('roomNotAvailable', (message) => {
         showPopupAndRedirect(message);  
    });
  
    socket.on('mentorLeft', () => {
      showPopupAndRedirect('The mentor has left the room. Returning to lobby.');
    });
  
    socket.on('userRole', (role) => {
      setUserRole(role);
    });
  
    socket.on('codeUpdate', (newCode) => {
      setCode(newCode);
    });

    socket.on('mentorAssigned', (mentorId) => {
      dispatch(setMentorId(mentorId));
    });
  
    socket.on('updateRoomState', (roomState) => {
      dispatch(updateRoom(roomState));
      setUsersCount(roomState.studentsCount);
    });
  
    socket.on('userCountUpdate', (count) => {
      setUsersCount(count);
    });

  }, [id, navigate, dispatch]);
  

  const handleCodeChange = (newValue) => {
    setCode(newValue);
    socket.emit('codeUpdate', { roomId: id, newCode: newValue });
  };

  const isCorrectSolution = (code?.trim() || "") === (solution?.trim() || "");

  return (
    <div className="codeblock-container">
      <h1 className="codeblock-title">{codeBlock.title}</h1>
      <p className="user-count">Connected students: {usersCount}</p>

        {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
        )}

      <MonacoEditor
        className="monaco-editor"
        height="200px"
        language="javascript"
        value={code}
        onChange={handleCodeChange}
        options={{
          readOnly: role === 'mentor',
        }}
      />
  
      {isCorrectSolution && <p className="solution-smiley">😊</p>}
  
      <div className="actions">
        <Button onClick={() => {
          socket.emit('leaveRoom', id);
          navigate('/lobby');
        }}>Back to Lobby</Button>
      </div>

    </div>
  );
}

export default CodeBlockPage;

