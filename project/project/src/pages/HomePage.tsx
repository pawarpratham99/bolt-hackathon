import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Shield, Zap, Users, Award } from 'lucide-react';

const HomePage = () => {
  const techLogos = [
    { name: 'Algorand', icon: Shield },
    { name: 'Supabase', icon: Zap },
    { name: 'Netlify', icon: Award },
    { name: 'ElevenLabs', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Instant AI Legal Help
              <span className="block text-blue-600">for Everyone</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ask legal questions. Generate contracts. Verify with blockchain. All in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/ask-ai"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Ask a Question</span>
              </Link>
              <Link
                to="/contracts"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Generate a Contract</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AI Legal Buddy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get professional legal assistance powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Legal Chat</h3>
              <p className="text-gray-600">
                Get instant answers to your legal questions with our advanced AI assistant
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
              <p className="text-gray-600">
                Generate professional contracts in minutes with blockchain verification
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fun Legal Zone</h3>
              <p className="text-gray-600">
                Explore meme contracts and make legal agreements entertaining
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Powered by Trusted Technologies
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techLogos.map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <tech.icon className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;