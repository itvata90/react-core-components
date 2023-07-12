import { useState } from 'react';
import Button from 'src/core/components/button/button';
import FormSelect from 'src/core/components/form-select/form-select';
import { Placement } from 'src/core/interfaces/components';
import Toast from 'src/core/components/toast/toast';
import classes from './demo.module.scss';

const ToastDemo = () => {
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    live: false,
  });
  const [position, setPosition] = useState<Placement>({
    vertical: 'top',
    horizontal: 'left',
  });
  const handleShow = (name: string, value: boolean) => () => {
    setShow({ ...show, [name]: value });
  };
  return (
    <div>
      <h1>Toast</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="basic"></div>
        <h4>
          Basic <a href="#basic">#</a>
        </h4>
        <Toast containerClassName="position-static d-block" className="position-static d-block">
          <Toast.Header>
            <img src="https://via.placeholder.com/16" className="rounded me-2" alt="..." />
            <code className="me-auto">Bootstrap</code>
            <small>11 mins ago</small>
            <Button className="btn-close" data-bs-dismiss="toast" aria-label="Close"></Button>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="live-demo"></div>
        <h4>
          Live demo <a href="#live-demo">#</a>
        </h4>
        <Button onClick={handleShow('live', true)} className="mb-1">
          Show live toast
        </Button>
        <Toast open={show['live']} onClose={handleShow('live', false)}>
          <Toast.Header>
            <img src="https://via.placeholder.com/16" className="rounded me-2" alt="..." />
            <code className="me-auto">Bootstrap</code>
            <small>11 mins ago</small>
            <Button className="btn-close" data-bs-dismiss="toast" aria-label="Close"></Button>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="color"></div>
        <h4>
          Color <a href="#color">#</a>
        </h4>
        <p className="my-1">
          Using <code>color</code>{' '}
        </p>
        {['primary', 'secondary', 'danger', 'warning', 'success', 'info'].map((color) => (
          <Toast
            key={color}
            containerClassName="position-static d-block mb-1"
            className="position-static d-block"
            color={color as any}
          >
            <Toast.Header>
              <img src="https://via.placeholder.com/16" className="rounded me-2" alt="..." />
              <code className="me-auto">{color}</code>
              <small>11 mins ago</small>
              <Button className="btn-close" data-bs-dismiss="toast" aria-label="Close"></Button>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        ))}
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="placement"></div>
        <h4>
          Placement <a href="#placement">#</a>
        </h4>
        <p className="my-1">
          Using <code>color</code>{' '}
        </p>
        <FormSelect.Native title="Placement" className="mb-2" onChange={(event) => setPosition(event.target.value)}>
          <FormSelect.Option value={{ vertical: 'top', horizontal: 'left' }}>Top left</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'top', horizontal: 'center' }}>Top center</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'top', horizontal: 'right' }}>Top right</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'middle', horizontal: 'left' }}>Middle left</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'middle', horizontal: 'center' }}>Middle center</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'middle', horizontal: 'right' }}>Middle right</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'bottom', horizontal: 'left' }}>Bottom left</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'bottom', horizontal: 'center' }}>Bottom center</FormSelect.Option>
          <FormSelect.Option value={{ vertical: 'bottom', horizontal: 'right' }}>Bottom right</FormSelect.Option>
        </FormSelect.Native>
        <div style={{ height: 250 }} className="w-100 border rounded position-relative bg-secondary">
          <Toast className="d-block" placement={position}>
            <Toast.Header>
              <img src="https://via.placeholder.com/16" className="rounded me-2" alt="..." />
              <code className="me-auto">Bootstrap</code>
              <small>11 mins ago</small>
              <Button className="btn-close" data-bs-dismiss="toast" aria-label="Close"></Button>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </div>
      </div>
    </div>
  );
};

export default ToastDemo;
