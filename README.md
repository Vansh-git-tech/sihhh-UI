# FloatChat

A modern chatbot interface inspired by DeepSeek, built with React and JavaScript.

## Features

- 🤖 Clean, modern chat interface
- 📱 Responsive design for mobile and desktop
- 💬 Collapsible sidebar with chat history
- ⚡ Real-time message updates
- 🎨 Dark theme with smooth animations
- 📝 Auto-resizing message input
- 👤 User profile section

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd floatchat
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

- Click the hamburger menu (☰) to toggle the sidebar
- Click "New chat" to start a new conversation
- Select any chat from the history to continue previous conversations
- Type your message in the input field and press Enter to send
- The bot will respond with a simulated message (replace with actual AI integration)

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Collapsible sidebar with chat history
│   ├── Sidebar.css         # Sidebar styling
│   ├── ChatInterface.js    # Main chat interface
│   └── ChatInterface.css   # Chat interface styling
├── App.js                  # Main application component
├── App.css                 # Global app styling
├── index.js               # React entry point
└── index.css              # Global CSS reset and base styles
```

## Customization

### Changing the Bot Name
Update the logo text in `src/components/Sidebar.js`:
```javascript
<span className="logo-text">YourBotName</span>
```

### Adding Real AI Integration
Replace the simulated response in `src/components/ChatInterface.js` with your AI service:
```javascript
// Replace this simulation with actual AI API call
setTimeout(() => {
  const botMessage = {
    id: Date.now() + 1,
    text: `Your AI response here`,
    sender: 'bot',
    timestamp: new Date()
  };
  onAddMessage(botMessage);
  setIsLoading(false);
}, 1500);
```

### Styling
All styles are contained in CSS files. Key color variables you might want to change:
- Background: `#1a1a1a`
- Sidebar: `#2a2a2a`
- Accent: `#4CAF50`
- Text: `#ffffff`

## License

This project is open source and available under the MIT License.
