import LegalPage from '../../../components/Layout/LegalPage';
import { exportComplianceData, exportComplianceMeta } from './data';

const ExportCompliance = () => {
  return (
    <LegalPage 
      title={exportComplianceMeta.title}
      sections={exportComplianceData}
    />
  );
};

export default ExportCompliance;
