import { mockFeatures } from '../mock';
import { TrendingUp, Bell, Brain, Calendar, Network, Globe, Shield } from 'lucide-react';

const iconMap = {
  TrendingUp,
  Bell,
  Brain,
  Calendar,
  Network,
  Globe,
  Shield
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
            Features Built for
            <br />
            <span className="font-normal">Trust Enablement</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Every feature is designed with one goal: helping you build, measure, and scale authentic relationships systematically.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mockFeatures.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={feature.id}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-medium text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-0.5 bg-black"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Trust Coefficient Deep Dive */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-full">
                <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-blue-900 mb-3">Trust Coefficient™</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Our proprietary algorithm measures relationship strength across 12 key dimensions.
                </p>
                <div className="space-y-2">
                  {[
                    { label: 'Engagement Frequency', value: 85 },
                    { label: 'Response Rate', value: 92 },
                    { label: 'Mutual Connections', value: 78 },
                    { label: 'Interaction Quality', value: 94 }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-blue-700">{metric.label}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-blue-200 rounded-full h-1.5">
                          <div 
                            className="bg-blue-600 h-1.5 rounded-full" 
                            style={{ width: `${metric.value}%` }}
                          ></div>
                        </div>
                        <span className="text-blue-600 font-medium">{metric.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Intelligence Preview */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="w-10 h-10 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">AI-Powered Insights</h3>
                    <p className="text-gray-600 text-sm">Real-time relationship intelligence</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Active Opportunities</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">
                      "Sarah Chen's company just raised Series B - perfect time for partnership discussion"
                    </p>
                    <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                      Suggested: Schedule coffee within 48hrs
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Relationship Risk</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">
                      "Mike Johnson: No interaction in 90 days, typically engages monthly"
                    </p>
                    <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      Action needed: Reach out this week
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Introduction Path</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">
                      "Want to meet CTO at TechCorp? You have 3 warm paths through your network"
                    </p>
                    <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                      Best path: Via David Kim (98% intro rate)
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Cultural Context</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">
                      "Elena Rodriguez: Prefers LinkedIn over email, responds best on Tuesdays"
                    </p>
                    <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      Optimal timing: Next Tuesday 10am PST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;