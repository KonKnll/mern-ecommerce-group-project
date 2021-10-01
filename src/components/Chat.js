import TextField from '@material-ui/core/TextField';
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

function Chat() {
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:5000');
    socketRef.current.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit('message', { name, message });
    e.preventDefault();
    setState({ message: '', name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="chat-card bg-white">
      <form onSubmit={onMessageSubmit} className="chat-form">
        <h2 className="mb-4">Messenger</h2>
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
            autoComplete="off"
          />
        </div>
        <button className="btn btn-success">Send Message</button>
      </form>
      <div className="render-chat">
        <h2 className="mb-4">Log</h2>
        {renderChat()}
      </div>
    </div>
  );
}

export default Chat;
