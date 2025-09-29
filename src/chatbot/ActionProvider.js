import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleServices = () => {
    const message = this.createChatBotMessage(
      "We offer AI development, web & mobile apps, and digital consulting. Want to book a demo?"
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleContact = () => {
    const message = this.createChatBotMessage(
      "You can reach us at hello@softcode.com or call +234-XXX-XXX-XXXX."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleUnknown = () => {
    const message = this.createChatBotMessage(
      "I'm not sure I understand. Try asking about our services or how to contact us."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };
}

export default ActionProvider;