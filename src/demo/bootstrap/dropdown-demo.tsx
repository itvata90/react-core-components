import ButtonGroup from 'src/core/components/button-group/button-group';
import Button from 'src/core/components/button/button';
import Dropdown from 'src/core/components/dropdown/dropdown';
import { Color } from 'src/core/interfaces/components';
import Stack from 'src/core/components/stack/stack';
import classes from './demo.module.scss';

const DropdownDemo = () => {
  return (
    <div>
      <h1>Dropdown</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="examples"></div>
        <h4>
          Examples <a href="#examples">#</a>
        </h4>
        <h6>Single button</h6>
        <p className="mt-2 mb-1">
          Using <code>as</code> prop for rendering item as <code>button</code>
        </p>
        <Dropdown>
          <Dropdown.Toggle color="primary">Dropdown button</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p className="mt-2 mb-1">
          Or <code>a</code>
        </p>
        <Dropdown>
          <Dropdown.Toggle color="primary">Dropdown link</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h6>Split button</h6>
        <p className="mt-2 mb-1">
          Using <code>split</code> prop on <code>Dropdown.Toggle</code> and <code>as</code> prop on{' '}
          <code>Dropdown</code> for rendering as <code>ButtonGroup</code> element
        </p>
        {['primary', 'secondary', 'danger', 'warning', 'info'].map((color) => (
          <Dropdown key={color} as={ButtonGroup} className="me-1">
            <Button color={color as Color}>{color}</Button>
            <Dropdown.Toggle split color={color as Color}></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="sizes"></div>
        <h4>
          Sizing <a href="#sizes">#</a>
        </h4>
        <Dropdown className="me-1" as={ButtonGroup}>
          <Button size="lg" color="primary">
            Large
          </Button>
          <Dropdown.Toggle split color="primary"></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="me-1" as={ButtonGroup}>
          <Button size="sm" color="primary">
            small
          </Button>
          <Dropdown.Toggle split color="primary"></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="directions"></div>
        <h4>
          Directions <a href="#directions">#</a>
        </h4>
        <h6>
          Centered by using <code>centered</code> prop
        </h6>
        <Dropdown className="me-1" as={ButtonGroup} centered>
          <Button color="primary"> Center </Button>
          <Dropdown.Toggle split color="primary"></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h6>
          Drop up, down, start, end by using <code>drop</code> prop
        </h6>
        <Stack direction="row" spacing={1}>
          {['up', 'down', 'start', 'end'].map((drop) => (
            <Dropdown key={drop} drop={drop as any} className="me-1" as={ButtonGroup}>
              <Button color="primary">{drop}</Button>
              <Dropdown.Toggle split color="primary"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="menu-alignment"></div>
        <h4>
          Menu alignment <a href="#menu-alignment">#</a>
        </h4>
        <h6>
          Using <code>align</code> prop on <code>Dropdown.Menu</code>. Including <em>start</em> and <em>end</em>
        </h6>
        <Stack direction="row" spacing={1}>
          {['start', 'end'].map((align) => (
            <Dropdown key={align} className="me-1" as={ButtonGroup}>
              <Button color="secondary">{align}</Button>
              <Dropdown.Toggle color="secondary" split></Dropdown.Toggle>
              <Dropdown.Menu align={align as any}>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </Stack>
        <h6>Responsive alignment</h6>
        <Dropdown className="me-1" as={ButtonGroup}>
          <Button color="secondary">Left-aligned but right aligned when large screen</Button>
          <Dropdown.Toggle color="secondary" split></Dropdown.Toggle>
          <Dropdown.Menu align={{ lg: 'end' } as any}>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="menu-content"></div>
        <h4>
          Menu content <a href="#menu-content">#</a>
        </h4>
        <h6>Headers</h6>
        <Dropdown.Menu className="d-block mb-1 position-static">
          <Dropdown.Header>Header</Dropdown.Header>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else here</Dropdown.Item>
        </Dropdown.Menu>
        <h6>Dividers</h6>
        <Dropdown.Menu className="d-block mb-1 position-static">
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as="button">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="dropdown-options"></div>
        <h4>
          Dropdown options <a href="#dropdown-options">#</a>
        </h4>
        <h6>
          Use <code>menuReference</code> and <code>menuOffset</code> props on <code>Dropdown.Toggle</code> for changing
          menu location
        </h6>
        <Dropdown className="me-1" as={ButtonGroup} centered>
          <Button color="secondary">Parent reference</Button>
          <Dropdown.Toggle color="secondary" split menuReference="parent"></Dropdown.Toggle>
          <Dropdown.Menu align={{ lg: 'end' } as any}>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="me-1" as={ButtonGroup} centered>
          <Button color="secondary">Toggle reference</Button>
          <Dropdown.Toggle color="secondary" split menuReference="toggle"></Dropdown.Toggle>
          <Dropdown.Menu align={{ lg: 'end' } as any}>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} centered>
          <Button color="secondary">Offset top: 10px, left: 20px reference element</Button>
          <Dropdown.Toggle color="secondary" split menuOffset={{ top: 10, left: 20 }}></Dropdown.Toggle>
          <Dropdown.Menu align={{ lg: 'end' } as any}>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="autoclose-behavior"></div>
        <h4>
          Auto close behavior <a href="#autoclose-behavior">#</a>
        </h4>
        <h6>
          Using <code>autoClose</code> prop on <code>Dropdown.Toggle</code>
        </h6>
        {['default', 'inside', 'outside', 'manual'].map((autoClose) => (
          <Dropdown key={autoClose} className="me-1" as={ButtonGroup}>
            <Button color="secondary">{autoClose}</Button>
            <Dropdown.Toggle
              color="secondary"
              split
              autoClose={(autoClose === 'default' ? true : autoClose === 'manual' ? false : autoClose) as any}
            />
            <Dropdown.Menu align={{ lg: 'end' } as any}>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </div>
    </div>
  );
};

export default DropdownDemo;
