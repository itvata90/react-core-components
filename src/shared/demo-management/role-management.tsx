import { useState } from 'react';
import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai';
import { ResponseListDataType } from 'src/api/http-client-setup';
import roleService from 'src/api/role-service';
import Button from 'src/core/components/button/button';
import Container from 'src/core/components/container/container';
import Stack from 'src/core/components/stack/stack';
import TableData from 'src/core/components/table-data/table-data';
import useSearch from 'src/core/hooks/use-search';
import { IRole } from 'src/interfaces/role';
import DeleteButton from 'src/shared/demo-management/delete-button';
import RoleFormDialog, { ACTIONS } from 'src/shared/demo-management/role-form-dialog';

const RoleManagement = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | number | undefined>(undefined);
  const [action, setAction] = useState<ACTIONS>(ACTIONS.ADD);

  const {
    data,
    error: loadingError,
    loading,
    page,
    limit,
    handlePageChange,
    handleAddSort,
    handleRemoveSort,
    handleSearch,
    handleDataChange,
    handleReload,
    handleLimitChange,
  } = useSearch<ResponseListDataType<IRole>>(roleService.get, undefined, (fields) =>
    Object.entries(fields).reduce(
      (acc, [fieldName, orderBy]) => (acc += 'sortBy=' + fieldName + '&order=' + orderBy),
      '',
    ),
  );

  const rows = data?.list || [];
  const maxPage = !data?.total ? 1 : Math.ceil(Number(data?.total) / limit);

  const columns = [
    { name: 'Role Id', field: 'roleId', searchable: true, sortable: true },
    { name: 'Role Name', field: 'roleName', searchable: true, sortable: true },
    { name: 'Remark', field: 'remark', searchable: true, sortable: true },
    {
      name: 'Status',
      field: 'status',
      renderFunction: (row: any) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              marginRight: 5,
              width: 15,
              height: 15,
              borderRadius: 15,
              background: row.status === 'A' ? '#8ceb34' : row.status === 'I' ? '#ebbd34' : 'red',
            }}
          />
          ({row.status})
        </div>
      ),
      searchable: true,
      sortable: true,
    },
    {
      name: '',
      field: '',
      renderFunction: (row: any) => (
        <Stack direction="row" spacing={1}>
          <Button onClick={handleOpenDetailRoleDialog(ACTIONS.EDIT, row.roleId)} color="primary">
            <AiOutlineEye />
          </Button>
          <DeleteButton fieldId={row.roleId} onDelete={handleReload} fetcher={roleService.remove} />
          {/* <AssignButton fieldId={row.roleId} /> */}
        </Stack>
      ),
    },
  ];

  const handleOpenDetailRoleDialog = (action: ACTIONS, id?: string | number) => () => {
    setOpenDialog(true);
    setAction(action);
    setSelected(id);
  };

  const onSubmitSuccess = (responseData: any, error?: string) => {
    let temp = [...rows];
    let editedIndex = temp.findIndex((value) => value.roleId === responseData.value.roleId);
    if (editedIndex !== -1) {
      temp[editedIndex] = {
        roleId: responseData.value.roleId,
        remark: responseData.value.remark,
        roleName: responseData.value.roleName,
        status: responseData.value.status,
      };
    }
    handleDataChange({ ...data, list: [...temp] } as ResponseListDataType<IRole>);
    setOpenDialog(false);
  };
  if (loadingError && !rows) {
    return <div>{loadingError}</div>;
  }
  return (
    <Container style={{ marginTop: 16 }}>
      <Stack direction="row" spacing={2} style={{ marginBottom: 16 }} alignItems="center">
        <h4 className="h4">Role Management</h4>
        <Button onClick={() => handleOpenDetailRoleDialog(ACTIONS.ADD)()} color="primary">
          <AiOutlinePlus />
          <span style={{ textTransform: 'none', marginLeft: 2 }}>Add</span>
        </Button>
      </Stack>

      <TableData
        loading={loading}
        indexField="roleId"
        columns={columns}
        rows={rows}
        onSortChange={(field, action) =>
          action === 'none' ? handleRemoveSort(String(field)) : handleAddSort(String(field), action === 'desc')
        }
        onFilterChange={(field, keyword) =>
          handleSearch(field, keyword instanceof Date ? keyword.toISOString() : String(keyword))
        }
        pageLimits={[5, 10, 15]}
        pageCount={maxPage}
        onPageChange={(page) => handlePageChange(+page)}
        onLimitChange={(limit) => handleLimitChange(+limit)}
        hover
      />
      <RoleFormDialog
        fieldId={selected}
        action={action}
        openDialog={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmitSuccess={onSubmitSuccess}
      />
    </Container>
  );
};

export default RoleManagement;
