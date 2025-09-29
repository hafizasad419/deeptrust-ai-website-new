import LegalPage from '../../../components/Layout/LegalPage';
import { cookiePolicyData, cookiePolicyMeta } from './data';

const CookiePolicy = () => {
  return (
    <LegalPage 
      title={cookiePolicyMeta.title}
      effectiveDate={cookiePolicyMeta.effectiveDate}
      sections={cookiePolicyData}
    />
  );
};

export default CookiePolicy;
