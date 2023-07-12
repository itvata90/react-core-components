import { Link, useLocation } from 'react-router-dom';
import Nav from 'src/core/components/nav/nav';
import classes from './default-layout.module.scss';

const DefaultSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div
      className={`${classes['default-layout-menu']}`}
      tabIndex={-1}
      id="offcanvasDark"
      aria-labelledby="offcanvasDarkLabel"
    >
      <div className="offcanvas-body">
        <Nav orientation="vertical" variant="pills">
          <Nav.Link as={Link} to="/" active={pathname === '/'}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/demo/bootstrap" active={pathname.includes('/demo/bootstrap')}>
            Bootstrap
          </Nav.Link>
          <Nav.Link as={Link} to="/demo/demo-page" active={pathname.includes('/demo/demo-page')}>
            Demo page
          </Nav.Link>
          <Nav.Link as={Link} to="/demo/management" active={pathname.includes('/demo/management')}>
            Management Demo
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default DefaultSidebar;
