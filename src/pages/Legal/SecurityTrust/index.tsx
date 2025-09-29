import LegalPage from '../../../components/Layout/LegalPage';
import { securityTrustData, securityTrustMeta } from './data';

const SecurityTrust = () => {
  return (
    <LegalPage 
      title={securityTrustMeta.title}
      sections={securityTrustData}
    />
  );
};

export default SecurityTrust;
