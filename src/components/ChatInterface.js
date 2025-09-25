import React, { useState, useRef, useEffect } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ currentChat, onAddMessage, isSidebarOpen }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    onAddMessage(userMessage);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: `I understand you're asking about "${inputValue}". This is a simulated response from FloatChat. In a real implementation, this would connect to an AI service to provide intelligent responses.`,
        sender: 'bot',
        timestamp: new Date()
      };
      onAddMessage(botMessage);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  return (
    <div className={`chat-interface ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {!currentChat ? (
        <div className="welcome-screen">
          <div className="welcome-content">
            <div className="welcome-icon">🤖</div>
            <h1>How can I help you?</h1>
            <p>Start a new conversation or select a chat from the sidebar</p>
          </div>
        </div>
      ) : (
        <>
          <div className="messages-container">
            <div className="messages">
              {currentChat.messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-avatar">
                    {message.sender === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                    <div className="message-time">
                       {message.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="message bot">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="input-container">
            <form onSubmit={handleSubmit} className="input-form">
              <div className="input-wrapper">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Message FloatChat"
                  className="message-input"
                  rows="1"
                />
                <div className="input-actions">
                  <button type="button" className="attach-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59722 21.9983 8.005 21.9983C6.41278 21.9983 4.88583 21.3658 3.76 20.24C2.63417 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63417 12.8758 3.76 11.75L12.33 3.18C13.0806 2.42944 14.0985 2.00867 15.16 2.00867C16.2215 2.00867 17.2394 2.42944 17.99 3.18C18.7406 3.93056 19.1613 4.94844 19.1613 6.01C19.1613 7.07156 18.7406 8.08944 17.99 8.84L9.41 17.41C9.03494 17.7851 8.52556 17.9957 7.995 17.9957C7.46444 17.9957 6.95506 17.7851 6.58 17.41C6.20494 17.0349 5.99434 16.5256 5.99434 15.995C5.99434 15.4644 6.20494 14.9551 6.58 14.58L14.5 6.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button type="submit" className="send-btn" disabled={!inputValue.trim() || isLoading}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="input-footer">
                <div className="input-options">
                  <button type="button" className="option-btn active">
                    🤖 FloatThink
                  </button>
                  <button type="button" className="option-btn">
                    🔍 Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatInterface;
