import { Badge } from './ui/badge';

const SocialProof = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            Research-Backed Platform
          </Badge>
          <p className="text-lg text-gray-700 font-light max-w-4xl mx-auto">
            Backed by insights from Harvard Business Review, Pew Research, and Dunbar's studies on human networks. 
            Built on 15+ years of executive relationship expertise.
          </p>
        </div>

        {/* Research Citations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-2xl font-light text-black">H</span>
            </div> */}
            <h3 className="font-medium text-black mb-2">Harvard Business Review</h3>
            <p className="text-sm text-gray-600">Research on relationship-based business growth</p>
          </div>
          <div className="text-center">
            {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-2xl font-light text-black">P</span>
            </div> */}
            <h3 className="font-medium text-black mb-2">Pew Research</h3>
            <p className="text-sm text-gray-600">Social networking and trust studies</p>
          </div>
          <div className="text-center">
            {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-2xl font-light text-black">D</span>
            </div> */}
            <h3 className="font-medium text-black mb-2">Dunbar's Research</h3>
            <p className="text-sm text-gray-600">Human network cognitive limits</p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-light text-black mb-2">200+</p>
              <p className="text-gray-600">meaningful contacts you have</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light text-black mb-2">12–18</p>
              <p className="text-gray-600">you can truly keep engaged</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light text-black mb-2">182+</p>
              <p className="text-gray-600">relationships fade without system</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-lg text-gray-700 font-medium">
              DeepTrust AI solves this human bandwidth gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;