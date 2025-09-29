import LegalPage from '../../../components/Layout/LegalPage';
import { accessibilityData, accessibilityMeta } from './data';

const Accessibility = () => {
  return (
    <LegalPage 
      title={accessibilityMeta.title}
      sections={accessibilityData}
    />
  );
};

export default Accessibility;
