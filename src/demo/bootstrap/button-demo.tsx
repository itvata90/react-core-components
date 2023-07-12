import Button from 'src/core/components/button/button';
import Stack from 'src/core/components/stack/stack';
import classes from './demo.module.scss';

const ButtonDemo = () => {
  return (
    <div>
      <h1>Button</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="examples"></div>
        <h4>
          Examples <a href="#examples">#</a>
        </h4>
        <Stack direction="row" spacing={2}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
          <Button color="light">Light</Button>
          <Button color="dark">Dark</Button>
          <Button color="link">Link</Button>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="button-tags"></div>
        <h4>
          Button Tags <a href="#button-tags">#</a>
        </h4>
        <Stack direction="row" spacing={2}>
          <Button as="a" href="#" color="secondary">
            Link
          </Button>
          <Button type="submit" color="secondary">
            Button
          </Button>
          <Button as="input" type="button" color="secondary">
            Button
          </Button>
          <Button as="input" type="submit" color="secondary">
            Submit
          </Button>
          <Button as="input" type="reset" color="secondary">
            Reset
          </Button>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="outline-buttons"></div>
        <h4>
          Outline buttons <a href="#outline-buttons">#</a>
        </h4>
        <Stack direction="row" spacing={2}>
          <Button variant="outline" color="primary">
            Primary
          </Button>
          <Button variant="outline" color="secondary">
            Secondary
          </Button>
          <Button variant="outline" color="success">
            Success
          </Button>
          <Button variant="outline" color="danger">
            Danger
          </Button>
          <Button variant="outline" color="warning">
            Warning
          </Button>
          <Button variant="outline" color="info">
            Info
          </Button>
          <Button variant="outline" color="light">
            Light
          </Button>
          <Button variant="outline" color="dark">
            Dark
          </Button>
          <Button variant="outline" color="link">
            Link
          </Button>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="sizes"></div>
        <h4>
          Sizes <a href="#sizes">#</a>
        </h4>
        <h6>Large</h6>
        <Stack direction="row" spacing={2}>
          <Button size="lg" color="primary">
            Large button
          </Button>
          <Button size="lg" color="secondary">
            Large button
          </Button>
        </Stack>
        <h6>Small</h6>
        <Stack direction="row" spacing={2}>
          <Button size="sm" color="primary">
            Small button
          </Button>
          <Button size="sm" color="secondary">
            Small button
          </Button>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="disabled"></div>
        <h4>
          Disabled <a href="#disabled">#</a>
        </h4>

        <Stack direction="row" spacing={2}>
          <Button disabled>Disabled</Button>
          <Button color="secondary" disabled>
            Disabled
          </Button>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="active"></div>
        <h4>
          Active <a href="#active">#</a>
        </h4>

        <Stack direction="row" spacing={2}>
          <Button color="primary">Normal</Button>
          <Button color="primary" active>
            Active
          </Button>
          <Button color="primary" disabled>
            Disabled
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default ButtonDemo;
