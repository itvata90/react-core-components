import FormControl from 'src/core/components/form-control/form-control';
import FormLabel from 'src/core/components/form-label/form-label';
import classes from './demo.module.scss';

const FormControlDemo = () => {
  return (
    <div>
      <h1>Form control</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <div className="mb-3">
          <FormLabel htmlFor="exampleFormControlInput1">Email address</FormLabel>
          <FormControl
            type="email"
            id="exampleFormControlInput1"
            style={{ maxWidth: 350 }}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <FormLabel htmlFor="exampleFormControlTextarea1">Example textarea</FormLabel>
          <FormControl as="textarea" id="exampleFormControlTextarea1" style={{ maxWidth: 350 }} rows={3} />
        </div>
      </div>

      <div>
        <div className={classes['bs-demo-bookmark']} id="sizing"></div>
        <h4>
          Sizing <a href="#sizing">#</a>
        </h4>

        <FormControl
          id="exampleFormControlSizeSm"
          placeholder="small form control"
          size="sm"
          style={{ maxWidth: 350 }}
          className="mb-1"
        />
        <FormControl
          id="exampleFormControlSizeDefault"
          className="mb-1"
          style={{ maxWidth: 350 }}
          placeholder="default form control"
        />
        <FormControl
          id="exampleFormControlSizeLg"
          placeholder="large form control"
          className="mb-1"
          style={{ maxWidth: 350 }}
          size="lg"
        />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="others"></div>
        <h4>
          Others <a href="#others">#</a>
        </h4>
        <h6>Disabled</h6>
        <p className="my-1">
          Using <code>disabled</code> prop
        </p>
        <FormControl
          id="exampleFormControlSizeDisabled"
          placeholder="Disabled"
          size="sm"
          className="mb-1"
          style={{ maxWidth: 350 }}
          disabled
        />
        <h6>Read only</h6>
        <p className="my-1">
          Using <code>readOnly</code> prop
        </p>
        <FormControl
          id="exampleFormControlSizeReadOnly"
          className="mb-1"
          placeholder="Read only"
          style={{ maxWidth: 350 }}
          readOnly
        />
        <h6>Read only plaintext</h6>
        <p className="my-1">
          Using <code>variant</code> prop
        </p>
        <FormControl
          id="exampleFormControlPlaintext"
          placeholder="plaintext"
          readOnly
          style={{ maxWidth: 350 }}
          variant="plaintext"
        />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="types"></div>
        <h4>
          Types <a href="#types">#</a>
        </h4>
        <h6>Password</h6>
        <FormControl
          id="exampleFormControlPassword"
          placeholder="Password"
          className="mb-1"
          style={{ maxWidth: 350 }}
          type="password"
        />
        <h6>File input</h6>
        <FormControl
          id="exampleFormControlFile"
          placeholder="Choose"
          className="mb-1"
          type="file"
          style={{ maxWidth: 350 }}
        />
        <h6>Color</h6>
        <FormControl id="exampleFormControlColor" className="mb-1" type="color" style={{ maxWidth: 50 }} />
        <h6>Number</h6>
        <FormControl id="exampleFormControlNumber" className="mb-1" type="number" style={{ maxWidth: 350 }} />
        <h6>Date</h6>
        <FormControl id="exampleFormControlDate" className="mb-1" type="date" style={{ maxWidth: 350 }} />
        <h6>Email</h6>
        <FormControl id="exampleFormControlEmail" className="mb-1" type="email" style={{ maxWidth: 350 }} />
        <h6>Datetime</h6>
        <FormControl id="exampleFormControlDateTime" className="mb-1" type="datetime-local" style={{ maxWidth: 350 }} />
        <FormControl id="exampleFormControlTime" className="mb-1" type="time" style={{ maxWidth: 350 }} />
        <FormControl id="exampleFormControlWeek" className="mb-1" type="week" style={{ maxWidth: 350 }} />
        <FormControl id="exampleFormControlMonth" className="mb-1" type="month" style={{ maxWidth: 350 }} />
      </div>
    </div>
  );
};

export default FormControlDemo;
