import Button from 'src/core/components/button/button';
import Spinner from 'src/core/components/spinner/spinner';
import classes from './demo.module.scss';

const SpinnerDemo = () => {
  return (
    <div>
      <h1>Spinner</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="border-spinner"></div>
        <h4>
          Border Spinner <a href="#border-spinner">#</a>
        </h4>
        <Spinner />
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="color"></div>
        <h4>
          Color <a href="#color">#</a>
        </h4>
        <p className="my-1">
          Using <code>color</code> prop
        </p>
        {['primary', 'secondary', 'danger', 'warning', 'success', 'info'].map((color) => (
          <Spinner key={color} color={color as any} className="me-2" />
        ))}
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="growing"></div>
        <h4>
          Growing spinner <a href="#growing">#</a>
        </h4>
        <p className="my-1">
          Using <code>variant</code> prop
        </p>
        {['primary', 'secondary', 'danger', 'warning', 'success', 'info'].map((color) => (
          <Spinner key={color} variant="grow" color={color as any} className="me-2" />
        ))}
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="sizes"></div>
        <h4>
          Sizes <a href="#sizes">#</a>
        </h4>
        <p className="my-1">
          Using <code>size</code> prop for sizing
        </p>
        {['sm', 'default'].map((size) => (
          <Spinner key={size} size={size !== 'default' ? size : ('' as any)} className="me-2" />
        ))}
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="buttons"></div>
        <h4>
          With buttons <a href="#buttons">#</a>
        </h4>

        <Button size="sm" disabled className="me-2">
          <Spinner />
        </Button>
        <Button size="sm" disabled>
          <Spinner variant="grow" />
        </Button>
      </div>
    </div>
  );
};

export default SpinnerDemo;
