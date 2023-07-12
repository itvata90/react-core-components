import BootstrapDemo from '../pages/demo/bootstrap';
import DemoPage from 'src/pages/demo/demo-page';
import Home from 'src/pages';
import { Navigate } from 'react-router-dom';
import ManagementDemo from 'src/pages/demo/management-demo';
interface publicRoutesType {
  path: string;
  component: any | (({ children }: any) => JSX.Element) | null;
  type?: 'default' | 'admin' | 'demo';
}

const publicRoutes: publicRoutesType[] = [
  { path: '/demo/management/*', component: ManagementDemo, type: 'default' },
  { path: '/demo/demo-page', component: DemoPage, type: 'default' },
  { path: '/demo/bootstrap/*', component: BootstrapDemo, type: 'default' },
  { path: '/demo/*', component: () => Navigate({ to: '/demo/bootstrap/*', replace: true }), type: 'default' },
  { path: '/*', component: Home, type: 'default' },
];

const privateRoutes: publicRoutesType[] = [];

export { publicRoutes, privateRoutes };
