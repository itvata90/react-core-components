import Badge from 'src/core/components/badge/badge';
import Button from 'src/core/components/button/button';
import Stack from 'src/core/components/stack/stack';
import classes from './demo.module.scss';

const BadgeDemo = () => {
  return (
    <div>
      <h1>Badge</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="headings"></div>
        <h4>
          Headings <a href="#headings">#</a>
        </h4>
        <h1>
          Example heading <Badge background="secondary" value="New" />
        </h1>
        <h2>
          Example heading <Badge background="secondary" value="New" />
        </h2>
        <h3>
          Example heading <Badge background="secondary" value="New" />
        </h3>
        <h4>
          Example heading <Badge background="secondary" value="New" />
        </h4>
        <h5>
          Example heading <Badge background="secondary" value="New" />
        </h5>
        <h6>
          Example heading <Badge background="secondary" value="New" />
        </h6>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="buttons"></div>
        <h4>
          Buttons <a href="#buttons">#</a>
        </h4>
        <Button color="primary">
          Notifications{' '}
          <Badge value="4" background="secondary">
            4
          </Badge>
        </Button>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="positioned"></div>
        <h4>
          Positioned <a href="#positioned">#</a>
        </h4>
        <Stack direction="row" spacing={5}>
          <Button className="position-relative" color="primary">
            Inbox
            <Badge
              background="danger"
              placement={{ vertical: 'top', horizontal: 'right' }}
              value={
                <>
                  99+ <span className="visually-hidden">unread messages</span>
                </>
              }
            />
          </Button>
          <Button className="position-relative" color="primary">
            Inbox
            <Badge
              background="danger"
              placement={{ vertical: 'bottom', horizontal: 'left' }}
              value={
                <>
                  99+ <span className="visually-hidden">unread messages</span>
                </>
              }
            />
          </Button>
        </Stack>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="pill"></div>
        <h4>
          Pill <a href="#pill">#</a>
        </h4>
        <Button className="position-relative" color="primary">
          Inbox
          <Badge
            pill
            background="danger"
            placement={{ vertical: 'top', horizontal: 'right' }}
            value={
              <>
                99+ <span className="visually-hidden">unread messages</span>
              </>
            }
          />
        </Button>
      </div>
      <div>
        <div className={classes['bs-demo-bookmark']} id="color"></div>
        <h4>
          Color <a href="#color">#</a>
        </h4>
        <Stack direction="row" spacing={1}>
          <Badge color="primary" value="Primary" />
          <Badge color="secondary" value="Secondary" />
          <Badge color="success" value="Success" />
          <Badge color="danger" value="Danger" />
          <Badge color="warning" value="Warning" />
          <Badge color="info" value="Info" />
          <Badge color="light" value="Light" />
          <Badge color="dark" value="Dark" />
        </Stack>
      </div>
    </div>
  );
};

export default BadgeDemo;
