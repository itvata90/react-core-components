import { lazy, Suspense, useState } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Collapse from 'src/core/components/collapse/collapse';
import Container from 'src/core/components/container/container';
import Nav from 'src/core/components/nav/nav';
import Spinner from 'src/core/components/spinner/spinner';
import OffCanvasDemo from 'src/demo/bootstrap/off-canvas-demo';
import ProgressDemo from 'src/demo/bootstrap/progress-demo';
import TableDemo from 'src/demo/bootstrap/table-demo';
import classes from './demo.module.scss';

const AccordionDemo = lazy(() => import('./accordion-demo'));
const AlertDemo = lazy(() => import('./alert-demo'));
const BadgeDemo = lazy(() => import('./badge-demo'));
const ButtonDemo = lazy(() => import('./button-demo'));
const ButtonGroupDemo = lazy(() => import('./button-group-demo'));
const CardDemo = lazy(() => import('./card-demo'));
const CollapseDemo = lazy(() => import('./collapse-demo'));
const DropdownDemo = lazy(() => import('./dropdown-demo'));
const FormCheckDemo = lazy(() => import('./form-check-demo'));
const FormControlDemo = lazy(() => import('./form-control-demo'));
const FormExamplesDemo = lazy(() => import('./form-examples-demo'));
const FormRangeDemo = lazy(() => import('./form-range-demo'));
const FormSelectDemo = lazy(() => import('./form-select-demo'));
const InputGroupDemo = lazy(() => import('./input-group-demo'));
const ModalDemo = lazy(() => import('./modal-demo'));
const NavbarDemo = lazy(() => import('./navbar-demo'));
const NavDemo = lazy(() => import('./nav-demo'));
const SpinnerDemo = lazy(() => import('./spinner-demo'));
const ToastDemo = lazy(() => import('./toast-demo'));

const Main = () => {
  return (
    <div className={`${classes['bs-demo-main']} mt-2`}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="accordion" element={<AccordionDemo />} />
          <Route path="alert" element={<AlertDemo />} />
          <Route path="badge" element={<BadgeDemo />} />
          <Route path="button" element={<ButtonDemo />} />
          <Route path="button-group" element={<ButtonGroupDemo />} />
          <Route path="card" element={<CardDemo />} />
          <Route path="collapse" element={<CollapseDemo />} />
          <Route path="dropdown" element={<DropdownDemo />} />
          <Route path="modal" element={<ModalDemo />} />
          <Route path="off-canvas" element={<OffCanvasDemo />} />
          <Route path="navbar" element={<NavbarDemo />} />
          <Route path="navs-and-tabs" element={<NavDemo />} />
          <Route path="progress" element={<ProgressDemo />} />
          <Route path="spinner" element={<SpinnerDemo />} />
          <Route path="table" element={<TableDemo />} />
          <Route path="toast" element={<ToastDemo />} />
          <Route path="form-control" element={<FormControlDemo />} />
          <Route path="form-select" element={<FormSelectDemo />} />
          <Route path="form-check" element={<FormCheckDemo />} />
          <Route path="form-range" element={<FormRangeDemo />} />
          <Route path="input-group" element={<InputGroupDemo />} />
          <Route path="form-examples" element={<FormExamplesDemo />} />
          <Route path="*" element={<Navigate to="accordion" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

const Sidebar = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    components: true,
    forms: true,
  });
  const handleToggle = (name: string | number) => () => {
    setExpanded({ ...expanded, [name]: !expanded[name] });
  };
  return (
    <div className={`${classes['bs-demo-menu']}`} tabIndex={-1} id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
      <div className="offcanvas-body">
        <Nav orientation="vertical" scrollable style={{ height: 'calc(100vh - 150px)' }}>
          <Nav.Item>
            <strong onClick={handleToggle('components')} style={{ cursor: 'pointer' }}>
              Components
            </strong>
            <Collapse in={expanded['components']}>
              <Nav orientation="vertical">
                <Nav.Item>
                  <Nav.Link as={Link} to="accordion" className="text-dark">
                    Accordion
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="alert" className="text-dark">
                    Alert
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="badge" className="text-dark">
                    Badge
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="button" className="text-dark">
                    Button
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="button-group" className="text-dark">
                    Button Group
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="card" className="text-dark">
                    Card
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="collapse" className="text-dark">
                    Collapse
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="dropdown" className="text-dark">
                    Dropdown
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="modal" className="text-dark">
                    Modal
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="navbar" className="text-dark">
                    Navbar
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="navs-and-tabs" className="text-dark">
                    Navs and tabs
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="off-canvas" className="text-dark">
                    Offcanvas
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="progress" className="text-dark">
                    Progress
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="spinner" className="text-dark">
                    Spinner
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="table" className="text-dark">
                    Table
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="toast" className="text-dark">
                    Toast
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Collapse>
          </Nav.Item>
          <Nav.Item>
            <strong onClick={handleToggle('forms')} style={{ cursor: 'pointer' }}>
              Forms
            </strong>
            <Collapse in={expanded['forms']}>
              <Nav orientation="vertical">
                <Nav.Item>
                  <Nav.Link as={Link} to="form-control" className="text-dark">
                    Form control
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="form-select" className="text-dark">
                    Select
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="form-check" className="text-dark">
                    Checks and radios
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="form-range" className="text-dark">
                    Range
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="input-group" className="text-dark">
                    Input group
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="form-examples" className="text-dark">
                    Using forms
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Collapse>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div>
      <Container className={`${classes['bs-demo-layout']} ${classes['bs-demo-gutter']} p-0 m-0`}>
        <Sidebar />
        <Main />
      </Container>
    </div>
  );
};

export default index;
