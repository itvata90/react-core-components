import classes from './default-layout.module.scss';
import Header from './default-header';
import Sidebar from 'src/layouts/default-layout/default-sidebar';

const DefaultLayout = ({ children }: any) => {
  return (
    <div className={classes['default-layout-container']}>
      <Header />
      <Sidebar />
      <div className={classes['default-layout-main']}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
