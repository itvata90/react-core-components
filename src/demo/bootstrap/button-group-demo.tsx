import ButtonGroup from 'src/core/components/button-group/button-group';
import Button from 'src/core/components/button/button';
import Stack from 'src/core/components/stack/stack';
import classes from './demo.module.scss';

const ButtonGroupDemo = () => {
  return (
    <div>
      <h1>ButtonGroup</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <ButtonGroup>
          <Button color="primary">Left</Button>
          <Button color="primary">Middle</Button>
          <Button color="primary">Right</Button>
        </ButtonGroup>
        <h6>Groups of links</h6>
        <ButtonGroup>
          <Button href="#" active color="primary">
            Left
          </Button>
          <Button href="#" color="primary">
            Middle
          </Button>
          <Button href="#" color="primary">
            Right
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="mixed-styles"></div>
        <h4>
          Mixed styles <a href="#mixed-styles">#</a>
        </h4>
        <ButtonGroup>
          <Button color="danger">Left</Button>
          <Button color="warning">Middle</Button>
          <Button color="success">Right</Button>
        </ButtonGroup>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="outlined-styles"></div>
        <h4>
          Outlined styles <a href="#outlined-styles">#</a>
        </h4>
        <ButtonGroup>
          <Button variant="outline" color="primary">
            Left
          </Button>
          <Button variant="outline" color="primary">
            Middle
          </Button>
          <Button variant="outline" color="primary">
            Right
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="sizes"></div>
        <h4>
          Sizes <a href="#sizes">#</a>
        </h4>
        <h6>
          Use <code>size</code> prop
        </h6>
        <Stack spacing={2}>
          <ButtonGroup size="lg">
            <Button variant="outline" color="secondary">
              Left
            </Button>
            <Button variant="outline" color="secondary">
              Middle
            </Button>
            <Button variant="outline" color="secondary">
              Right
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" color="secondary">
              Left
            </Button>
            <Button variant="outline" color="secondary">
              Middle
            </Button>
            <Button variant="outline" color="secondary">
              Right
            </Button>
          </ButtonGroup>
          <ButtonGroup size="sm">
            <Button variant="outline" color="secondary">
              Left
            </Button>
            <Button variant="outline" color="secondary">
              Middle
            </Button>
            <Button variant="outline" color="secondary">
              Right
            </Button>
          </ButtonGroup>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="vertical"></div>
        <h4>
          Vertical <a href="#vertical">#</a>
        </h4>
        <h6>
          Use <code>direction</code> prop
        </h6>
        <ButtonGroup direction="vertical">
          <Button variant="outline" color="secondary">
            Left
          </Button>
          <Button variant="outline" color="secondary">
            Middle
          </Button>
          <Button variant="outline" color="secondary">
            Right
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ButtonGroupDemo;
