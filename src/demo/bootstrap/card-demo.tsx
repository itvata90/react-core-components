import Card from 'src/core/components/card/card';
import Grid from 'src/core/components/grid/grid';
import Stack from 'src/core/components/stack/stack';
import classes from './demo.module.scss';

const CardDemo = () => {
  return (
    <div>
      <h1>Card</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <Card style={{ width: '18rem' }}>
          <Card.Image src="https://via.placeholder.com/250x150" position="top" alt="img" />
          <Card.Body>
            <Card.Title variant="h5">Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Go somewhere</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="content-types"></div>
        <h4>
          Content types <a href="#content-types">#</a>
        </h4>
        <h6>
          Body with <code>Card.Body</code>{' '}
        </h6>
        <Card style={{ width: '18rem' }}>
          <Card.Body>Something in card body</Card.Body>
        </Card>
        <h6>
          Title, Text, and Link with <code>Card.Title, Card.Subtitle, Card.Text, and Card.Link</code>
        </h6>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle className="text-muted">Card subtitle</Card.Subtitle>
            <Card.Text className="mt-2">Card text</Card.Text>
            <Card.Link href="#">Card link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="images"></div>
        <h4>
          Images <a href="#images">#</a>
        </h4>
        <Card style={{ width: '18rem' }}>
          <Card.Image src="https://via.placeholder.com/250x150" position="top" alt="img" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <h6 className="m-1">
          Cards can include top and bottom “image caps”. Use <code>position</code> prop this{' '}
        </h6>
        <Stack direction="row" spacing={1}>
          <Card style={{ width: '18rem' }}>
            <Card.Image src="https://via.placeholder.com/250x150" position="top" alt="img" />
            <Card.Body>
              <Card.Text>Image top</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>Image bottom</Card.Text>
            </Card.Body>
            <Card.Image src="https://via.placeholder.com/250x150" position="bottom" alt="img" />
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Image src="https://via.placeholder.com/250x150" position="overlay" alt="img">
              <Card.Body>
                <Card.Text>Or overlay image like this</Card.Text>
              </Card.Body>
            </Card.Image>
          </Card>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="header-and-footer"></div>
        <h4>
          Header and footer <a href="#header-and-footer">#</a>
        </h4>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="#">Go somewhere</Card.Link>
          </Card.Footer>
        </Card>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="horizontal"></div>
        <h4>
          Horizontal <a href="#horizontal">#</a>
        </h4>
        <Card className="mb-3" style={{ maxWidth: 540 }}>
          <Grid className="g-0" row>
            <Grid md={4}>
              <Card.Image src="https://via.placeholder.com/250x250" className="img-fluid rounded-start" alt="..." />
            </Grid>
            <Grid md={8}>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Grid>
          </Grid>
        </Card>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="card-styles"></div>
        <h4>
          Card styles <a href="#card-styles ">#</a>
        </h4>
        <h6>
          Background and color. Use <code>color</code> prop.
        </h6>
        <Stack direction="row" spacing={2}>
          <Card style={{ maxWidth: '18rem' }} color="primary">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary card title</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: '18rem' }} color="danger">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger card title</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional</Card.Text>
            </Card.Body>
          </Card>
        </Stack>
        <h6>Border</h6>
        <Stack direction="row" spacing={2}>
          <Card style={{ maxWidth: '18rem' }} className="border-primary">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary card title</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: '18rem' }} className="border-danger">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger card title</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional</Card.Text>
            </Card.Body>
          </Card>
        </Stack>
      </div>
    </div>
  );
};

export default CardDemo;
