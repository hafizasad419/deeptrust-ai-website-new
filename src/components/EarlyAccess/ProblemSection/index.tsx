import { AlertTriangle, TrendingDown, Users, Calendar } from 'lucide-react';
import { FaLinkedin, FaSalesforce, FaGoogleDrive, FaStickyNote, FaEnvelope, FaCalendarAlt, FaFileAlt, FaPhone, FaWhatsapp, FaSlack, FaTrello, FaGithub } from 'react-icons/fa';

function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight font-inter tracking-tight">
            You can't scale trust,
            <br />
            <span className="font-extralight">on your own.</span>
          </h2>
        </div>

        {/* Split View with Premium Background */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - The Chaos */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative">
                {/* Problem Badge */}
                <div className="absolute -top-3 left-6">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xl font-medium border border-white/30">
                    The Problem
                  </div>
                </div>
                
                <div className="flex items-center mb-6 pt-4">
                  <AlertTriangle className="w-8 h-8 text-white/80 mr-3" />
                  <div>
                    <h3 className="text-xl font-medium text-white font-inter">The Current Reality</h3>
                    <p className="text-white/70 text-sm font-inter">Why relationship management fails at scale</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-white/60 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-white mb-1 font-inter">Referrals are inconsistent</h4>
                        <p className="text-white/70 text-sm font-inter">No systematic approach to nurturing introduction sources. You rely on memory and luck instead of data-driven relationship management.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-white/60 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-white mb-1 font-inter">Networks go cold</h4>
                        <p className="text-white/70 text-sm font-inter">Relationships fade due to inconsistent engagement. Important contacts become distant because you can't maintain 200+ meaningful connections manually.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-white/60 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-white mb-1 font-inter">Opportunities slip through the cracks</h4>
                        <p className="text-white/70 text-sm font-inter">Missing key moments for relationship building. Promotions, birthdays, company news — all invisible without systematic monitoring.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Chaotic Interface */}
                <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg shadow-sm border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-medium text-white font-inter">Your Current "System"</h5>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded font-inter border border-white/20">Chaos Mode</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { icon: FaLinkedin, color: "text-blue-400" },
                      { icon: FaSalesforce, color: "text-blue-300" },
                      { icon: FaGoogleDrive, color: "text-green-400" },
                      { icon: FaStickyNote, color: "text-yellow-400" },
                      { icon: FaEnvelope, color: "text-red-400" },
                      { icon: FaCalendarAlt, color: "text-purple-400" },
                      { icon: FaFileAlt, color: "text-gray-400" },
                      { icon: FaPhone, color: "text-green-300" },
                      { icon: FaWhatsapp, color: "text-green-300" },
                      { icon: FaSlack, color: "text-purple-300" },
                      { icon: FaTrello, color: "text-blue-300" },
                      { icon: FaGithub, color: "text-gray-300" }
                    ].map(({ icon: Icon, color }, i) => (
                      <div key={i} className="bg-white/10 rounded h-6 opacity-60 flex items-center justify-center border border-white/20">
                        <Icon className={`w-3 h-3 ${color}`} />
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs text-white/70 font-inter">Scattered across LinkedIn, Gmail, CRM, sticky notes, and memory</p>
                  
                  {/* Spacer to match Solution section height */}
                  <div className="-mt-4 space-y-2">
                    <div className="h-2 bg-white/5 rounded border border-white/10"></div>
                    <div className="h-2 bg-white/5 rounded border border-white/10"></div>
                    <div className="h-2 bg-white/5 rounded border border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - The Solution Preview */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative">
                {/* Solution Badge */}
                <div className="absolute -top-3 left-6">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xl font-medium border border-white/30">
                    The Solution
                  </div>
                </div>
                
                <div className="flex items-center mb-6 pt-4">
                  <Users className="w-8 h-8 text-white/80 mr-3" />
                  <div>
                    <h3 className="text-xl font-medium text-white font-inter">With DeepTrust AI</h3>
                    <p className="text-white/70 text-sm font-inter">Systematic relationship intelligence at scale</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-white/60 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-white mb-1 font-inter">Systematic trust building</h4>
                        <p className="text-white/70 text-sm font-inter">AI-powered relationship intelligence that maps, measures, and grows your network systematically based on trust coefficients and engagement patterns.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-white/60 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-white mb-1 font-inter">Never miss important moments</h4>
                        <p className="text-white/70 text-sm font-inter">Smart notifications surface promotions, birthdays, company news, and optimal engagement opportunities with AI-generated suggestions you can approve.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-white/60 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-white mb-1 font-inter">Consistent relationship growth</h4>
                        <p className="text-white/70 text-sm font-inter">Automated trust development plans maintain every key relationship with culturally-aware, personalized engagement strategies.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Clean Interface */}
                <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg shadow-sm border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-medium text-white font-inter">DeepTrust AI Dashboard</h5>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded font-inter border border-white/20">Intelligent</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-white/80" />
                        </div>
                        <span className="text-sm text-white font-inter">Trust Network: Board</span>
                      </div>
                      <div className="text-xs text-white/80 font-medium font-inter">94% Active</div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <TrendingDown className="w-3 h-3 text-white/80" />
                        </div>
                        <span className="text-sm text-white font-inter">Trust Network: Clients</span>
                      </div>
                      <div className="text-xs text-white/80 font-medium font-inter">87% Active</div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <Calendar className="w-3 h-3 text-white/80" />
                        </div>
                        <span className="text-sm text-white font-inter">Trust Network: Mentors</span>
                      </div>
                      <div className="text-xs text-white/80 font-medium font-inter">91% Active</div>
                    </div>
                  </div>
                  <p className="text-center text-xs text-white/70 mt-3 font-inter">Unified relationship intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-xl lg:text-2xl text-gray-600 font-light">
            Your relationships are your most valuable asset — but until now, there's been 
            <br />
            <span className="font-medium text-black">no system to map, measure, and grow them at scale.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
