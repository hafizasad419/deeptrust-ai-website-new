import { useEffect, useState } from 'react';
import { Globe, TrendingUp, Heart, Zap } from 'lucide-react';

const WhyItMatters = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('why-it-matters');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="why-it-matters" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-light mb-6 leading-tight">
            Trust is the currency
            <br />
            <span className="font-normal">of the future.</span>
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
            In a world drowning in noise, trust becomes the ultimate differentiator. 
            DeepTrust AI ensures you are the most trusted person in your network.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Globe Visualization */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Central Globe */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}>
                <Globe className="w-16 h-16 text-white/80" />
              </div>
              
              {/* Orbiting Trust Networks */}
              {[
                { delay: 0, size: 'w-12 h-12', distance: 'top-8 right-16', color: 'bg-blue-500' },
                { delay: 200, size: 'w-10 h-10', distance: 'bottom-12 right-8', color: 'bg-green-500' },
                { delay: 400, size: 'w-8 h-8', distance: 'bottom-16 left-16', color: 'bg-purple-500' },
                { delay: 600, size: 'w-10 h-10', distance: 'top-12 left-8', color: 'bg-orange-500' },
                { delay: 800, size: 'w-6 h-6', distance: 'top-1/2 right-4', color: 'bg-red-500' },
                { delay: 1000, size: 'w-8 h-8', distance: 'top-1/2 left-4', color: 'bg-yellow-500' },
              ].map((node, index) => (
                <div
                  key={index}
                  className={`absolute ${node.distance} ${node.size} ${node.color} rounded-full opacity-80 transition-all duration-500 animate-pulse`}
                  style={{ 
                    animationDelay: `${node.delay}ms`,
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transitionDelay: `${node.delay}ms`
                  }}
                >
                  <div className="w-full h-full rounded-full border-2 border-white/30"></div>
                </div>
              ))}
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
                {isVisible && [
                  { x1: '50%', y1: '50%', x2: '75%', y2: '25%' },
                  { x1: '50%', y1: '50%', x2: '85%', y2: '75%' },
                  { x1: '50%', y1: '50%', x2: '25%', y2: '75%' },
                  { x1: '50%', y1: '50%', x2: '15%', y2: '25%' },
                ].map((line, index) => (
                  <line
                    key={index}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 300}ms` }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Right - Key Points */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">The world is drowning in noise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Information overload makes authentic connections harder to maintain and genuine opportunities easier to miss.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Trust is scarce</h3>
                <p className="text-gray-300 leading-relaxed">
                  In an age of automation and AI, human trust becomes the most valuable and differentiated asset.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Authenticity wins</h3>
                <p className="text-gray-300 leading-relaxed">
                  Genuine, consistent, and thoughtful relationship building creates sustainable competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center bg-white/5 rounded-2xl p-12 border border-white/10">
          <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
          Never miss the moments that matter.
          </h3>
          <p className="text-lg text-gray-300 font-light">
          DeepTrust AI keeps you top-of-mind with the people who matter most - reminding you when, how, and why to reach out so your relationships grow stronger every day
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;