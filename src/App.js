import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import LandingPage from './components/LandingPage';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'chat'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      title: "Social Identity Theory in Labahua...",
      date: "2025-07",
      messages: [
        { id: 1, text: "Can you explain Social Identity Theory?", sender: "user" },
        { id: 2, text: "Social Identity Theory, developed by Henri Tajfel and John Turner, explains how individuals categorize themselves and others into social groups...", sender: "bot" }
      ]
    },
    {
      id: 2,
      title: "DMart's Growth Strategy and Fx...",
      date: "2025-07",
      messages: [
        { id: 1, text: "What is DMart's business strategy?", sender: "user" },
        { id: 2, text: "DMart follows a unique retail strategy focused on everyday low pricing (EDLP)...", sender: "bot" }
      ]
    }
  ]);
  const [currentChat, setCurrentChat] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "Hello chat",
      date: new Date().toISOString().slice(0, 7),
      messages: []
    };
    setChatHistory([newChat, ...chatHistory]);
    setCurrentChat(newChat);
    setCurrentView('chat');
  };

  const navigateToChat = () => {
    setCurrentView('chat');
  };

  const navigateToHome = () => {
    setCurrentView('landing');
  };

  const selectChat = (chat) => {
    setCurrentChat(chat);
  };

  const updateChatTitle = (chatId, newTitle) => {
    setChatHistory(prev => 
      prev.map(chat => 
        chat.id === chatId ? { ...chat, title: newTitle } : chat
      )
    );
  };

  const addMessage = (message) => {
    if (!currentChat) return;
    
    const updatedChat = {
      ...currentChat,
    //   title: "test chat",
      messages: [...currentChat.messages, message]
    };
    
    setCurrentChat(updatedChat);
    setChatHistory(prev => 
      prev.map(chat => 
        chat.id === currentChat.id ? updatedChat : chat
      )
    );

    // Auto-update title if it's a new chat
    if (currentChat.title === "New Chat" && message.sender === "user") {
      const newTitle = message.text.slice(0, 30) + (message.text.length > 30 ? "..." : "");
      updateChatTitle(currentChat.id, newTitle);
    }
  };

  if (currentView === 'landing') {
    return (
      <div className="app landing-view">
        <LandingPage onNavigateToChat={navigateToChat} />
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar 
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        chatHistory={chatHistory}
        onNewChat={createNewChat}
        onSelectChat={selectChat}
        currentChat={currentChat}
        onNavigateToHome={navigateToHome}
      />
      <ChatInterface 
        currentChat={currentChat}
        onAddMessage={addMessage}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
}

export default App;
