import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Shield, Lock, Eye, FileText, Users, CheckCircle, Globe, Server, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacySecurity = () => {
  const navigate = useNavigate();

  const complianceFeatures = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      status: "In Progress",
      description: "Comprehensive security controls and audit procedures",
      color: "blue"
    },
    {
      icon: Globe,
      title: "GDPR Compliant",
      status: "Ready",
      description: "Full compliance with European data protection regulations",
      color: "green"
    },
    {
      icon: FileText,
      title: "DPIA Ready",
      status: "Complete",
      description: "Data Protection Impact Assessment documentation available",
      color: "green"
    },
    {
      icon: Server,
      title: "Enterprise Security",
      status: "Built-in",
      description: "Enterprise-grade security architecture from day one",
      color: "purple"
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Encryption at Rest & Transit",
      description: "AES-256 encryption for stored data, TLS 1.3 for data in transit"
    },
    {
      icon: Users,
      title: "Role-Based Access Controls",
      description: "Granular permissions and access controls for team collaboration"
    },
    {
      icon: Eye,
      title: "Comprehensive Audit Logging", 
      description: "Complete audit trail of all system activities and data access"
    },
    {
      icon: CheckCircle,
      title: "Data Sovereignty",
      description: "Your data stays in your region with full ownership control"
    }
  ];

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "Privacy considerations built into every feature from conception to deployment"
    },
    {
      icon: Lock,
      title: "Minimal Data Collection",
      description: "We collect only the data necessary to provide our relationship intelligence services"
    },
    {
      icon: Users,
      title: "User Control",
      description: "Complete control over your data with granular privacy settings and export options"
    },
    {
      icon: Eye,
      title: "Transparent Processing",
      description: "Clear documentation of how your data is processed, stored, and used"
    }
  ];

  const ethicsCommitments = [
    "Never sold to third parties",
    "Never shared without explicit consent", 
    "Minimal data collection principle",
    "Transparent AI decision making",
    "User-controlled data retention",
    "Right to data portability",
    "Regular third-party security audits",
    "Incident response within 24 hours"
  ];

  const getStatusColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200", 
      purple: "bg-purple-100 text-purple-700 border-purple-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-700 border-gray-200";
  };

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
                <p className="text-xs text-gray-600 -mt-1">Privacy & Security</p>
              </div>
            </div>
            
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              Privacy & Security Center
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
              Your trust, our priority.
              <br />
              <span className="font-normal">Enterprise-ready security.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Built with security, compliance, and data ethics as foundational principles, 
              not afterthoughts. Your relationship data deserves the highest protection.
            </p>
          </div>

          {/* Privacy Principles */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Privacy Principles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to protecting your privacy goes beyond compliance — it's fundamental to how we build and operate DeepTrust AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {privacyPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-medium text-black mb-4">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compliance Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We maintain the highest standards of security and compliance to protect your data and meet regulatory requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Icon className="w-8 h-8 text-gray-700" />
                    </div>
                    
                    <h3 className="text-lg font-medium text-black mb-2">{feature.title}</h3>
                    
                    <Badge 
                      className={`mb-3 ${getStatusColor(feature.color)} border text-xs`}
                      variant="outline"
                    >
                      {feature.status}
                    </Badge>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Technical Security Measures
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every layer of our platform is designed with security best practices, 
                from infrastructure to application logic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-black mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Ethics */}
          <div className="bg-black text-white rounded-2xl p-8 lg:p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light mb-4">
                Data Ethics Commitments
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your relationship data is sacred. We've built DeepTrust AI with the highest 
                ethical standards for data handling and privacy protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {ethicsCommitments.map((commitment, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{commitment}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-300 text-lg font-light mb-6">
                Trust isn't just what we help you build with others — it's what we build with you.
              </p>
              <Button
                onClick={() => navigate('/')}
                className="bg-white text-black hover:bg-gray-100 px-8 py-3"
              >
                Return to Home
              </Button>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="text-center bg-white rounded-2xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-2xl lg:text-3xl font-light text-black mb-4">
              Questions about Privacy or Security?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our security and privacy teams are here to help. Reach out for detailed security documentation, 
              compliance reports, or to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800">
                Contact Security Team
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Download Security Whitepaper
              </Button>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">Security certifications and compliance</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                SOC 2 Type II
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                GDPR Ready
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Lock className="w-4 h-4 mr-2" />
                ISO 27001
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Server className="w-4 h-4 mr-2" />
                AWS Security
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <FileText className="w-4 h-4 mr-2" />
                CCPA Compliant
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Eye className="w-4 h-4 mr-2" />
                Privacy Shield
              </Badge>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacySecurity;