import { Badge } from './ui/badge';
import { Linkedin, Twitter, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId:string) => {
    navigate('/');
    // Wait for navigation then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div 
              className="flex items-center space-x-3 mb-4 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-sm">DT</span>
              </div>
              <div>
                <h3 className="font-light text-lg text-white">DeepTrust AI</h3>
                <p className="text-xs text-gray-400 -mt-1">A Trust Enablement Platform</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              The world's first relationship intelligence system built to transform how executives win business, scale influence, and grow through trust.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/pricing')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('advisors')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Advisors
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 className="font-medium text-white mb-4">Legal & Security</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/privacy-security" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/privacy-security')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy & Security
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-medium text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              hello@deeptrust.ai
            </p>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-gray-400 border-gray-700">
              SOC 2 Type II Compliant
            </Badge>
            <Badge variant="outline" className="text-gray-400 border-gray-700">
              GDPR Ready
            </Badge>
            <Badge variant="outline" className="text-gray-400 border-gray-700">
              Secure by Design
            </Badge>
            <Badge variant="outline" className="text-gray-400 border-gray-700">
              Enterprise Grade Security
            </Badge>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Affiniti Solutions, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;