import FormControl from 'src/core/components/form-control/form-control';
import FormLabel from 'src/core/components/form-label/form-label';
import InputGroup from 'src/core/components/input-group/input-group';
import classes from './demo.module.scss';

const InputGroupDemo = () => {
  return (
    <div>
      <h1>Form control</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="examples"></div>
        <h4>
          Examples <a href="#example">#</a>
        </h4>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>

        <FormLabel htmlFor="basic-url">Your vanity URL</FormLabel>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl placeholder="Username" aria-label="Username" />
          <InputGroup.Text>@</InputGroup.Text>
          <FormControl placeholder="Server" aria-label="Server" />
        </InputGroup>

        <InputGroup>
          <InputGroup.Text>With textarea</InputGroup.Text>
          <FormControl as="textarea" aria-label="With textarea"></FormControl>
        </InputGroup>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="sizing"></div>
        <h4>
          Sizing <a href="#sizing">#</a>
        </h4>
        <InputGroup className="mb-3" size="sm">
          <InputGroup.Text id="small">@</InputGroup.Text>
          <FormControl placeholder="Small" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>@</InputGroup.Text>
          <FormControl placeholder="default" />
        </InputGroup>
        <InputGroup className="mb-3" size="lg">
          <InputGroup.Text>@</InputGroup.Text>
          <FormControl placeholder="Large" />
        </InputGroup>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="sizing"></div>
        <h4>
          Multiple <a href="#sizing">#</a>
        </h4>
        <InputGroup className="mb-3">
          <InputGroup.Text>@</InputGroup.Text>
          <FormControl placeholder="Input 1" />
          <FormControl placeholder="Input 2" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>@1</InputGroup.Text>
          <InputGroup.Text>@2</InputGroup.Text>
          <FormControl placeholder="Input" />
        </InputGroup>
      </div>
    </div>
  );
};

export default InputGroupDemo;
