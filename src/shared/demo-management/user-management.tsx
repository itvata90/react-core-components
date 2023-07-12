import { useState } from 'react';
import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai';
import { ResponseListDataType } from 'src/api/http-client-setup';
import userService from 'src/api/user-service';
import Button from 'src/core/components/button/button';
import Container from 'src/core/components/container/container';
import Stack from 'src/core/components/stack/stack';
import TableData from 'src/core/components/table-data/table-data';
import useSearch from 'src/core/hooks/use-search';
import { Column } from 'src/core/interfaces/components';
import { IUser } from 'src/interfaces/user';
import DeleteButton from 'src/shared/demo-management/delete-button';
import UserFormDialog, { ACTIONS } from 'src/shared/demo-management/user-form-dialog';

const UserManagement = () => {
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
  } = useSearch<ResponseListDataType<IUser>>(userService.get, undefined, (fields) =>
    Object.entries(fields).reduce(
      (acc, [fieldName, orderBy]) => (acc += 'sortBy=' + fieldName + '&order=' + orderBy),
      '',
    ),
  );

  const rows = data?.list || [];
  const maxPage = !data?.total ? 1 : Math.ceil(Number(data?.total) / limit);

  const columns: Column[] = [
    { name: 'User Id', field: 'userId', searchable: true, sortable: true },
    {
      name: 'Image',
      field: 'imageURL',
      renderFunction: (row: any) => <img width="32px" alt="avatar" className="rounded-circle" src={row.imageURL} />,
    },
    { name: 'Username', field: 'username', searchable: true, sortable: true },
    { name: 'Email', field: 'email', searchable: true, sortable: true },
    {
      name: 'Display Name',
      field: 'displayName',
      searchable: true,
      sortable: true,
      filterable: true,
    },
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
          <Button onClick={handleOpenDetailUserDialog(ACTIONS.EDIT, row.userId)} color="primary">
            <AiOutlineEye />
          </Button>
          <DeleteButton fieldId={row.userId} onDelete={handleReload} fetcher={userService.remove} />
        </Stack>
      ),
    },
  ];
  const handleOpenDetailUserDialog = (action: ACTIONS, id?: string | number) => () => {
    setOpenDialog(true);
    setAction(action);
    setSelected(id);
  };

  const onSubmitSuccess = (responseData: any, error?: string) => {
    let temp = [...rows];
    let editedIndex = temp.findIndex((value) => value.userId === responseData.value.userId);
    if (editedIndex !== -1) {
      temp[editedIndex] = {
        userId: responseData.value.userId,
        username: responseData.value.username,
        email: responseData.value.email,
        displayName: responseData.value.displayName,
        imageURL: responseData.value.imageURL,
        status: responseData.value.status,
      };
    }
    handleDataChange({ ...data, list: [...temp] } as ResponseListDataType<IUser>);
    setOpenDialog(false);
  };

  if (loadingError && !rows) {
    return <div>{loadingError}</div>;
  }

  return (
    <Container style={{ marginTop: 16 }}>
      <Stack direction="row" spacing={2} style={{ marginBottom: 16 }} alignItems="center">
        <h4 className="h4">User Management</h4>
        <Button onClick={() => handleOpenDetailUserDialog(ACTIONS.ADD)()} color="primary">
          <AiOutlinePlus />
          <span style={{ textTransform: 'none', marginLeft: 2 }}>Add</span>
        </Button>
      </Stack>

      <TableData
        loading={loading}
        indexField="userId"
        columns={columns}
        rows={rows}
        onSortChange={(field, action) => {
          action === 'none' ? handleRemoveSort(String(field))() : handleAddSort(String(field), action === 'desc')();
        }}
        onFilterChange={(field, keyword) =>
          handleSearch(field, keyword instanceof Date ? keyword.toISOString() : String(keyword))()
        }
        pageCount={maxPage}
        pageLimits={[5, 10, 15]}
        onPageChange={(page) => handlePageChange(+page)}
        onLimitChange={(limit) => handleLimitChange(+limit)}
        hover
        fixedNumberRows
      />
      <UserFormDialog
        fieldId={selected}
        action={action}
        openDialog={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmitSuccess={onSubmitSuccess}
      />
    </Container>
  );
};

export default UserManagement;
