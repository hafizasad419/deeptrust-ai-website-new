import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handlePricing = () => {
    navigate('/pricing');
    setIsMobileMenuOpen(false);
  };

  const handlePrivacySecurity = () => {
    navigate('/privacy-security');
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">DT</span>
            </div>
            <div>
              <h1 className="font-light text-lg lg:text-xl text-black font-inter">DeepTrust AI</h1>
              <p className="text-xs text-gray-600 -mt-1 font-light font-inter">A Trust Enablement Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('problem-section')}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('product-visualization')}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              Features
            </button>
            <button
              onClick={handlePricing}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('advisors')}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              Advisors
            </button>
            <button
              onClick={() => navigate('/access')}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
            >
              Early Access
            </button>

          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <Button
              onClick={handleLogin}
              className="bg-black text-white hover:bg-gray-800 transition-all duration-200 px-6"
            >
              App Login
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 max-h-96 overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('problem-section')}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection('product-visualization')}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Features
              </button>
              <button
                onClick={handlePricing}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Pricing
              </button>
              <button
                onClick={() => navigate('/access')}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Early Access
              </button>
              <button
                onClick={() => scrollToSection('advisors')}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Advisors
              </button>
              <button
                onClick={handlePrivacySecurity}
                className="text-left text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm font-inter"
              >
                Security
              </button>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <Button
                  onClick={handleLogin}
                  className="bg-black text-white hover:bg-gray-800 transition-all duration-200 w-full font-inter"
                >
                  App Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;