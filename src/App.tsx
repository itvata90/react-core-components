import { Route, Routes } from 'react-router';
import { AlertProvider } from 'src/core/hooks/alert-context';
import AlertCenter from 'src/shared/alert-center';
import './App.scss';
import { publicRoutes } from './routes/routes';
function App() {
  return (
    <div className="App">
      <AlertProvider>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
        <AlertCenter />
      </AlertProvider>
    </div>
  );
}

export default App;
