import Dropdown from 'src/core/components/dropdown/dropdown';
import Nav from 'src/core/components/nav/nav';
import classes from './demo.module.scss';

const NavDemo = () => {
  return (
    <div>
      <h1>Navs and tabs</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="base-nav"></div>
        <h4>
          Base nav <a href="#base-nav">#</a>
        </h4>
        <Nav>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </div>

      <div>
        <div className={classes['bs-demo-bookmark']} id="styles"></div>
        <h4>
          Styling <a href="#styles">#</a>
        </h4>
        <h6>Horizontal alignment</h6>
        <p className="my-1">
          Using <code>justifyContent</code> prop.
        </p>
        <Nav justifyContent="center">
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <h6>Vertical</h6>
        <p className="my-1">
          Using <code>orientation</code> prop.
        </p>
        <Nav orientation="vertical">
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <h6>Tabs and pills</h6>
        <p className="my-1">
          Using <code>variant</code> prop.
        </p>
        <Nav variant="tabs" className="mb-2">
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <Nav variant="pills">
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <h6>Fill and justify</h6>
        <p className="my-1">
          Using <code>fill</code> prop.
        </p>
        <Nav variant="pills" fill className="mb-2">
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <p className="my-1">
          Using <code>justified</code> prop.
        </p>
        <Nav variant="pills" justified>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="dropdown"></div>
        <h4>
          Using dropdown <a href="#dropdown">#</a>
        </h4>
        <Nav>
          <Nav.Link href="#" active>
            Active
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Item>
            <Dropdown className="me-1">
              <Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default NavDemo;
