import FormRange from 'src/core/components/form-range/form-range';
import classes from './demo.module.scss';

const FormRangeDemo = () => {
  return (
    <div>
      <h1>Form control</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <FormRange />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="disabled"></div>
        <h4>
          Disabled <a href="#disabled">#</a>
        </h4>
        <FormRange disabled />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="min-max"></div>
        <h4>
          Min and max <a href="#min-max">#</a>
        </h4>
        <FormRange min={0} max={5} />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="step"></div>
        <h4>
          Steps <a href="#step">#</a>
        </h4>
        <FormRange min={0} max={5} step={0.5} />
      </div>
    </div>
  );
};

export default FormRangeDemo;
