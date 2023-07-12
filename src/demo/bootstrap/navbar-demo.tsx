import Container from 'src/core/components/container/container';
import Nav from 'src/core/components/nav/nav';
import Navbar from 'src/core/components/navbar/navbar';
import classes from './demo.module.scss';

const NavbarDemo = () => {
  return (
    <div>
      <h1>Navbar</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <Navbar background="light">
          <Container fluid>
            <Navbar.Brand as="a">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="content"></div>
        <h4>
          Content <a href="#content">#</a>
        </h4>
        <h6>Brand</h6>
        <Navbar background="light">
          <Container fluid>
            <Navbar.Brand as="a">
              <img
                src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                alt="Bootstrap"
                width="30"
                height="24"
              />{' '}
              {'   '}
              Navbar
            </Navbar.Brand>
          </Container>
        </Navbar>

        <h6>Nav</h6>
        <p className="mt-1 mmb-1">
          Using <code>navbar</code> prop on <code>Nav</code> for styling nav.
        </p>
        <Navbar background="light">
          <Container fluid>
            <Navbar.Brand as="a">
              <img
                src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                alt="Bootstrap"
                width="30"
                height="24"
              />
            </Navbar.Brand>
            <Nav className="me-auto" navbar>
              <Nav.Link href="#features" className="me-1">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="color"></div>
        <h4>
          Color <a href="#color">#</a>
        </h4>
        <p className="mt-1 mmb-1">
          Using <code>background</code>, and <code>variant</code> props for changing background and text color
        </p>
        {['primary', 'secondary', 'dark'].map((background) => (
          <Navbar key={background} background={background as any} variant="dark">
            <Container fluid>
              <Navbar.Brand as="a">Navbar</Navbar.Brand>
              <Nav className="me-auto" navbar>
                <Nav.Link href="#features" className="me-1">
                  Features
                </Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav navbar>
                <Nav.Link href="#deets" className="me-1">
                  More deets
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        ))}
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="responsive"></div>
        <h4>
          Responsive <a href="#responsive">#</a>
        </h4>
        <p className="mt-1 mmb-1">
          Using <code>Navbar.Toggle</code>
          {', '}
          <code>Navbar.Collapse</code>
          {', '}
          and <code>expand</code> prop
        </p>

        <Navbar background="light" expand="md">
          <Container fluid>
            <Navbar.Brand as="a">Navbar</Navbar.Brand>
            <Navbar.Toggle for="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarDemo;
