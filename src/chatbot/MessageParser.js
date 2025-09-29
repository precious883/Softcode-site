class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes('services')) {
      this.actionProvider.handleServices();
    } else if (lower.includes('contact')) {
      this.actionProvider.handleContact();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;