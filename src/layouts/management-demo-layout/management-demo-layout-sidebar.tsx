import { Link, useLocation } from 'react-router-dom';
import classes from './management-demo-layout.module.scss';
import List from 'src/core/components/list/list';
import { BsHouse, BsTable, BsFillPersonFill, BsFillShieldFill } from 'react-icons/bs';

const ManagementDemoSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const listNested = [
    {
      header: 'Home',
      icon: <BsHouse />,
      props: {
        as: Link,
        to: '/',
      },
    },
    {
      subheader: 'Management',
      icon: <BsTable />,
      collapsible: true,
      collapsed: true,
      children: [
        {
          header: 'User',
          icon: <BsFillPersonFill />,
          active: pathname.includes('/demo/management/user'),
          props: {
            as: Link,
            to: '/demo/management/user',
          },
        },
        {
          header: 'Role',
          icon: <BsFillShieldFill />,
          active: pathname.includes('/demo/management/role'),
          props: {
            as: Link,
            to: '/demo/management/role',
          },
        },
      ],
    },
  ];

  return (
    <div className={`${classes['management-demo-menu']}`} tabIndex={-1}>
      <div>
        <List>
          <List.Nested items={listNested} disableIndent draggable />
        </List>
      </div>
    </div>
  );
};

export default ManagementDemoSidebar;
