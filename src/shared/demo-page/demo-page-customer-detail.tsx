import classes from './demo-page.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hook';
import { Customer } from 'src/interfaces/customer';
import Card from 'src/core/components/card/card';
import Stack from 'src/core/components/stack/stack';
import useFormRedux from 'src/core/hooks/use-form-redux';
import {
  HeaderField,
  RowTextField,
  RowTextFieldQuote,
  TitleField,
} from 'src/shared/demo-page/demo-page-small-input-with-label';
import Form from 'src/core/components/form/form';
import DashDivider from 'src/shared/demo-page/dash-divider';
import { setInitCustomerData, selectDemoPageState$, setCustomer } from 'src/slices/demo-page-slice';
import Feedback from 'src/core/components/feedback/feedback';

const DemoPageCustomerDetails = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDemoPageState$).loadingCustomerData;
  const customerData = useAppSelector(selectDemoPageState$).customerData;
  const [initialValues, setInitialValues] = useState<Customer>({});

  useEffect(() => {
    dispatch(setInitCustomerData());
  }, [dispatch]);

  useEffect(() => {
    setInitialValues(customerData[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  const values = useAppSelector(selectDemoPageState$).customer;
  const { errors, fieldProps } = useFormRedux<Customer>({
    storeValues: values,
    storeUpdateCallback: (newData: Customer) => dispatch(setCustomer(newData)),
    initialValues,
  });

  return (
    <>
      <Card
        style={{
          padding: '24px 16px 24px 24px',
          height: '100%',
          background: '#F5F5F5',
          borderRadius: 0,
        }}
        className="border-0"
      >
        <Stack spacing={1} direction="column">
          <h5
            style={{
              fontSize: '18px ',
              fontWeight: 700,
              fontFamily: 'Verdana',
              fontStyle: 'normal',
              lineHeight: '140%',
            }}
          >
            Customer Details
          </h5>
          <TitleField title="company information">
            <RowTextField
              label="Company"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    name="company"
                    {...(fieldProps('company', { required: true }) as any)}
                    feedbackType={!!errors['company'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['company']}</Feedback>
                </>
              }
            />
            <RowTextField
              label="Address"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    name="address"
                    {...(fieldProps('address', { required: true }) as any)}
                    feedbackType={!!errors['address'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['address']}</Feedback>
                </>
              }
            />
            <RowTextField
              label="City"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    name="city"
                    {...(fieldProps('city', { required: true }) as any)}
                    feedbackType={!!errors['city'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['city']}</Feedback>
                </>
              }
            />
            <RowTextField
              label="Postcode"
              children={
                <>
                  <Form.Control
                    type="number"
                    className={`${classes.numberNoSpin} ${classes.large}`}
                    name="postcode"
                    {...(fieldProps('postcode', { required: true }) as any)}
                    feedbackType={!!errors['postcode'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['postcode']}</Feedback>
                </>
              }
            />
            <RowTextField
              label="State"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    name="state"
                    {...(fieldProps('state', { required: true }) as any)}
                    feedbackType={!!errors['state'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['state']}</Feedback>
                </>
              }
            />
          </TitleField>

          <TitleField title="contact person">
            <RowTextField
              label="Name"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    name="name"
                    {...(fieldProps('name', { required: true }) as any)}
                    feedbackType={!!errors['name'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['name']}</Feedback>
                </>
              }
            />
            <RowTextField
              label="Phone"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    variant="outlined"
                    mask="+00 00 0000 0000"
                    name="phone"
                    {...(fieldProps('phone', {
                      required: true,
                    }) as any)}
                    feedbackType={!!errors['phone'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['phone']}</Feedback>
                </>
              }
            />
            <RowTextField
              label="Fax"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    variant="outlined"
                    mask="+00 00 0000 0000"
                    name="fax"
                    {...(fieldProps('fax', { required: true }) as any)}
                    feedbackType={!!errors['fax'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['fax']}</Feedback>
                </>
              }
            />
            <RowTextField
              label="Email"
              children={
                <>
                  <Form.Control
                    className={classes.large}
                    name="email"
                    {...(fieldProps('email', {
                      required: true,
                      isEmail: true,
                    }) as any)}
                    feedbackType={!!errors['email'] && 'is-invalid'}
                  />
                  <Feedback tooltip>{errors['email']}</Feedback>
                </>
              }
            />
          </TitleField>

          <div style={{ marginTop: '20px' }}>
            <DashDivider />
          </div>
          <HeaderField title="Quote" />

          <RowTextFieldQuote
            label="Purchase Order"
            children={
              <>
                <Form.Control
                  type="number"
                  className={`${classes.numberNoSpin} ${classes.medium}`}
                  name="purchase_order"
                  {...(fieldProps('purchase_order', { required: true }) as any)}
                  feedbackType={!!errors['purchase_order'] && 'is-invalid'}
                />
                <Feedback tooltip>{errors['purchase_order']}</Feedback>
              </>
            }
          />
          <RowTextFieldQuote
            label="Reference"
            children={
              <>
                <Form.Control
                  className={classes.medium}
                  name="reference"
                  {...(fieldProps('reference', { required: true }) as any)}
                  feedbackType={!!errors['reference'] && 'is-invalid'}
                />
                <Feedback tooltip>{errors['reference']}</Feedback>
              </>
            }
          />
          <RowTextFieldQuote
            label="Sales Rep ID"
            children={
              <>
                <Form.Control
                  type="number"
                  className={`${classes.numberNoSpin} ${classes.medium}`}
                  name="sales_rep_id"
                  {...(fieldProps('sales_rep_id', { required: true }) as any)}
                  feedbackType={!!errors['sales_rep_id'] && 'is-invalid'}
                />
                <Feedback tooltip>{errors['sales_rep_id']}</Feedback>
              </>
            }
          />
        </Stack>
      </Card>
    </>
  );
};

export default DemoPageCustomerDetails;
