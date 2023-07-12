import classNames from 'classnames';
import { useState } from 'react';
import Alert from 'src/core/components/alert/alert';
import Button from 'src/core/components/button/button';
import classes from './demo.module.scss';

const AlertDemo = () => {
  const [openLiveAlert, setOpenLiveAlert] = useState(false);
  return (
    <div>
      <h1>Alert</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="examples"></div>
        <h4>
          Examples <a href="#examples">#</a>
        </h4>
        <Alert color="primary">A simple primary alert—check it out!</Alert>
        <Alert color="secondary">A simple secondary alert—check it out!</Alert>
        <Alert color="success">A simple success alert—check it out!</Alert>
        <Alert color="danger">A simple danger alert—check it out!</Alert>
        <Alert color="warning">A simple warning alert—check it out!</Alert>
        <Alert color="info">A simple info alert—check it out!</Alert>
        <Alert color="light">A simple light alert—check it out!</Alert>
        <Alert color="dark">A simple dark alert—check it out!</Alert>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="live-example"></div>
        <h4>
          Live example <a href="#live-example">#</a>
        </h4>
        <Alert color="primary" className={classNames(!openLiveAlert && 'd-none')}>
          A simple primary alert—check it out!
        </Alert>
        <Button onClick={() => setOpenLiveAlert(!openLiveAlert)} color="primary">
          Show alert
        </Button>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="link-color"></div>
        <h4>
          Link color<a href="#link-color">#</a>
        </h4>
        <Alert color="primary">
          A simple primary with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
        <Alert color="secondary">
          A simple secondar with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
        <Alert color="success">
          A simple success with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
        <Alert color="danger">
          A simple dange with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
        <Alert color="warning">
          A simple warning with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
        <Alert color="info">
          A simple inf with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
        <Alert color="light">
          A simple light with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
        <Alert color="dark">
          A simple dar with <Alert.Link>an example link</Alert.Link>. Check it out!
        </Alert>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="additional-content"></div>
        <h4>
          Additional content <a href="#additional-content">#</a>
        </h4>
        <Alert color="primary">
          <Alert.Heading variant="h4">Well done!</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
            so that you can see how spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
      </div>
    </div>
  );
};

export default AlertDemo;
