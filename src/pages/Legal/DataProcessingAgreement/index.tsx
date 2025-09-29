import LegalPage from '../../../components/Layout/LegalPage';
import { dataProcessingAgreementData, dataProcessingAgreementMeta } from './data';

const DataProcessingAgreement = () => {
  return (
    <LegalPage 
      title={dataProcessingAgreementMeta.title}
      effectiveDate={dataProcessingAgreementMeta.effectiveDate}
      sections={dataProcessingAgreementData}
    />
  );
};

export default DataProcessingAgreement;
