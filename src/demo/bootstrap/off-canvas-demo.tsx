import { useState } from 'react';
import Alert from 'src/core/components/alert/alert';
import Button from 'src/core/components/button/button';
import CloseButton from 'src/core/components/close-button/close-button';
import Modal from 'src/core/components/modal/modal';
import OffCanvas from 'src/core/components/off-canvas/off-canvas';
import Stack from 'src/core/components/stack/stack';
import classes from './demo.module.scss';

const OffCanvasDemo = () => {
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    live: false,
    horizontal: false,
    scrolling: false,
    static: false,
    responsive: false,
    top: false,
    start: false,
    end: false,
    bottom: false,
  });
  const handleShow = (name: string, value: boolean) => () => {
    setShow({ ...show, [name]: value });
  };
  return (
    <div>
      <h1>Modal</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <div className="border rounded bg-secondary overflow-hidden">
          <OffCanvas className="position-static d-block show" style={{ maxWidth: 550 }}>
            <OffCanvas.Header>
              <OffCanvas.Title>OffCanvas</OffCanvas.Title>
              <Button type="button" className="btn-close" data-bs-dismiss="OffCanvas" aria-label="Close" />
            </OffCanvas.Header>
            <OffCanvas.Body>
              <p>OffCanvas body text goes here.</p>
            </OffCanvas.Body>
          </OffCanvas>
        </div>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="live-demo"></div>
        <h4>
          Live demo <a href="#live-demo">#</a>
        </h4>
        <Button onClick={handleShow('live', true)} color="primary">
          Show
        </Button>
        <OffCanvas show={show['live']} onClose={handleShow('live', false)}>
          <OffCanvas.Header>
            <OffCanvas.Title>OffCanvas</OffCanvas.Title>
            <Button onClick={handleShow('live', false)} type="button" className="btn-close" aria-label="Close" />
          </OffCanvas.Header>
          <OffCanvas.Body>
            <p>OffCanvas body text goes here.</p>
          </OffCanvas.Body>
        </OffCanvas>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="static-backdrop"></div>
        <h4>
          Static backdrop <a href="#static-backdrop">#</a>
        </h4>
        <p className="mb-1 mt-1">
          When backdrop is set to static, the modal will not close when clicking outside of it. Using{' '}
          <code>backdrop</code> prop.
        </p>
        <Button onClick={handleShow('static', true)} color="primary">
          Show with static backdrop
        </Button>
        <OffCanvas show={show['static']} onClose={handleShow('static', false)} backdrop="static">
          <OffCanvas.Header>
            <OffCanvas.Title>OffCanvas</OffCanvas.Title>
            <Button onClick={handleShow('static', false)} type="button" className="btn-close" aria-label="Close" />
          </OffCanvas.Header>
          <OffCanvas.Body>
            <p>OffCanvas body text goes here.</p>
          </OffCanvas.Body>
        </OffCanvas>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="placement"></div>
        <h4>
          Placement <a href="#placement">#</a>
        </h4>
        <p className="mb-1 mt-1">
          Using <code>placement</code> props.
        </p>

        <Stack direction="row" spacing={1}>
          {['start', 'end', 'top', 'bottom'].map((placement) => (
            <div key={placement}>
              <Button onClick={handleShow(placement, true)} color="primary">
                {placement}
              </Button>
              <OffCanvas placement={placement as any} show={show[placement]} onClose={handleShow(placement, false)}>
                <OffCanvas.Header>
                  <OffCanvas.Title>OffCanvas</OffCanvas.Title>
                  {/* <Button
                    onClick={handleShow(placement, false)}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  /> */}
                  <CloseButton dismiss="offcanvas" />
                </OffCanvas.Header>
                <OffCanvas.Body>
                  <p>OffCanvas body text goes here.</p>
                </OffCanvas.Body>
              </OffCanvas>
            </div>
          ))}
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="responsive"></div>
        <h4>
          Responsive <a href="#responsive">#</a>
        </h4>
        <p className="mb-1 mt-1">
          Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above
          that breakpoint, the contents within will behave as usual. For example, <code>responsive = lg</code> hides
          content in an offcanvas below the lg breakpoint, but shows the content above the <code>lg</code> breakpoint.
        </p>
        <Button className="d-lg-none my-2" onClick={handleShow('responsive', true)} color="primary">
          Show with responsive
        </Button>
        <Alert className="d-none d-lg-block my-2" color="info">
          Resize your browser to show the responsive offcanvas toggle.
        </Alert>
        <OffCanvas responsive="lg" show={show['responsive']} onClose={handleShow('responsive', false)}>
          <OffCanvas.Header>
            <OffCanvas.Title>OffCanvas</OffCanvas.Title>
            <Button onClick={handleShow('responsive', false)} type="button" className="btn-close" aria-label="Close" />
          </OffCanvas.Header>
          <OffCanvas.Body>
            <p>OffCanvas body text goes here.</p>
          </OffCanvas.Body>
        </OffCanvas>
      </div>
    </div>
  );
};

export default OffCanvasDemo;
