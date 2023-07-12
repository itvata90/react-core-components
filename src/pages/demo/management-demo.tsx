import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Container from 'src/core/components/container/container';
import Spinner from 'src/core/components/spinner/spinner';
import ManagementDemoLayout from 'src/layouts/management-demo-layout/management-demo-layout';
const RoleManagement = lazy(() => import('src/shared/demo-management/role-management'));
const UserManagement = lazy(() => import('src/shared/demo-management/user-management'));

const ManagementDemo = () => {
  return (
    <ManagementDemoLayout>
      <Suspense
        fallback={
          <Container>
            <Spinner className="mt-2" />
          </Container>
        }
      >
        <Routes>
          <Route path="user" element={<UserManagement />} />
          <Route path="role" element={<RoleManagement />} />
          <Route path="*" element={<Navigate to="user" replace />} />
        </Routes>
      </Suspense>
    </ManagementDemoLayout>
  );
};

export default ManagementDemo;
