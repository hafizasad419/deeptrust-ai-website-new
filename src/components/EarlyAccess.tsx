import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Shield, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const EarlyAccess = () => {

  const benefits = [
    {
      icon: Crown,
      title: "Exclusive Access",
      description: "Be among the first 100 users worldwide"
    },
    {
      icon: Shield,
      title: "Free Trial",
      description: "Full platform access with no time limits"
    },
    {
      icon: Zap,
      title: "First Mover Advantage",
      description: "Build systematic trust before competition"
    }
  ];

  return (
    <section id="early-access" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              Early Access Program
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-light mb-6 leading-tight">
              Be first.
              <br />
              <span className="font-normal">Be trusted.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Join the exclusive group of executives building systematic trust before anyone else.
            </p>
          </div>

          {/* Premium CTA Button */}
          <div className="flex justify-center">
            <Link to="/access">
              <Button 
                className="bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white px-12 py-4 text-xl font-medium group transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>

          {/* Benefits Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* Section Header */}
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-light text-white leading-tight">
                  Why early access matters
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">
                  By joining early, you'll shape the future of relationship intelligence while gaining 
                  an unfair advantage in your market by systematizing trust before anyone else.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-white/30 group-hover:to-white/10 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="pt-2">
                        <h4 className="text-xl lg:text-2xl font-medium text-white mb-3 leading-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Proven Results Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-10 border border-white/20 backdrop-blur-sm">
              <div className="space-y-6 mb-8">
                <h4 className="text-2xl lg:text-3xl font-medium text-white leading-tight">
                  Proven Results
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Built on 15+ years of executive relationship expertise and tested with top CEOs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="text-center space-y-2">
                  <p className="text-4xl lg:text-5xl font-light text-white">100–300</p>
                  <p className="text-gray-400 text-base font-medium">C-Level referrals per year</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-4xl lg:text-5xl font-light text-white">6–7 figure</p>
                  <p className="text-gray-400 text-base font-medium">deals closed consistently</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-4xl lg:text-5xl font-light text-white">15+ years</p>
                  <p className="text-gray-400 text-base font-medium">executive expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;