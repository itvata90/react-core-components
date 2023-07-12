import Container from 'src/core/components/container/container';
import Navbar from 'src/core/components/navbar/navbar';
import classes from './default-layout.module.scss';

const DefaultHeader = () => {
  return (
    <Navbar background="light" className={`fixed-top w-100 ${classes['bs-demo-header']}`} expand="lg">
      <Container className=" mx-3">
        <Navbar.Brand as="a">
          <img
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap"
            width="30"
            height="24"
          />
          {'   '}
          Bootstrap Demo
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default DefaultHeader;
