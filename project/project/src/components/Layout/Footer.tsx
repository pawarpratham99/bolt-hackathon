import React from 'react';
import { Scale, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Scale className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">AI Legal Buddy</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>© 2025 AI Legal Buddy. All rights reserved.</span>
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <span>Built with Bolt.new</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;