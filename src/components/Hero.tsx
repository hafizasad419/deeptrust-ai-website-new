import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

const Hero = () => {
  // const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Abstract Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gray-50 opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gray-100 opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gray-50 opacity-40 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-black leading-tight mb-6 font-inter tracking-tight">
              The First Trust
              <br />
              <span className="font-extralight">Enablement</span>
              <br />
              Platform
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-8 font-inter">
              Manage, enhance, and expand your trust networks in ways never before possible.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('early-access')}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-3 text-lg font-normal group"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              {/* <Button 
                variant="outline"
                onClick={() => navigate('/enterprise-demo')}
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-3 text-lg font-normal"
              >
                Request Enterprise Demo
              </Button> */}
            </div>
          </div>

          {/* Right Content - Loom Video */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe 
                  src="https://www.loom.com/embed/8189c9253dbe473aba95925e901c7670?sid=5f4ffec5-570e-424a-b2d8-555bd5598a37&hide_owner=true" 
                  frameBorder="0" 
                  allowFullScreen 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;