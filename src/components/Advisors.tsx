import { advisorsData, operatingTeamData, expertiseAreasData } from '../data/advisorsData';
import { Badge } from './ui/badge';
import { Quote, ExternalLink } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Advisors = () => {
  return (
    <section id="advisors" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            Advisory Board
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
            Backed by innovators
            <br />
            <span className="font-normal">and leaders.</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Our advisory board brings decades of expertise in relationship intelligence, 
            enterprise growth, and trust-based business development.
          </p>
        </div>

        {/* Featured Quote */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-16 text-center">
          <Quote className="w-12 h-12 text-gray-300 mx-auto mb-6" />
          <blockquote className="text-2xl lg:text-3xl font-light text-black mb-6 leading-relaxed">
            "{advisorsData[0].quote}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={advisorsData[0].image} 
              alt={advisorsData[0].name} 
              className="w-15 h-15 rounded-full border-2 border-gray-200 object-cover object-center"
            />
            <div className="text-left">
              <p className="font-medium text-black">{advisorsData[0].name}</p>
              <p className="text-gray-600 text-sm">{advisorsData[0].title}</p>
            </div>
          </div>
          
          {/* LinkedIn Button */}
          <div className="mt-6 flex items-start px-22">
            <a 
              href={advisorsData[0].linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Advisors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advisorsData.slice(1, 9).map((advisor) => (
            <div 
              key={advisor.id}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="mb-6">
                <img 
                  src={advisor.image} 
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-gray-100 group-hover:border-gray-200 transition-colors duration-300 object-cover object-center"
                />
              </div>
              
              {/* Info */}
              <h3 className="text-lg font-medium text-black mb-2">{advisor.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{advisor.title}</p>
              <p className="text-sm text-gray-500 mb-4">{advisor.company}</p>
              
              {/* Bio Preview */}
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                {advisor.bio}
              </p>

              {/* LinkedIn Link */}
              <a 
                href={advisor.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advisorsData.slice(9, 11).map((advisor) => (
            <div 
              key={advisor.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              <blockquote className="text-lg text-gray-800 mb-6 leading-relaxed font-light">
                "{advisor.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 object-cover object-center"
                  />
                  <div>
                    <p className="font-medium text-black">{advisor.name}</p>
                    <p className="text-gray-600 text-sm">{advisor.title}</p>
                    <p className="text-gray-500 text-xs">{advisor.company}</p>
                  </div>
                </div>
                <a 
                  href={advisor.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Advisors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisorsData.slice(11).map((advisor) => (
            <div 
              key={advisor.id}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="mb-6">
                <img 
                  src={advisor.image} 
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-gray-100 group-hover:border-gray-200 transition-colors duration-300 object-cover object-center"
                />
              </div>
              
              {/* Info */}
              <h3 className="text-lg font-medium text-black mb-2">{advisor.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{advisor.title}</p>
              <p className="text-sm text-gray-500 mb-4">{advisor.company}</p>
              
              {/* Bio Preview */}
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                {advisor.bio}
              </p>

              {/* LinkedIn Link */}
              <a 
                href={advisor.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Operating Team Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              Operating Team
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-light text-black mb-6 leading-tight">
              Leadership team driving
              <br />
              <span className="font-normal">innovation forward</span>
            </h3>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Our operating team combines deep industry expertise with visionary leadership to execute our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operatingTeamData.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
              >
                {/* Photo */}
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto border-4 border-gray-100 group-hover:border-gray-200 transition-colors duration-300 object-cover object-center"
                  />
                </div>
                
                {/* Info */}
                <h3 className="text-lg font-medium text-black mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{member.title}</p>
                <p className="text-sm text-gray-500 mb-4">{member.company}</p>
                
                {/* Bio Preview */}
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {member.bio}
                </p>

                {/* LinkedIn Link */}
                <a 
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm"
                >
                  <FaLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-light text-black mb-4">
              Deep expertise across critical domains
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advisors bring specialized knowledge in the areas most critical to relationship intelligence and trust enablement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreasData.map((area) => (
              <div key={area.id} className="text-center">
                <div className={`w-16 h-16 ${area.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-light ${area.textColor}`}>{area.icon}</span>
                </div>
                <h4 className="text-lg font-medium text-black mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisors;