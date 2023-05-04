document.addEventListener('DOMContentLoaded', function() {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
  
    // Create a map to store the chatbot's responses
    const responses = new Map();
    responses.set('hi', 'Hello! How may I help you?');
    responses.set('hello', 'Hi!');
    responses.set('how are you?', 'I am good. How about you?');
    responses.set('what is your age?', 'I am not human i am bot program so i don\'t have any age!');
    responses.set('what is your name', 'My name is Dot! I developed by Ahsan!');
    responses.set('good', 'That\'s great!');
    responses.set('bad', 'Sorry to hear that.');
  
    // Function to generate a random response if no specific response is found
    function getRandomResponse() {
      const randomResponses = [
        'I\'m sorry, I didn\'t understand.',
        'Could you please rephrase that?',
        'I\'m still learning. Can you ask me something else?',
        'I\'m afraid I don\'t have an answer for that.',
      ];
      const randomIndex = Math.floor(Math.random() * randomResponses.length);
      return randomResponses[randomIndex];
    }
  
    // Function to process user input and generate a response
    function processInput(input) {
      for (const [key, value] of responses) {
        if (input.toLowerCase().includes(key)) {
          return value;
        }
      }
      return getRandomResponse();
    }
  
    // Function to add a message to the chat log
    function addMessageToChatLog(message, sender) {
      const messageContainer = document.createElement('div');
      messageContainer.classList.add('message', sender);
      messageContainer.textContent = message;
      chatLog.appendChild(messageContainer);
  
      // Scroll to the bottom of the chat log
      chatLog.scrollTop = chatLog.scrollHeight;
    }
  
    // Function to handle user input and generate a response
    function handleUserInput() {
      const userInputText = userInput.value.trim();
  
      if (userInputText !== '') {
        addMessageToChatLog(userInputText, 'user');
        userInput.value = '';
  
        const response = processInput(userInputText);
        addMessageToChatLog(response, 'chatbot');
      }
    }
  
    // Event listener for user input
    userInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        handleUserInput();
      }
    });
  });
  

