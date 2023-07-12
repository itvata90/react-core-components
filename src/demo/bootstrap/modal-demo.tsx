import { useState } from 'react';
import Button from 'src/core/components/button/button';
import CloseButton from 'src/core/components/close-button/close-button';
import Modal from 'src/core/components/modal/modal';
import classes from './demo.module.scss';

const ModalDemo = () => {
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    live: false,
    horizontal: false,
    scrolling: false,
    static: false,
    centered: false,
    fullscreen: false,
  });
  const [showSizes, setShowSize] = useState({ open: false, size: '' });
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
        <Modal className="position-static d-block" dialogClassName="p-0 m-0">
          <Modal.Header>
            <h5 className="modal-title">Modal title</h5>
            <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="secondary">Close</Button>
            <Button color="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="live-demo"></div>
        <h4>
          Live demo <a href="#live-demo">#</a>
        </h4>
        <Button onClick={handleShow('live', true)} color="primary">
          Show
        </Button>
        <Modal
          className="show"
          open={show['live']}
          onClose={handleShow('live', false)}
          style={{ zIndex: 1211 }}
          animation
        >
          <Modal.Header>
            <h5 className="modal-title">Modal title</h5>
            <CloseButton dismiss="modal" />
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShow('live', false)} color="secondary">
              Close
            </Button>
            <Button color="primary" onClick={handleShow('live', false)}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="static-backdrop"></div>
        <h4>
          Static backdrop <a href="#static-backdrop">#</a>
        </h4>
        <p className="mb-1 mt-1">
          When backdrop is set to static, the modal will not close when clicking outside of it. Using{' '}
          <code>staticBackdrop</code> prop.
        </p>
        <Button onClick={handleShow('static', true)} color="primary">
          Show
        </Button>
        <Modal open={show['static']} onClose={handleShow('static', false)} style={{ zIndex: 1211 }} backdrop="static">
          <Modal.Header>
            <h5 className="modal-title">Modal title</h5>
            <Button onClick={handleShow('static', false)} type="button" className="btn-close" aria-label="Close" />
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShow('static', false)} color="secondary">
              Close
            </Button>
            <Button onClick={handleShow('static', false)} color="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="scrolling"></div>
        <h4>
          Scrolling long content<a href="#scrolling">#</a>
        </h4>
        <p className="mb-1 mt-1">
          Using <code>scrollable</code> prop.
        </p>
        <Button onClick={handleShow('scrolling', true)} color="primary">
          Show
        </Button>
        <Modal open={show['scrolling']} onClose={handleShow('scrolling', false)} style={{ zIndex: 1211 }} scrollable>
          <Modal.Header>
            <h5 className="modal-title">Modal title</h5>
            <Button onClick={handleShow('scrolling', false)} type="button" className="btn-close" aria-label="Close" />
          </Modal.Header>
          <Modal.Body>
            <p style={{ marginBottom: 1500 }}>Modal body text goes here.</p>
            This content should appear at the bottom after you scroll.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShow('scrolling', false)} color="secondary">
              Close
            </Button>
            <Button onClick={handleShow('scrolling', false)} color="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <div className={classes['bs-demo-bookmark']} id="centered"></div>
        <h4>
          Vertically centered<a href="#centered">#</a>
        </h4>
        <h6>
          Using <code>centered</code> prop.
        </h6>
        <Button onClick={handleShow('centered', true)} color="primary">
          Show
        </Button>
        <Modal open={show['centered']} onClose={handleShow('centered', false)} centered>
          <Modal.Header>
            <h5 className="modal-title">Modal title</h5>
            <Button onClick={handleShow('centered', false)} type="button" className="btn-close" aria-label="Close" />
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShow('centered', false)} color="secondary">
              Close
            </Button>
            <Button onClick={handleShow('centered', false)} color="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <div className={classes['bs-demo-bookmark']} id="sizes"></div>
        <h4>
          Optional sizes<a href="#sizes">#</a>
        </h4>
        <h6>
          Using <code>size</code> prop.
        </h6>
        <Button onClick={() => setShowSize({ ...showSizes, size: 'xl', open: true })} className="me-1" color="primary">
          Show extra large
        </Button>
        <Button className="me-1" onClick={() => setShowSize({ ...showSizes, size: 'lg', open: true })} color="primary">
          Show large
        </Button>
        <Button className="me-1" onClick={() => setShowSize({ ...showSizes, size: 'sm', open: true })} color="primary">
          Show small
        </Button>
        <Modal
          open={showSizes['open']}
          onClose={() => setShowSize({ ...showSizes, size: 'sm', open: false })}
          style={{ zIndex: 1211 }}
          size={showSizes['size'] as any}
        >
          <Modal.Header>
            <h5 className="modal-title">Modal title</h5>
            <Button
              onClick={() => setShowSize({ ...showSizes, size: 'sm', open: false })}
              type="button"
              className="btn-close"
              aria-label="Close"
            />
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowSize({ ...showSizes, size: 'sm', open: false })} color="secondary">
              Close
            </Button>
            <Button color="primary" onClick={() => setShowSize({ ...showSizes, size: 'sm', open: false })}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="fullscreen"></div>
        <h4>
          Fullscreen<a href="#fullscreen">#</a>
        </h4>
        <h6>
          Using <code>fullscreen</code> prop.
        </h6>
        <Button onClick={handleShow('fullscreen', true)} className="me-1" color="primary">
          Show fullscreen
        </Button>
        <Modal
          open={show['fullscreen']}
          onClose={handleShow('fullscreen', false)}
          style={{ zIndex: 1211 }}
          animation
          fullscreen
        >
          <Modal.Header>
            <h5 className="modal-title">Modal title</h5>
            <Button onClick={handleShow('fullscreen', false)} type="button" className="btn-close" aria-label="Close" />
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShow('fullscreen', false)} color="secondary">
              Close
            </Button>
            <Button onClick={handleShow('fullscreen', false)} color="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalDemo;
