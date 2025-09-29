import LegalPage from '../../../components/Layout/LegalPage';
import { termsOfServiceData, termsOfServiceMeta } from './data';

const TermsOfService = () => {
  return (
    <LegalPage 
      title={termsOfServiceMeta.title}
      effectiveDate={termsOfServiceMeta.effectiveDate}
      sections={termsOfServiceData}
    />
  );
};

export default TermsOfService;
