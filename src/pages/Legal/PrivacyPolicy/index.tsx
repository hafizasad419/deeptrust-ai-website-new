import LegalPage from '../../../components/Layout/LegalPage';
import { privacyPolicyData, privacyPolicyMeta } from './data';

const PrivacyPolicy = () => {
  return (
    <LegalPage 
      title={privacyPolicyMeta.title}
      effectiveDate={privacyPolicyMeta.effectiveDate}
      sections={privacyPolicyData}
    />
  );
};

export default PrivacyPolicy;
