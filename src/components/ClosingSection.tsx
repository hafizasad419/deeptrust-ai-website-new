import { Button } from './ui/button';
import { ArrowRight, Zap, Heart, TrendingUp } from 'lucide-react';
import { FaNetworkWired } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

const ClosingSection = () => {
  // const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      value: "100%",
      description: "Human-approved, authentic outreach"
    },
    {
      value: "∞",
      description: "Growth powered by trust, not cold outreach"
    },
    {
      value: "24/7",
      description: "Intelligent monitoring of your trust network"
    },
    {
      value: "5x",
      description: "Increase in meaningful executive conversations"
    },
    {
      value: "90%",
      description: "Reduction in missed opportunities or forgotten follow-ups"
    },
    {
      value: "100%",
      description: "Trust networks managed in one platform"
    },
    {
      value: "300%",
      description: "More high-value referrals unlocked"
    },
    {
      value: "10x",
      description: "Faster engagement with the the people that matter to you"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-black/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-black leading-tight mb-8">
            <span className="flex items-center justify-center space-x-8 mb-4">
              Trust 
              <Heart className="w-16 h-16 lg:w-20 lg:h-20 text-gray-700 mx-2" />
              Designed
            </span>
            <span className="flex items-center justify-center space-x-8 mb-4">
              Connection 
              <FaNetworkWired className="w-16 h-16 lg:w-20 lg:h-20 text-gray-700 mx-2" />
              Engineered
            </span>
            <span className="flex items-center justify-center space-x-8 mb-4">
            Growth 
            <TrendingUp className="w-16 h-16 lg:w-20 lg:h-20 text-gray-700 mx-2" />
            Reimagined
            </span>
            <br />
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-6">
              DeepTrust AI is the first Trust Enablement Platform — your trust operating system
              for building and expanding meaningful networks.
            </p>
            <p className="text-2xl lg:text-3xl font-medium text-black">
              Be the person — and the company — everyone trusts first.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection('early-access')}
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-12 py-4 text-xl font-normal group shadow-2xl"
              size="lg"
            >
              Get Early Access Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" />
            </Button>
            {/* <Button
              variant="outline"
              onClick={() => navigate('/enterprise-demo')}
              className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-12 py-4 text-xl font-normal"
              size="lg"
            >
              Request Enterprise Demo
            </Button> */}
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Heart className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-medium text-black mb-4">Systematic Trust Building</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform relationship management from reactive networking to systematic trust development with AI-powered intelligence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-medium text-black mb-4">Competitive Advantage</h3>
            <p className="text-gray-600 leading-relaxed">
              Gain first-mover advantage in trust enablement. Be the executive who systematizes relationships before competition catches up.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6  transition-colors duration-300">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-medium text-black mb-4">Measurable Growth</h3>
            <p className="text-gray-600 leading-relaxed">
              Track trust coefficient, relationship health, and network growth with quantifiable metrics that drive business results.
            </p>
          </div>
        </div>

        {/* Final Stats */}
        <div className="bg-black rounded-2xl p-8 lg:p-16 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-white mb-8">
            Join the revolution in Trust Enablement
          </h3>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl lg:text-4xl font-light text-white mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-gray-300 font-light mb-8">
            Your network is waiting. Your future self will thank you.
          </p>

          <Button
            onClick={() => scrollToSection('early-access')}
            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-10 py-3 text-lg font-medium group"
          >
            Secure Your Spot Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;