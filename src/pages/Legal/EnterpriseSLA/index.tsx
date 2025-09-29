import LegalPage from '../../../components/Layout/LegalPage';
import { enterpriseSLAData, enterpriseSLAMeta } from './data';

const EnterpriseSLA = () => {
  return (
    <LegalPage 
      title={enterpriseSLAMeta.title}
      sections={enterpriseSLAData}
    />
  );
};

export default EnterpriseSLA;
