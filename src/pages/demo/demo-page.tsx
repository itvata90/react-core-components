import DemoPageLayout from 'src/layouts/demo-page-layout/demo-page-layout';
import { FormProvider } from 'src/core/hooks/form-context';
import DemoPageIndex from 'src/shared/demo-page/demo-page-index';

const DemoPage = () => {
  return (
    <FormProvider>
      <DemoPageLayout>
        <DemoPageIndex />
      </DemoPageLayout>
    </FormProvider>
  );
};

export default DemoPage;
