import classes from './demo-page.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from 'src/core/components/grid/grid';
import Button from 'src/core/components/button/button';
import Nav from 'src/core/components/nav/nav';
import Stack from 'src/core/components/stack/stack';
// import { DemoPageExportingPopup } from '.';

const breadcrumbNameMap: { [key: string]: string } = {
  '/demo-page': 'DemoPage',
  '/demo-page/summary': 'Summary',
};

const DemoPageStepBar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const navigate = useNavigate();

  const handleBack = () => {
    let path = `/demo/demo-page`;
    navigate(path);
  };

  const buttonMap: { [key: string]: React.ReactElement } = {
    '/demo/demo-page': (
      <>
        <Button className={`${classes.warning_button} ${classes.stepbar_button}`} type="reset">
          reset
        </Button>
        <Button className={`${classes.default_button} ${classes.stepbar_button}`}>import QXML</Button>
        <Button
          className={`${classes.primary_button} ${classes.stepbar_button}`}
          // onClick={() => handleSummerize()}
          type="submit"
        >
          summerize
        </Button>
      </>
    ),
    '/demo-page/summary': (
      <>
        <Grid column>
          <Button className={`${classes.default_button} ${classes.stepbar_button}`} onClick={() => handleBack()}>
            back
          </Button>
        </Grid>
        <Grid column>
          <Button className={`${classes.primary_button} ${classes.stepbar_button}`} type="submit">
            export
          </Button>
        </Grid>
      </>
    ),
  };

  return (
    <div className={`${classes.container_stepbar}`}>
      <Grid row alignItems="center" className={`${classes.container_button_stepbar} px-3 m-0`}>
        <>
          <Grid column>
            <div className={`${classes.breadcrumbs_process_bar}`}>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const href = `/${pathnames.slice(0, index + 1).join('/')}`;
                return last ? (
                  <Nav.Item key={href} color="inherit">
                    Page 1
                  </Nav.Item>
                ) : (
                  <Nav.Link key={href} color="inherit" href={href}>
                    {breadcrumbNameMap[href]}
                  </Nav.Link>
                );
              })}
            </div>
          </Grid>
          <Grid column justifyContent="end">
            <Stack direction="row" spacing={2} className="w-100" justifyContent="end">
              {buttonMap[location.pathname]}
            </Stack>
          </Grid>
        </>
      </Grid>
      {/* <DemoPageExportingPopup open={open} onClose={() => setOpen(false)}></DemoPageExportingPopup> */}
    </div>
  );
};

export default DemoPageStepBar;
