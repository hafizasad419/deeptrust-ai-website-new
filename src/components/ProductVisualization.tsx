import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Check, ArrowRight, Upload, Search, Users, Target } from 'lucide-react';

const ProductVisualization = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Import contacts",
      subtitle: "Gmail, Outlook, LinkedIn, CRM",
      icon: Upload,
      color: "blue"
    },
    {
      id: 2,
      title: "Assign DeepTrust Networks",
      subtitle: "Clients, mentors, boards",
      icon: Users,
      color: "green"
    },
    {
      id: 3,
      title: "Set cadences",
      subtitle: "Weekly, monthly, quarterly",
      icon: Target,
      color: "purple"
    },
    {
      id: 4,
      title: "AI surfaces events",
      subtitle: "Birthdays, promotions, news",
      icon: Search,
      color: "orange"
    },
    {
      id: 5,
      title: "You approve outreach",
      subtitle: "Send · Edit · Cancel",
      icon: Check,
      color: "red"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      red: "bg-red-100 text-red-600 border-red-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600 border-gray-200";
  };

  return (
    <section id="product-visualization" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight font-inter tracking-tight">
            Your first day with
            <br />
            <span className="font-extralight">DeepTrust AI.</span>
          </h2>
          <p className="text-xl text-gray-600 font-light font-inter">
            From day one, you're building trust.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Steps Animation */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${isActive ? 'bg-white shadow-lg scale-105' : 'bg-transparent'
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isActive ? getColorClasses(step.color) : isCompleted ? 'bg-black text-white border-black' : 'bg-gray-100 text-gray-400 border-gray-200'
                      }`}>
                      {isCompleted ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className={`font-medium transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-600'
                        }`}>
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-sm text-gray-500">{step.subtitle}</p>
                    </div>

                    {isActive && (
                      <ArrowRight className="w-5 h-5 text-gray-400 animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Interactive Preview */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">DeepTrust AI Dashboard</span>
              </div>

              {/* Dynamic Content */}
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-black mb-4">Import Your Contacts</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm text-blue-700">Gmail</p>
                        <p className="text-xs text-blue-600">1,247 contacts</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm text-green-700">LinkedIn</p>
                        <p className="text-xs text-green-600">3,891 connections</p>
                      </div>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Import Contacts <Upload className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-black mb-4">Assign to Networks</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <span className="text-sm text-purple-700">Board Members</span>
                        <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">12 contacts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="text-sm text-blue-700">Key Clients</span>
                        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">47 contacts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-sm text-green-700">Mentors</span>
                        <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">8 contacts</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-black mb-4">Set Engagement Cadence</h4>
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-700">Board Members</span>
                          <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">Monthly</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-700">Key Clients</span>
                          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Weekly</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-black mb-4">AI Event Detection</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-orange-700">Sarah Chen promoted to VP</span>
                        </div>
                        <p className="text-xs text-orange-600">Send congratulations message</p>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-blue-700">Mike Johnson's birthday tomorrow</span>
                        </div>
                        <p className="text-xs text-blue-600">Personal note suggested</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-black mb-4">Your Approval Required</h4>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-700 mb-3">
                        "Congratulations on your promotion to VP! Well deserved - excited to see the impact you'll make in this role."
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                          Send
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="ghost">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            onClick={() => {
              const element = document.getElementById('early-access');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Building Trust Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductVisualization;