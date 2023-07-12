import React from 'react';
import Form from 'src/core/components/form/form';
import Grid from 'src/core/components/grid/grid';
import useFormRedux from 'src/core/hooks/use-form-redux';

import DemoPageCustomerDetails from 'src/shared/demo-page/demo-page-customer-detail';
import DemoPageStepBar from 'src/shared/demo-page/demo-page-step-bar';
// import { setCustomer,  } from 'src/slices/demo-page-slice';

const DemoPageIndex = () => {
  // const dispatch = useAppDispatch();
  const { handleSubmit, resetForm } = useFormRedux({});
  return (
    <Form noValidate onSubmit={handleSubmit((values: any, errors: any) => {})} onReset={resetForm}>
      <Grid row className="m-0 p-0">
        <Grid xs={12} className="m-0 p-0">
          <DemoPageStepBar />
        </Grid>
        <Grid row className="m-0 p-0">
          <Grid xl={2} md={4} sm={4} xs={12}>
            <DemoPageCustomerDetails />
          </Grid>
          {/* <Grid item md={8} sm={8} xs={12}>
            <DemoPageMaterialSelection />
          </Grid>
          <Grid item xl={2} md={4} xs={12}>
            <DemoPageConfiguationCheck />
          </Grid> */}
        </Grid>
      </Grid>
    </Form>
  );
};

export default DemoPageIndex;
