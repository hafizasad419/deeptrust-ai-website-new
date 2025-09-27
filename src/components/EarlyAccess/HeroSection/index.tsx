import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import EarlyAccessForm from '@/components/EarlyAccess/HeroSection/EarlyAccessForm';

function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <section className="flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              Early Access Program
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-black leading-tight mb-6 font-inter tracking-tight">
              Be first.
              <br />
              <span className="font-normal">Be trusted.</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-8 font-inter">
              Join the exclusive group of executives building systematic trust before anyone else.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={openForm}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-3 text-lg font-normal group"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
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

      {/* Early Access Form Popup */}
      <EarlyAccessForm isOpen={isFormOpen} onClose={closeForm} />
    </section>
  );
}

export default HeroSection;