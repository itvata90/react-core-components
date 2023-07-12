import Container from 'src/core/components/container/container';
import Nav from 'src/core/components/nav/nav';
import Navbar from 'src/core/components/navbar/navbar';
import classes from './demo-page-layout.module.scss';

const DemoPageHeader = () => {
  return (
    <Navbar
      background="primary"
      className={`fixed-top ${classes['demo-page-layout-header']}`}
      expand="lg"
      variant="dark"
    >
      <Container className={`${classes['demo-page-layout-gutter']} m-0 px-4`}>
        <Navbar.Brand as="a">
          <img src={'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg'} alt="Bootstrap" height="30" />{' '}
          DemoPage
        </Navbar.Brand>
        <Navbar.Toggle for="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav navbar className="me-auto">
            <Nav.Item>
              <Nav.Link href="#components" active>
                Page 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#components">Page 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#components">Page 3</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav navbar className="ms-auto">
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DemoPageHeader;
