import FormSelect from 'src/core/components/form-select/form-select';
import classes from './demo.module.scss';

const FormSelectDemo = () => {
  const options1 = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
  ];
  return (
    <div>
      <h1>Select</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="default"></div>
        <h4>
          Default <a href="#default">#</a>
        </h4>
        <FormSelect style={{ maxWidth: 350 }} options={options1} autoClose="inside" />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="sizing"></div>
        <h4>
          Sizing <a href="#sizing">#</a>
        </h4>
        <FormSelect
          size="sm"
          style={{ maxWidth: 350 }}
          className="mb-1"
          id=".form-select-sm example"
          options={options1}
        />
        <FormSelect style={{ maxWidth: 350 }} className="mb-1" id=".form-select-md example" options={options1} />
        <FormSelect size="lg" style={{ maxWidth: 350 }} id=".form-select-lg example" options={options1} />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="multiple"></div>
        <h4>
          Multiple <a href="#multiple">#</a>
        </h4>
        <FormSelect multiple style={{ maxWidth: 350 }} options={options1} />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="disabled"></div>
        <h4>
          Disabled <a href="#disabled">#</a>
        </h4>
        <FormSelect disabled style={{ maxWidth: 350 }} options={options1} />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="disabled"></div>
        <h4>
          Native <a href="#native">#</a>
        </h4>
        <FormSelect.Native style={{ maxWidth: 350 }}>
          <FormSelect.Option>Open this select menu</FormSelect.Option>
          <FormSelect.Option value="1">One</FormSelect.Option>
          <FormSelect.Option value="2">Two</FormSelect.Option>
          <FormSelect.Option value="3">Three</FormSelect.Option>
        </FormSelect.Native>
      </div>
    </div>
  );
};

export default FormSelectDemo;
