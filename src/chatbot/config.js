import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const config = {
  botName: 'SoftcodeBot',
  initialMessages: [
    createChatBotMessage("Hi there! I'm SoftcodeBot. How can I help you today?")
  ],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: '#003366',
    },
    chatButton: {
      backgroundColor: '#003366',
    },
  },
  messageParser: MessageParser,
  actionProvider: ActionProvider,
};

export default config;