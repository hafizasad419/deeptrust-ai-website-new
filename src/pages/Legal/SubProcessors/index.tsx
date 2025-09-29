import LegalPage from '../../../components/Layout/LegalPage';
import { subProcessorsData, subProcessorsMeta } from './data';

const SubProcessors = () => {
  return (
    <LegalPage 
      title={subProcessorsMeta.title}
      sections={subProcessorsData}
    />
  );
};

export default SubProcessors;
