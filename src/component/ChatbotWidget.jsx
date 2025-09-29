import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 8000); // Hide prompt after 8s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      {showPrompt && (
        <div style={{
          backgroundColor: '#003366',
          color: 'white',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          marginBottom: '10px',
          fontSize: '0.9rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            maxWidth: '350px',
            width: '100%',
            boxSizing: 'border-box'

        }}>
          💬 Need help? Chat with SoftcodeBot!
        </div>
      )}

      {isOpen && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          style={{ width: '100%' }}
        />

      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#003366',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}
        title={isOpen ? 'Close Chat' : 'Open Chat'}
      >
        💬
      </button>
    </div>
  );
};

export default ChatbotWidget;