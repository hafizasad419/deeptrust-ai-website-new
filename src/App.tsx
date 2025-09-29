import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const SocialProof = lazy(() => import("./components/SocialProof"));
const ProblemSection = lazy(() => import("./components/ProblemSection"));
const ProductVisualization = lazy(() => import("./components/ProductVisualization"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const WhyItMatters = lazy(() => import("./components/WhyItMatters"));
const Features = lazy(() => import("./components/Features"));
const Advisors = lazy(() => import("./components/Advisors"));
const EarlyAccess = lazy(() => import("./components/EarlyAccess"));
const ClosingSection = lazy(() => import("./components/ClosingSection"));
const Footer = lazy(() => import("./components/Footer"));
const PrivacySecurity = lazy(() => import("./components/PrivacySecurity"));
const PricingPage = lazy(() => import("./components/PricingPage"));
// const EnterpriseDemo = lazy(() => import("./components/EnterpriseDemo"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));



import EarlyAccessPage from "./pages/EarlyAccessPage";
// import ThankYouPage from "./pages/ThankYou";

// Legal Pages
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import CookiePolicy from "./pages/Legal/CookiePolicy";
import Accessibility from "./pages/Legal/Accessibility";
import DataProcessingAgreement from "./pages/Legal/DataProcessingAgreement";
import EnterpriseSLA from "./pages/Legal/EnterpriseSLA";
import ExportCompliance from "./pages/Legal/ExportCompliance";
import SubProcessors from "./pages/Legal/SubProcessors";
import VulnerabilityDisclosure from "./pages/Legal/VulnerabilityDisclosure";
import SecurityTrust from "./pages/Legal/SecurityTrust";

const Home = () => {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <ProductVisualization />
        <HowItWorks />
        <WhyItMatters />
        <Features />
        <Advisors />
        <EarlyAccess />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

// const AppLogin = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <div className="flex items-center justify-center space-x-3 mb-8">
//             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">DT</span>
//             </div>
//             <div className="text-left">
//               <h1 className="text-2xl font-light text-black">DeepTrust AI</h1>
//               <p className="text-sm text-gray-600 -mt-1">A Trust Enablement Platform</p>
//             </div>
//           </div>
//           <h2 className="text-3xl font-light text-black">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Access your relationship intelligence dashboard
//           </p>
//         </div>
        
//         <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
//           <div className="space-y-6">
//             <button className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
//               <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//               </svg>
//               Sign in with Google
//             </button>
//           </div>
          
//           <div className="mt-6 text-center">
//             <p className="text-xs text-gray-500">
//               We only request the narrowest scopes you authorize.<br/>
//               You control every action.
//             </p>
//           </div>
//         </div>

//         <div className="text-center">
//           <div className="flex justify-center space-x-4 text-xs text-gray-500">
//             <a href="#" className="hover:text-gray-700">Privacy</a>
//             <a href="#" className="hover:text-gray-700">Security</a>
//             <a href="#" className="hover:text-gray-700">Data Use</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<AppLogin />} /> */}
          <Route path="/privacy-security" element={<PrivacySecurity />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* <Route path="/enterprise-demo" element={<EnterpriseDemo />} /> */}
          <Route path="/access" element={<EarlyAccessPage />} />
          
          {/* Legal Pages */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal/accessibility" element={<Accessibility />} />
          <Route path="/legal/data-processing-agreement" element={<DataProcessingAgreement />} />
          <Route path="/legal/enterprise-sla" element={<EnterpriseSLA />} />
          <Route path="/legal/export-compliance" element={<ExportCompliance />} />
          <Route path="/legal/sub-processors" element={<SubProcessors />} />
          <Route path="/legal/vulnerability-disclosure" element={<VulnerabilityDisclosure />} />
          <Route path="/legal/security-trust" element={<SecurityTrust />} />
          
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;