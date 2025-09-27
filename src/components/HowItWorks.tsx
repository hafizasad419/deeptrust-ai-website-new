import { mockWorkflow } from '../mock';
import { Upload, Search, Users, Eye, Target } from 'lucide-react';
import { FaBrain, FaUserCog, FaChartLine } from 'react-icons/fa';

const iconMap = {
  Upload,
  Search, 
  Users,
  Eye,
  Target
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight font-inter tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto font-inter">
            A simple 5-step process that transforms your relationship management from chaos to systematic trust building.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {mockWorkflow.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              
              return (
                <div key={step.id} className="relative">
                  {/* Step Circle */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute top-0 left-0 z-20 w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center transform -translate-x-2 -translate-y-2">
                    <span className="text-xs font-bold text-black">{step.id}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Mobile Connection Line */}
                  {index < mockWorkflow.length - 1 && (
                    <div className="lg:hidden w-0.5 h-12 bg-gray-200 mx-auto mt-8"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaBrain className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-lg font-medium text-black mb-3">Automated Intelligence</h3>
            <p className="text-gray-600 text-sm">
              AI continuously monitors your network for opportunities, events, and optimal engagement moments.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaUserCog className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-lg font-medium text-black mb-3">Human Control</h3>
            <p className="text-gray-600 text-sm">
              You maintain complete control over every interaction. AI suggests, you decide and personalize.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-lg font-medium text-black mb-3">Systematic Growth</h3>
            <p className="text-gray-600 text-sm">
              Build trust systematically through consistent, thoughtful engagement based on relationship data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;