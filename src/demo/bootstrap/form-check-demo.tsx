import FormCheck from 'src/core/components/form-check/form-check';
import classes from './demo.module.scss';

const FormCheckDemo = () => {
  return (
    <div>
      <h1>Form control</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="checks"></div>
        <h4>
          Checks <a href="#checks">#</a>
        </h4>
        <FormCheck label="Default checkbox" />
        <FormCheck label="Checked checkbox" defaultChecked />

        <h6>Indeterminate</h6>
        <FormCheck label="Default checkbox">
          <FormCheck.Input value="" id="flexCheckIndeterminate" />
          <FormCheck.Label htmlFor="flexCheckIndeterminate">Indeterminate checkbox</FormCheck.Label>
        </FormCheck>
        <h6>Disabled</h6>
        <FormCheck label="Default checkbox" disabled />
        <FormCheck label="Checked checkbox" defaultChecked disabled />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="radios"></div>
        <h4>
          Radios <a href="#radios">#</a>
        </h4>
        <FormCheck type="radio" label="Default radio" />
        <FormCheck type="radio" label="Checked radio" defaultChecked />

        <h6>Disabled</h6>
        <FormCheck type="radio" label="Default radio" disabled />
        <FormCheck type="radio" label="Checked radio" defaultChecked disabled />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="switch"></div>
        <h4>
          Switch <a href="#switch">#</a>
        </h4>
        <FormCheck type="switch" label="Default switch" />
        <FormCheck type="switch" label="Checked switch" defaultChecked />

        <h6>Disabled</h6>
        <FormCheck type="switch" label="Default switch" disabled />
        <FormCheck type="switch" label="Checked switch" defaultChecked disabled />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="inline"></div>
        <h4>
          Inline <a href="#inline">#</a>
        </h4>
        <FormCheck label="Default switch" inline />
        <FormCheck label="Checked switch" defaultChecked inline />
        <FormCheck label="Default switch" disabled inline />
        <FormCheck label="Checked switch" defaultChecked disabled inline />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="reverse"></div>
        <h4>
          Reverse <a href="#reverse">#</a>
        </h4>
        <FormCheck label="Default switch" reverse />
        <FormCheck label="Checked switch" defaultChecked reverse />
        <FormCheck label="Default switch" disabled reverse />
        <FormCheck label="Checked switch" defaultChecked disabled reverse />
      </div>
    </div>
  );
};

export default FormCheckDemo;
