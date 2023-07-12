import { useState } from 'react';
import Button from 'src/core/components/button/button';
import Card from 'src/core/components/card/card';
import Collapse from 'src/core/components/collapse/collapse';
import classes from './demo.module.scss';

const CollapseDemo = () => {
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    example: false,
    horizontal: false,
  });
  const handleShow = (name: string) => () => {
    setShow({ ...show, [name]: !show[name] });
  };
  return (
    <div>
      <h1>Collapse</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <Button onClick={handleShow('example')} color="primary">
          Show/hide
        </Button>
        <Collapse in={show['example']} id="collapseExample" className="mt-2">
          <Card>
            <Card.Body>
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
              user activates the relevant trigger.
            </Card.Body>
          </Card>
        </Collapse>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="horizontal"></div>
        <h4>
          Horizontal <a href="#horizontal">#</a>
        </h4>
        <h6>
          Use the <code>direction</code> prop. Note: The <code>width</code> on child element is required
        </h6>
        <Button onClick={handleShow('horizontal')} color="primary">
          Show/hide
        </Button>
        <div style={{ minHeight: 120 }}>
          <Collapse in={show['horizontal']} direction="horizontal" id="collapseExample" className="mt-2">
            <Card style={{ width: 500 }}>
              <Card.Body>
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the user activates the relevant trigger.
              </Card.Body>
            </Card>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default CollapseDemo;
