import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Axios from '@/api';
import { ErrorNotification, SuccessNotification } from '@/utils/toast';
import PremiumTextField from '@/components/FormikFields/PremiumTextField';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Zap, Crown } from 'lucide-react';
import BackToHome from "@/components/BackToHome"
// import ProblemSection from "@/components/EarlyAccess/ProblemSection"
import { useNavigate } from 'react-router-dom';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companyWebsite: string;
}

// interface ApiErrorResponse {
//   success: false;
//   message: string;
//   data: {
//     errorType: 'DUPLICATE_ENTRY' | 'VALIDATION_ERROR' | 'CONNECTION_ERROR' | 
//                 'CONFIGURATION_ERROR' | 'GHL_API_ERROR' | 'UNEXPECTED_ERROR';
//     field?: string;
//   };
// }

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(10, 'Invalid phone number')
    .max(20, 'Invalid phone number'),
  company: Yup.string()
    .min(2, 'Company name must be at least 2 characters')
    .required('Company name is required'),
  jobTitle: Yup.string()
    .min(2, 'Job title must be at least 2 characters')
    .required('Job title is required'),
  companyWebsite: Yup.string()
    .matches(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.[a-zA-Z]{2,}.*$/,
      'Please enter a valid website (e.g., yourcompany.com, www.yourcompany.com, or https://yourcompany.com)'
    )
    .required('Company website is required'),
});

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  companyWebsite: '',
};

function EarlyAccessPage() {

  const [isLoading, setIsLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setIsLoading(true);
    try {
      const response = await Axios.post('/lead/create', values);

      if (response.status === 200 || response.status === 201) {
        // Store referrer info and redirect to thank you page
        localStorage.setItem('referrerInfo', JSON.stringify({
          name: values.name,
          email: values.email
        }));

        resetForm();
        SuccessNotification('Thank you for your interest in Early Access. We will be in touch soon.');
        // setSubmitted(true);
        navigate('/refer', {
          state: {
            referrerName: values.name,
            referrerEmail: values.email
          }
        });
      } else {
        ErrorNotification('Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);

      // Network error (no response from server)
      if (!error.response) {
        const errorMessage = error.message?.includes('timeout')
          ? 'Request timed out. Please try again.'
          : error.message?.includes('Network Error')
          ? 'Network error. Please check your connection and try again.'
          : 'Unable to connect to our servers. Please check your internet connection and try again.';
        ErrorNotification(errorMessage);
        return;
      }

      // Extract error details from backend response
      const errorType = error.response?.data?.data?.errorType;
      const backendMessage = error.response?.data?.message;
      const statusCode = error.response?.status;
      let errorMessage = 'Something went wrong. Please try again.';

      // Helper function to detect duplicate contact errors in message
      const isDuplicateError = (message: string | undefined): boolean => {
        if (!message) return false;
        const lowerMessage = message.toLowerCase();
        return (
          lowerMessage.includes('duplicated contacts') ||
          lowerMessage.includes('duplicate contact') ||
          lowerMessage.includes('does not allow duplicated') ||
          lowerMessage.includes('already exists') ||
          lowerMessage.includes('already registered')
        );
      };

      // Prioritize duplicate error detection - check message content first regardless of errorType
      // This handles cases where backend returns GHL_API_ERROR but message indicates duplicate
      if (isDuplicateError(backendMessage) || statusCode === 409) {
        errorMessage = "It looks like you've already registered. Please check your email for early access details.";
        ErrorNotification(errorMessage);
        return;
      }

      // Handle specific error types according to backend error structure
      switch (errorType) {
        case 'DUPLICATE_ENTRY':
          errorMessage = backendMessage || "It looks like you've already registered. Please check your email for early access details.";
          break;
        case 'VALIDATION_ERROR':
          errorMessage = backendMessage || 'Please provide valid information in all fields.';
          break;
        case 'CONNECTION_ERROR':
          errorMessage = "We're experiencing connectivity issues. Please try again in a moment.";
          break;
        case 'CONFIGURATION_ERROR':
          errorMessage = "We're experiencing technical difficulties. Our team has been notified. Please try again later.";
          break;
        case 'GHL_API_ERROR':
          // Replace generic backend GHL error messages with user-friendly alternatives
          // Common case: duplicate contact errors from GHL (status 500 often indicates this)
          if (statusCode === 500 || statusCode === 400) {
            errorMessage = "It looks like you've already registered. Please check your email for early access details.";
          } else {
            errorMessage = 'We encountered an issue processing your registration. Please try again or contact support if the problem persists.';
          }
          break;
        case 'UNEXPECTED_ERROR':
        default:
          errorMessage = backendMessage || 'Something went wrong. Please try again or contact support if the issue persists.';
          break;
      }

      ErrorNotification(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Crown,
      title: "Exclusive Access",
      description: "Be among the first 100 users worldwide"
    },
    {
      icon: Shield,
      title: "Free Trial",
      description: "Full platform access with no time limits"
    },
    {
      icon: Zap,
      title: "First Mover Advantage",
      description: "Build systematic trust before competition"
    }
  ];

  // if (submitted) {
  //   return (
  //     <ThankYouPage />
  //   );
  // }

  return (
    <div className="bg-black py-8">
      <BackToHome
        textColor="text-white hover:text-gray-300"
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden py-8">
        {/* Background Abstract Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-white/3 opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 opacity-40 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Form */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="text-white border-white/30 mb-4 px-4 py-2">
                  Early Access Program
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                  Be first.
                  <br />
                  <span className="font-normal">Be trusted.</span>
                </h1>
                <p className="text-xl text-gray-300 font-light">
                  Join the exclusive group of executives building systematic trust before anyone else.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isValid, dirty }) => (
                    <Form className="space-y-2">
                      <div className="grid grid-cols-1 gap-6">
                        <PremiumTextField
                          field="name"
                          label_text="Full Name"
                          placeholder="eg. John Doe"
                          type="text"
                          required
                          iconType="user"
                        />

                        <PremiumTextField
                          field="email"
                          label_text="Email Address"
                          placeholder="eg. john.doe@example.com"
                          type="email"
                          required
                          iconType="email"
                        />
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <PremiumTextField
                          field="phone"
                          label_text="Phone Number"
                          placeholder="eg. +1234567890"
                          type="tel"
                          required
                          iconType="phone"
                        />

                        <PremiumTextField
                          field="company"
                          label_text="Company Name"
                          placeholder="eg. Google, Apple, etc."
                          type="text"
                          required
                          iconType="briefcase"
                        />
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <PremiumTextField
                          field="jobTitle"
                          label_text="Job Title"
                          placeholder="eg. CEO, CTO, etc."
                          type="text"
                          required
                          iconType="briefcase"
                        />

                        <PremiumTextField
                          field="companyWebsite"
                          label_text="Company Website"
                          placeholder="eg. https://www.google.com"
                          type="text"
                          required
                          iconType="globe"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={!isValid || !dirty || isLoading}
                        className="w-full bg-white text-black hover:bg-gray-100 py-3 text-lg font-medium group transition-all duration-300"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </div>
                        ) : (
                          <>
                            Reserve My Spot
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-400 text-center">
                        No credit card required • Limited spots available
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-light mb-6 text-white">Why early access matters</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  By joining early, you'll shape the future of relationship intelligence while gaining
                  an unfair advantage in your market by systematizing trust before anyone else.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-medium mb-3 text-white">Proven Results</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Built on 15+ years of executive relationship expertise and tested with top CEOs.
                </p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-light text-white">100–300</p>
                    <p className="text-xs text-gray-400">C-Level referrals per year</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-white">6–7 figure</p>
                    <p className="text-xs text-gray-400">deals closed consistently</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-white">15+ years</p>
                    <p className="text-xs text-gray-400">executive expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ProblemSection /> */}
    </div>
  )
}

export default EarlyAccessPage