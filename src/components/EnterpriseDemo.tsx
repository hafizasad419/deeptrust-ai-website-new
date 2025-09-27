// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Badge } from '@/components/ui/badge';
// import { Card } from '@/components/ui/card';
// import { ArrowLeft, CheckCircle, Building, User, Mail, Phone, Globe, Linkedin, ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const EnterpriseDemo = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     title: '',
//     email: '',
//     mobile: '',
//     company: '',
//     companyUrl: '',
//     linkedinUrl: ''
//   });
//   const [errors, setErrors] = useState<any>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = () => {
//     const newErrors: any = {};
    
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.title.trim()) newErrors.title = 'Title is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }
//     if (!formData.mobile.trim()) {
//       newErrors.mobile = 'Mobile number is required';
//     } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.mobile.replace(/[\s\-\(\)]/g, ''))) {
//       newErrors.mobile = 'Please enter a valid mobile number';
//     }

//     return newErrors;
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors(prev: any => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Simulate API call (replace with actual backend integration)
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       console.log('Enterprise demo registration:', formData);
      
//       // Redirect to Calendly
//       window.location.href = 'https://calendly.com/natekievman/ai-accelerator-exploratory-call';
      
//     } catch (error) {
//       console.error('Form submission error:', error);
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             <div className="flex items-center space-x-4">
//               <Button
//                 variant="ghost"
//                 onClick={() => navigate('/')}
//                 className="flex items-center space-x-2 text-gray-600 hover:text-black"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span>Back to Home</span>
//               </Button>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">DT</span>
//               </div>
//               <div>
//                 <h1 className="font-light text-lg lg:text-xl text-black font-inter">DeepTrust AI</h1>
//                 <p className="text-xs text-gray-600 -mt-1 font-light font-inter">Enterprise Demo</p>
//               </div>
//             </div>
            
//             <div></div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="py-12 lg:py-24">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8">
//           {/* Page Header */}
//           <div className="text-center mb-12">
//             <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
//               Enterprise Demo Request
//             </Badge>
//             <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight font-inter tracking-tight">
//               Let's explore how DeepTrust AI
//               <br />
//               <span className="font-extralight">transforms your business.</span>
//             </h1>
//             <p className="text-xl text-gray-600 font-light font-inter max-w-2xl mx-auto">
//               Schedule a personalized demo to see how our relationship intelligence platform 
//               can drive systematic trust building and revenue growth for your organization.
//             </p>
//           </div>

//           {/* Benefits Grid */}
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <User className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-medium text-black mb-2 font-inter">Personalized Demo</h3>
//               <p className="text-gray-600 text-sm font-inter">
//                 Custom walkthrough tailored to your specific use cases and industry requirements.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Building className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-lg font-medium text-black mb-2 font-inter">Enterprise Solutions</h3>
//               <p className="text-gray-600 text-sm font-inter">
//                 Discuss enterprise features, integrations, and implementation strategies.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="w-8 h-8 text-purple-600" />
//               </div>
//               <h3 className="text-lg font-medium text-black mb-2 font-inter">ROI Analysis</h3>
//               <p className="text-gray-600 text-sm font-inter">
//                 Get a custom ROI projection based on your current relationship management processes.
//               </p>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <Card 
//           variant="outline"
//           className="bg-white p-8 lg:p-12 shadow-xl border border-gray-100">
//             <div className="mb-8">
//               <h2 className="text-2xl lg:text-3xl font-light text-black mb-4 font-inter">
//                 Complete your information
//               </h2>
//               <p className="text-gray-600 font-inter">
//                 Please provide your details below. We'll use this information to prepare a customized demo 
//                 that addresses your specific needs and challenges.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Fields */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 font-inter">
//                     First Name <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="firstName"
//                     type="text"
//                     value={formData.firstName}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('firstName', e.target.value)}
//                     className={`mt-1 font-inter ${errors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
//                     placeholder="Enter your first name"
//                   />
//                   {errors.firstName && (
//                     <p className="mt-1 text-xs text-red-500 font-inter">{errors.firstName}</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <Label 
//                   variant="outline"
//                   htmlFor="lastName" className="text-sm font-medium text-gray-700 font-inter">
//                     Last Name <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="lastName"
//                     type="text"
//                     value={formData.lastName}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('lastName', e.target.value)}
//                     className={`mt-1 font-inter ${errors.lastName ? 'border-red-500 focus:border-red-500' : ''}`}
//                     placeholder="Enter your last name"
//                   />
//                   {errors.lastName && (
//                     <p className="mt-1 text-xs text-red-500 font-inter">{errors.lastName}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Title and Email */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label 
//                   variant="outline"
//                   htmlFor="title" className="text-sm font-medium text-gray-700 font-inter">
//                     Job Title <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="title"
//                     type="text"
//                     value={formData.title}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
//                     className={`mt-1 font-inter ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
//                     placeholder="e.g., CEO, VP of Sales, Director"
//                   />
//                   {errors.title && (
//                     <p className="mt-1 text-xs text-red-500 font-inter">{errors.title}</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <Label htmlFor="email" className="text-sm font-medium text-gray-700 font-inter">
//                     Work Email <span className="text-red-500">*</span>
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
//                       className={`mt-1 pl-10 font-inter ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
//                       placeholder="your.email@company.com"
//                     />
//                     <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
//                   </div>
//                   {errors.email && (
//                     <p className="mt-1 text-xs text-red-500 font-inter">{errors.email}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Mobile and Company */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="mobile" className="text-sm font-medium text-gray-700 font-inter">
//                     Mobile Number <span className="text-red-500">*</span>
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="mobile"
//                       type="tel"
//                       value={formData.mobile}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('mobile', e.target.value)}
//                       className={`mt-1 pl-10 font-inter ${errors.mobile ? 'border-red-500 focus:border-red-500' : ''}`}
//                       placeholder="+1 (555) 123-4567"
//                     />
//                     <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
//                   </div>
//                   {errors.mobile && (
//                     <p className="mt-1 text-xs text-red-500 font-inter">{errors.mobile}</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <Label htmlFor="company" className="text-sm font-medium text-gray-700 font-inter">
//                     Company Name
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="company"
//                       type="text"
//                       value={formData.company}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('company', e.target.value)}
//                       className="mt-1 pl-10 font-inter"
//                       placeholder="Your Company Name"
//                     />
//                     <Building className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* URLs */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="companyUrl" className="text-sm font-medium text-gray-700 font-inter">
//                     Company Website
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="companyUrl"
//                       type="url"
//                       value={formData.companyUrl}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('companyUrl', e.target.value)}
//                       className="mt-1 pl-10 font-inter"
//                       placeholder="https://yourcompany.com"
//                     />
//                     <Globe className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
//                   </div>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="linkedinUrl" className="text-sm font-medium text-gray-700 font-inter">
//                     LinkedIn Profile
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="linkedinUrl"
//                       type="url"
//                       value={formData.linkedinUrl}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('linkedinUrl', e.target.value)}
//                       className="mt-1 pl-10 font-inter"
//                       placeholder="https://linkedin.com/in/yourprofile"
//                     />
//                     <Linkedin className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-6">
//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg font-medium group transition-all duration-300 font-inter"
//                 >
//                   {isSubmitting ? (
//                     'Scheduling Your Demo...'
//                   ) : (
//                     <>
//                       Schedule Enterprise Demo
//                       <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
//                     </>
//                   )}
//                 </Button>
                
//                 <p className="text-center text-xs text-gray-500 mt-4 font-inter">
//                   <span className="text-red-500">*</span> Required fields • 
//                   You'll be redirected to our calendar to select your preferred time slot
//                 </p>
//               </div>
//             </form>
//           </Card>

//           {/* What to Expect */}
//           <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
//             <h3 className="text-xl font-medium text-black mb-6 text-center font-inter">
//               What to expect in your enterprise demo
//             </h3>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900 font-inter">Platform Overview</p>
//                     <p className="text-xs text-gray-600 font-inter">Complete walkthrough of DeepTrust AI features and capabilities</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900 font-inter">Custom Use Cases</p>
//                     <p className="text-xs text-gray-600 font-inter">Examples tailored to your industry and relationship management needs</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900 font-inter">Integration Discussion</p>
//                     <p className="text-xs text-gray-600 font-inter">How DeepTrust AI integrates with your existing CRM and workflow</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900 font-inter">ROI Projection</p>
//                     <p className="text-xs text-gray-600 font-inter">Estimated return on investment based on your current processes</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900 font-inter">Implementation Plan</p>
//                     <p className="text-xs text-gray-600 font-inter">Timeline and steps for deploying DeepTrust AI in your organization</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900 font-inter">Q&A Session</p>
//                     <p className="text-xs text-gray-600 font-inter">Dedicated time to address your specific questions and concerns</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default EnterpriseDemo;