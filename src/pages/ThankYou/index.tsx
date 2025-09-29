import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Axios from '@/api';
import { SuccessNotification, ErrorNotification } from '@/utils/toast';
import PremiumTextField from '@/components/FormikFields/PremiumTextField';
import { FiUsers, FiCheckCircle, FiStar, FiAward} from 'react-icons/fi';
import BackToHome from "@/components/BackToHome"

interface ReferralFriend {
  firstName: string;
  lastName: string;
  email: string;
}

interface ThankYouPageProps { }

const referralValidationSchema = Yup.object({
  referrerEmail: Yup.string()
    .email('Invalid email address')
    .required('Your email is required to process referrals'),
  referrerName: Yup.string().required('Your name is required to process referrals'),
  friends: Yup.array().test('at-least-3-friends', 'Please add at least 3 friends to unlock VIP status', function (friends) {
    if (!friends) return false;
    const validFriends = friends.filter(friend =>
      friend.firstName && friend.firstName.trim() &&
      friend.lastName && friend.lastName.trim() &&
      friend.email && friend.email.trim()
    );
    return validFriends.length >= 3;
  })
});

const getInitialValues = (friendCount: number = 3, referrerEmail: string = '', referrerName: string = '') => ({
  referrerEmail,
  referrerName,
  friends: Array.from({ length: friendCount }, () => ({ firstName: '', lastName: '', email: '' }))
});

function ThankYouPage({ }: ThankYouPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [referrerInfo, setReferrerInfo] = useState<{ name: string, email: string } | null>(null);
  const [vipStatusUnlocked, setVipStatusUnlocked] = useState(false);
  const [submittedReferrals, setSubmittedReferrals] = useState(0);
  const [friendCount] = useState(3);

  useEffect(() => {
    // Get referrer info from location state or localStorage
    const state = location.state as { referrerName?: string; referrerEmail?: string } | null;
    const storedReferrer = localStorage.getItem('referrerInfo');

    if (state?.referrerName && state?.referrerEmail) {
      setReferrerInfo({ name: state.referrerName, email: state.referrerEmail });
      localStorage.setItem('referrerInfo', JSON.stringify({ name: state.referrerName, email: state.referrerEmail }));
    } else if (storedReferrer) {
      setReferrerInfo(JSON.parse(storedReferrer));
    }
  }, [location.state]);

  const handleReferralSubmit = async (values: { referrerEmail: string; referrerName: string; friends: ReferralFriend[] }, { resetForm }: any) => {
    setIsLoading(true);
    try {
      // Filter out empty friends
      const validFriends = values.friends.filter(friend =>
        friend.firstName.trim() && friend.lastName.trim() && friend.email.trim()
      );

      if (validFriends.length === 0) {
        ErrorNotification('Please add at least one friend to refer.');
        return;
      }

      const response = await Axios.post('/lead/refer', {
        friends: validFriends,
        referrerEmail: values.referrerEmail,
        referrerName: values.referrerName
      });

      if (response.status === 200 || response.status === 201) {
        const result = response.data?.data;
        const successfulReferrals = result?.successfulReferrals || validFriends.length;
        const vipGranted = result?.vipStatusGranted || false;

        setSubmittedReferrals(prev => prev + successfulReferrals);

        if (vipGranted) {
          setVipStatusUnlocked(true);
          SuccessNotification('🎉 VIP Status Unlocked! Your friends have been successfully referred! We will be in touch soon.');

          // Clear referrer info and redirect to welcome page
          localStorage.removeItem('referrerInfo');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          SuccessNotification('Your friends have been successfully referred! We will be in touch soon.');
        }

        resetForm();
      } else {
        ErrorNotification('Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Referral submission error:', error);

      let errorMessage = 'Something went wrong. Please try again.';

      if (error.response) {
        const status = error.response.status;
        const serverMessage = error.response.data?.message;

        switch (status) {
          case 400:
            errorMessage = serverMessage || 'Please check your information and try again.';
            break;
          case 409:
            errorMessage = serverMessage || 'One or more of your friends are already registered.';
            break;
          case 422:
            errorMessage = serverMessage || 'Please provide valid information for all friends.';
            break;
          default:
            errorMessage = serverMessage || 'Something went wrong. Please try again.';
        }
      }

      ErrorNotification(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getVIPStatus = (activeFriendCount: number) => {
    // Only show VIP status if it's actually unlocked after submission
    if (vipStatusUnlocked) {
      if (submittedReferrals >= 5) return { status: 'Premium VIP', icon: FiAward };
      if (submittedReferrals >= 3) return { status: 'VIP', icon: FiStar };
    }

    // Show potential status based on current form
    if (activeFriendCount >= 5) return { status: 'Potential Premium VIP', icon: FiAward };
    if (activeFriendCount >= 3) return { status: 'Potential VIP', icon: FiStar };
    return { status: 'Standard', icon: FiUsers };
  };





  return (
    <>
      <BackToHome />
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
              <FiCheckCircle className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl lg:text-4xl font-light text-black mb-4 leading-tight font-inter tracking-tight">
              🎉 Welcome to DeepTrust AI!
            </h1>

            <p className="text-lg text-gray-600 font-light mb-6 max-w-2xl mx-auto">
              You're officially on the Early Access list!
            </p>
          </div>


          {/* Mastermind Notice */}
          <div className="text-center mb-6">
            <div className="bg-black/5 border-l-4 border-black p-4 rounded-lg max-w-2xl mx-auto">
              <strong className="text-black block mb-1 text-sm">Important:</strong>
              <span className="text-gray-700 text-sm">
                The person with the most referrals will get early access to our <span className="font-medium text-black">$25K private mastermind</span>.
              </span>
            </div>
          </div>

          {/* Referral Form */}
          <div className="bg-black rounded-xl p-6 border border-gray-800 shadow-sm">
            <div className="text-center mb-6">
              <FiUsers className="w-8 h-8 text-white mx-auto mb-3" />
              <h2 className="text-xl font-medium text-white mb-2">To qualify for VIP, refer 3 friends</h2>
              <p className="text-gray-300 mb-4 text-sm">Share DeepTrust AI with your professional network</p>
            </div>

            <Formik
              initialValues={getInitialValues(friendCount, referrerInfo?.email || '', referrerInfo?.name || '')}
              validationSchema={referralValidationSchema}
              onSubmit={handleReferralSubmit}
            >
              {({ values, isValid, dirty }) => {
                const activeFriendCount = values.friends.filter(friend =>
                  friend.firstName.trim() && friend.lastName.trim() && friend.email.trim()
                ).length;

                // Debug logging
                console.log('Form state:', { isValid, dirty, activeFriendCount, values: values.friends });

                const vipStatus = getVIPStatus(activeFriendCount);
                const IconComponent = vipStatus.icon;

                return (
                  <Form className="space-y-6">
                    {/* Referrer Email */}
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <PremiumTextField
                        field="referrerEmail"
                        label_text="Your Email Address"
                        placeholder="Enter your email address"
                        type="email"
                        required
                        iconType="email"
                      />
                    </div>


                    {/* Referrer Name */}
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <PremiumTextField
                        field="referrerName"
                        label_text="Your Name"
                        placeholder="Enter your name"
                        type="text"
                        required
                        iconType="user"
                      />
                    </div>

                    {values.friends.map((_, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20">
                        <h3 className="text-base font-medium text-white mb-3 flex items-center">
                          <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-black mr-2">
                            {index + 1}
                          </span>
                          Friend {index + 1}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-3">
                          <PremiumTextField
                            field={`friends.${index}.firstName`}
                            label_text="First Name"
                            placeholder="Enter first name"
                            type="text"
                            required
                            iconType="user"
                          />

                          <PremiumTextField
                            field={`friends.${index}.lastName`}
                            label_text="Last Name"
                            placeholder="Enter last name"
                            type="text"
                            required
                            iconType="user"
                          />
                        </div>

                        <PremiumTextField
                          field={`friends.${index}.email`}
                          label_text="Email Address"
                          placeholder="Enter email address"
                          type="email"
                          required
                          iconType="email"
                        />
                      </div>
                    ))}


                    {/* Status Display */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="w-5 h-5 mr-2 text-white" />
                          <div>
                            <h3 className="text-base font-medium text-white">
                              {vipStatusUnlocked ? `${submittedReferrals} Friends Referred` : `${activeFriendCount} Friends Ready to Refer`}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {vipStatusUnlocked
                                ? 'VIP Status Unlocked! 🎉'
                                : activeFriendCount >= 3
                                  ? 'Ready to unlock VIP status!'
                                  : activeFriendCount < 3
                                    ? `${3 - activeFriendCount} more to unlock VIP`
                                    : 'Ready to unlock VIP status!'
                              }
                            </p>
                          </div>
                        </div>

                        {vipStatusUnlocked && (
                          <div className="flex items-center text-white">
                            <FiAward className="w-4 h-4 mr-1" />
                            <span className="font-medium text-sm">VIP</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid || isLoading || activeFriendCount < 3}
                      className="w-full bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Referrals...
                        </div>
                      ) : (
                        activeFriendCount >= 3
                          ? `Refer ${activeFriendCount} Friend${activeFriendCount !== 1 ? 's' : ''} & Unlock VIP Access`
                          : `Add ${3 - activeFriendCount} More Friend${3 - activeFriendCount !== 1 ? 's' : ''} to Unlock VIP`
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>

          {/* Skip Option */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-black transition-colors duration-200 underline text-sm"
            >
              Skip for now (you can refer friends later)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYouPage;
