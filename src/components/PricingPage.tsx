import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockPricingPlans } from '../mock';
import { Check, Star, ArrowRight, Users, Shield, Zap, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    // Wait for navigation then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const calculatePrice = (basePrice: number, isYearly: boolean, discount: number) => {
    if (isYearly) {
      return Math.round(basePrice * 12 * (1 - discount / 100));
    }
    return basePrice;
  };

  // const formatPrice = (basePrice: number, isYearly: boolean, discount: number) => {
  //   const price = calculatePrice(basePrice, isYearly, discount);
  //   if (isYearly) {
  //     return `$${price.toLocaleString()}/year`;
  //   }
  //   return `$${price}/month`;
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-gray-600 hover:text-black"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">DT</span>
              </div>
              <div>
                <h1 className="font-light text-lg lg:text-xl text-black">DeepTrust AI</h1>
                <p className="text-xs text-gray-600 -mt-1">Pricing Plans</p>
              </div>
            </div>
            
            {/* <div>
              <Button 
                onClick={() => navigate('/login')}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-200 px-6"
              >
                App Login
              </Button>
            </div> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
              Choose your
              <br />
              <span className="font-normal">access level.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
              Start building systematic trust today. Scale as your network grows. 
              All plans include our core relationship intelligence features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isYearly ? 'text-black font-medium' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                  isYearly ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                    isYearly ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isYearly ? 'text-black font-medium' : 'text-gray-500'}`}>
                Annual
              </span>
              {isYearly && (
                <Badge variant="outline" className="ml-2 text-green-600 border-green-200 bg-green-50">
                  Save 20%
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {mockPricingPlans.map((plan: any) => {
              const isPopular = plan.popular;
              
              return (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                    isPopular 
                      ? 'border-2 border-black shadow-2xl scale-105' 
                      : 'border border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="outline" className="bg-black text-white px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-medium text-black mb-2">{plan.name}</h3>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl lg:text-5xl font-light text-black">
                        {isYearly ? `$${calculatePrice(plan.price, true, plan.yearlyDiscount).toLocaleString()}` : `$${plan.price}`}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {isYearly ? '/year' : '/month'}
                      </span>
                      
                      {plan.additionalSeat && (
                        <p className="text-sm text-gray-600 mt-2">
                          + ${plan.additionalSeat}/additional seat
                        </p>
                      )}
                    </div>

                    {/* Savings */}
                    {isYearly && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ${(plan.price * 12 * plan.yearlyDiscount / 100).toLocaleString()}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature: any, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => scrollToSection('early-access')}
                    className={`w-full py-3 transition-all duration-300 ${
                      isPopular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'border border-black text-black hover:bg-black hover:text-white'
                    }`}
                    variant={isPopular ? 'default' : 'outline'}
                  >
                    Get Early Access
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Enterprise Features */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Enterprise features built for scale
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Advanced capabilities for organizations that need enterprise-grade trust management and team collaboration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-black mb-3">Team Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Shared trust networks, team analytics, and collaborative relationship management across your organization.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-black mb-3">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">
                  SOC 2 compliance, SSO integration, advanced permissions, audit logs, and dedicated security support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-black mb-3">Custom Integrations</h3>
                <p className="text-gray-600 text-sm">
                  API access, custom CRM integrations, dedicated onboarding, and priority feature development.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button
                onClick={() => navigate('/access')}
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
              >
                Get Early Access
              </Button>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-black text-white rounded-2xl p-8 lg:p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light mb-4">
                Why invest in relationship intelligence?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The ROI of systematic trust building goes far beyond individual relationships — it's about building sustainable competitive advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl lg:text-4xl font-light text-white mb-2">300%</p>
                <p className="text-gray-400 text-sm mb-2">Average ROI increase</p>
                <p className="text-gray-300 text-xs">from systematic referral generation</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-light text-white mb-2">67%</p>
                <p className="text-gray-400 text-sm mb-2">Faster deal closure</p>
                <p className="text-gray-300 text-xs">through warm relationship introductions</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-light text-white mb-2">5x</p>
                <p className="text-gray-400 text-sm mb-2">Network growth rate</p>
                <p className="text-gray-300 text-xs">compared to traditional networking</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Common questions about DeepTrust AI pricing and features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-black mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we'll prorate any differences.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-black mb-3">Is there a free trial?</h3>
                <p className="text-gray-600 text-sm">
                  Early access includes a comprehensive free trial with full platform access. No credit card required during the trial period.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-black mb-3">What integrations are included?</h3>
                <p className="text-gray-600 text-sm">
                  All plans include Gmail, Outlook, LinkedIn, and major CRM integrations. Enterprise plans include custom API access and dedicated integrations.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-black mb-3">How is data security handled?</h3>
                <p className="text-gray-600 text-sm">
                  All plans include enterprise-grade security with SOC 2 compliance, end-to-end encryption, and comprehensive audit logging.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-white rounded-2xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-2xl lg:text-3xl font-light text-black mb-4">
              Ready to transform your relationships?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the exclusive group of executives building systematic trust before anyone else. 
              Limited early access spots available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('early-access')}
                className="bg-black text-white hover:bg-gray-800 px-8 py-3"
              >
                Get Early Access Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                onClick={() => navigate('/access')}
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;