import robotProfileImage from '../assets/robot.png'
import userProfileImage from '../assets/user.png'
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {

  return (
    <div className={
      sender === 'user' 
      ? 'chat-message-user' 
      : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img className="chat-message-profile" src={robotProfileImage}/> 
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img className="chat-message-profile" src={userProfileImage  }/>
      )}
    </div>
  );
}