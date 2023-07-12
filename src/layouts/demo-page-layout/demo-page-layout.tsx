import classes from './demo-page-layout.module.scss';
import Header from './demo-page-header';

const DemoPageLayout = ({ children }: any) => {
  return (
    <div className={classes['demo-page-layout-container']}>
      <Header />
      <div className={classes['demo-page-layout-main']}>{children}</div>
    </div>
  );
};

export default DemoPageLayout;
