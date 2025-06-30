import React, { useState } from 'react';
import { Send, Mic, Volume2, Save } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AskAIPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Legal Assistant. Ask me any legal question and I'll provide helpful guidance. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    const responses = [
      "Based on general legal principles, you may have options including negotiating with your landlord, reviewing your lease agreement for early termination clauses, or consulting local tenant protection laws. I recommend speaking with a local attorney for specific advice about your situation.",
      "This is a common legal question. Generally, the answer depends on your jurisdiction and specific circumstances. Here are some key points to consider: [1] Review your contract terms, [2] Check local laws, [3] Consider mediation if there's a dispute. Always consult with a qualified attorney for your specific situation.",
      "That's an interesting legal scenario. While I can provide general information, the specifics of your case will depend on various factors including local laws, contract terms, and circumstances. I'd recommend documenting everything and consulting with an attorney who specializes in this area of law.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Placeholder for voice input functionality
    console.log('Voice input toggled');
  };

  const handleVoiceOutput = (text: string) => {
    // Placeholder for ElevenLabs voice output
    console.log('Speaking:', text);
  };

  const handleSaveChat = () => {
    // Placeholder for saving chat functionality
    console.log('Saving chat as legal memo');
    alert('Chat saved as Legal Memo! (Feature coming soon)');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-12rem)]">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">AI Legal Assistant</h1>
          <button
            onClick={handleSaveChat}
            className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <Save className="h-4 w-4" />
            <span>Save as Memo</span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto h-96">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {!message.isUser && (
                    <button
                      onClick={() => handleVoiceOutput(message.text)}
                      className="mt-2 text-xs text-gray-500 hover:text-gray-700 flex items-center space-x-1"
                    >
                      <Volume2 className="h-3 w-3" />
                      <span>Listen</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a legal question..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleVoiceInput}
              className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                isListening
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Mic className="h-5 w-5" />
            </button>
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAIPage;