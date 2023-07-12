import { FormEvent, useEffect, useMemo, useState } from 'react';
import Button from 'src/core/components/button/button';
import Feedback from 'src/core/components/feedback/feedback';
import Form from 'src/core/components/form/form';
import Grid from 'src/core/components/grid/grid';
import InputGroup from 'src/core/components/input-group/input-group';
import useForm from 'src/core/hooks/use-form';
import useSubmit from 'src/core/hooks/use-submit';
import classes from './demo.module.scss';

const FormExamplesDemo = () => {
  const [validated, setValidated] = useState(false);
  const [validated1, setValidated1] = useState(false);
  const [validatedTooltip, setValidatedTooltip] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleSubmitTooltip = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidatedTooltip(true);
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmitControlled = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated1(true);
  };
  const handleSubmitHook = (values: any, errors: any) => {
    window.alert(`Submit: ${values.firstName} ${values.lastName}`);
  };

  useEffect(() => {
    if (validated1) {
      window.alert(`Submit: ${firstName} ${lastName}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated1]);

  const initValues = useMemo(() => ({ firstName: '', lastName: '', gender: '', term: undefined }), []);
  const {
    fieldProps,
    errors,
    handleSubmit: onSubmitHook,
  } = useForm<{
    firstName?: string;
    lastName?: string;
    gender?: string;
    term?: boolean;
  }>({ initialValues: initValues });

  return (
    <div>
      <h1>Forms demo</h1>
      <div>
        <div className={classes['bs-demo-bookmark']} id="validation"></div>
        <h4>
          Validation <a href="#validation">#</a>
        </h4>
        <p className="my-1">
          Using <code>Feedback component</code>, <code>validated</code> prop on <code>Form</code>, and{' '}
          <code>feedbackType</code> on <code>FormControl</code>.
        </p>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="basic"></div>
        <h4>
          Basic form <a href="#basic">#</a>
        </h4>
        <Form className="g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
          <Grid row>
            <Grid md={4}>
              <Form.Label htmlFor="validationCustom01" className="form-label">
                First name
              </Form.Label>
              <Form.Control id="validationCustom01" defaultValue="Mark" required />
              <Feedback type="is-valid">Looks good!</Feedback>
            </Grid>
            <Grid md={4}>
              <Form.Label htmlFor="validationCustom02" className="form-label">
                Last name
              </Form.Label>
              <Form.Control id="validationCustom02" defaultValue="Otto" required />
              <Feedback type="is-valid">Looks good!</Feedback>
            </Grid>
            <Grid md={4}>
              <Form.Label htmlFor="validationCustomUsername" className="form-label">
                Username
              </Form.Label>
              <InputGroup className="has-validation">
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <Feedback type="is-invalid">Please choose a username.</Feedback>
              </InputGroup>
            </Grid>
            <Grid md={6}>
              <Form.Label htmlFor="validationCustom03" className="form-label">
                City
              </Form.Label>
              <Form.Control id="validationCustom03" required />
              <Feedback type="is-invalid">Please provide a valid city.</Feedback>
            </Grid>
            <Grid md={3}>
              <Form.Label htmlFor="validationCustom04" className="form-label">
                State
              </Form.Label>
              <Form.Select id="validationCustom04" required defaultValue={3}>
                <Form.Select.Option disabled value="1">
                  Choose...
                </Form.Select.Option>
                <Form.Select.Option value={1}>1</Form.Select.Option>
                <Form.Select.Option value={2}>2</Form.Select.Option>
                <Form.Select.Option value={3}>3</Form.Select.Option>
              </Form.Select>
              <Feedback type="is-invalid">Please select a valid state.</Feedback>
            </Grid>
            <Grid md={3}>
              <Form.Label htmlFor="validationCustom05" className="form-label">
                Zip
              </Form.Label>
              <Form.Control id="validationCustom05" required />
              <Feedback type="is-invalid">Please provide a valid zip.</Feedback>
            </Grid>
            <Grid md={12}>
              <Form.Check>
                <Form.Check.Input id="invalidCheck" required />
                <Form.Check.Label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </Form.Check.Label>
                <Feedback type="is-invalid">You must agree before submitting.</Feedback>
              </Form.Check>
            </Grid>
            <Grid md={12}>
              <Button color="primary" type="submit">
                Submit form
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="tooltip"></div>
        <h4>
          Tooltip <a href="#tooltip">#</a>
        </h4>
        <p className="my-1">
          Using tooltip feedback by using <code>tooltip</code> on <code>Feedback</code>. Should set outside element
          position to relative.
        </p>
        <Form className="g-3 needs-validation" noValidate validated={validatedTooltip} onSubmit={handleSubmitTooltip}>
          <Grid row>
            <Grid md={4} className="position-relative">
              <Form.Label htmlFor="validationCustom01" className="form-label">
                First name
              </Form.Label>
              <Form.Control id="validationCustom01" defaultValue="Mark" required />
              <Feedback tooltip type="is-valid">
                Looks good!
              </Feedback>
            </Grid>
            <Grid md={4} className="position-relative">
              <Form.Label htmlFor="validationCustom02" className="form-label">
                Last name
              </Form.Label>
              <Form.Control id="validationCustom02" defaultValue="Otto" required />
              <Feedback tooltip type="is-valid">
                Looks good!
              </Feedback>
            </Grid>
            <Grid md={12} className="mt-2">
              <Button color="primary" type="submit">
                Submit form
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="controlled"></div>
        <h4>
          Controlled <a href="#controlled">#</a>
        </h4>
        <Form className="g-3 needs-validation" noValidate validated={validated1} onSubmit={handleSubmitControlled}>
          <Grid row>
            <Grid md={4}>
              <Form.Label htmlFor="validationCustom01" className="form-label">
                First name
              </Form.Label>
              <Form.Control
                id="validationCustom01"
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)}
                required
              />
              <Feedback type="is-valid">Looks good!</Feedback>
            </Grid>
            <Grid md={4}>
              <Form.Label htmlFor="validationCustom02" className="form-label">
                Last name
              </Form.Label>
              <Form.Control
                id="validationCustom02"
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)}
                required
              />
              <Feedback type="is-valid">Looks good!</Feedback>
            </Grid>

            <Grid md={12} className="mt-2">
              <Button color="primary" type="submit">
                Submit form
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="hook"></div>
        <h4>
          Using hook <a href="#hook">#</a>
        </h4>
        <p className="my-1">
          Using <code>useForm</code> hook for handling.
        </p>
        <Form className="g-3 needs-validation" noValidate onSubmit={onSubmitHook(handleSubmitHook)}>
          <Grid row>
            <Grid md={4}>
              <Form.Label htmlFor="firstName" className="form-label">
                First name
              </Form.Label>
              <Form.Control
                id="firstName"
                {...fieldProps('firstName', { maxLength: 7, required: true })}
                feedbackType={errors['firstName'] ? 'is-invalid' : errors['firstName'] === '' ? 'is-valid' : undefined}
                className={errors['firstName'] ? 'was-validated' : ''}
              />
              {errors['firstName'] === 'required' && <Feedback type="is-invalid">Required</Feedback>}
              {errors['firstName'] === 'maxLength' && <Feedback type="is-invalid">Exceed 7</Feedback>}
            </Grid>
            <Grid md={4}>
              <Form.Label htmlFor="lastName" className="form-label">
                Last name
              </Form.Label>
              <Form.Control
                id="lastName"
                {...fieldProps('lastName', { required: true })}
                feedbackType={errors['lastName'] ? 'is-invalid' : errors['lastName'] === '' ? 'is-valid' : undefined}
              />
              {errors['lastName'] === 'required' && <Feedback type="is-invalid">Required</Feedback>}
            </Grid>
            <Grid md={4}>
              <Form.Label htmlFor="gender" className="form-label">
                Gender
              </Form.Label>
              <Form.Select
                id="gender"
                feedbackType={errors['gender'] ? 'is-invalid' : errors['gender'] === '' ? 'is-valid' : undefined}
                {...fieldProps('gender', { required: true })}
              >
                <Form.Select.Option value="">None</Form.Select.Option>
                <Form.Select.Option value="male">Male</Form.Select.Option>
                <Form.Select.Option value="female">Female</Form.Select.Option>
              </Form.Select>
              {errors['gender'] === 'required' && <Feedback type="is-invalid">Required</Feedback>}
            </Grid>
            <Grid md={4}>
              <Form.Check id="term">
                <Form.Check.Input
                  {...fieldProps('term', { required: true })}
                  id="term"
                  feedbackType={errors['term'] ? 'is-invalid' : errors['term'] === '' ? 'is-valid' : undefined}
                />
                <Form.Check.Label className="form-check-label" htmlFor="term">
                  Agree to terms and conditions
                </Form.Check.Label>
                {errors['term'] === 'required' && <Feedback type="is-invalid">Required</Feedback>}
              </Form.Check>
            </Grid>

            <Grid md={12} className="mt-2">
              <Button color="primary" type="submit">
                Submit form
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default FormExamplesDemo;
