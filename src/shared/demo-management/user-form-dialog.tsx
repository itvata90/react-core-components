import useForm from 'src/core/hooks/use-form';
import useSubmit from 'src/core/hooks/use-submit';
import { memo, useEffect, useState } from 'react';
import Modal from 'src/core/components/modal/modal';
import Form from 'src/core/components/form/form';
import Grid from 'src/core/components/grid/grid';
import Button from 'src/core/components/button/button';
import roleService from 'src/api/role-service';
import Feedback from 'src/core/components/feedback/feedback';
import Spinner from 'src/core/components/spinner/spinner';
import { STATES, useAlert } from 'src/core/hooks/alert-context';
import userService from 'src/api/user-service';
import { Gender, IUser, Status } from 'src/interfaces/user';
import ConfirmationDialog from 'src/shared/demo-management/confirmation-dialog';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Tooltip from 'src/core/components/tooltip/tooltip';
import { getFormatDate } from 'src/core/functions/get-format-date';

export enum ACTIONS {
  EDIT = 'edit',
  ADD = 'add',
}

const emptyUserValues = {
  userId: '',
  username: '',
  email: '',
  displayName: '',
  imageURL: '',
  status: '',
  gender: '',
  phone: '',
  title: '',
  position: '',
  roles: [],
  dateOfBirth: '1990/01/01',
};

interface UserFormDialogProps {
  fieldId?: string | number;
  openDialog: boolean;
  onClose: () => void;
  action: ACTIONS;
  onSubmitSuccess?: (responseData?: any, error?: string) => void;
}

const UserFormDialog = memo(({ openDialog, onClose, action, onSubmitSuccess, fieldId }: UserFormDialogProps) => {
  const [roleOptions, setRoleOptions] = useState<Array<any>>([]);
  const [openConfirm, setOpenConfirm] = useState(false);

  const [initialValues, setInitialValues] = useState<IUser>(emptyUserValues);
  const [loadingErrorMsg, setLoadingErrorMsg] = useState<string | undefined>(undefined);

  const { fieldProps, isDirty, handleSubmit, setErrors, values, handleChange, submitState } = useSubmit(
    useForm({ initialValues }),
    action === ACTIONS.EDIT
      ? fieldId
        ? (formData: IUser, config?: any) => userService.update(fieldId, formData, config)
        : () => {}
      : userService.add,
  );
  useEffect(() => {
    if (action === ACTIONS.EDIT && fieldId) {
      const getDetail = async () => {
        try {
          const response = await userService.getSingle(fieldId);
          const _initialValues = response.data;
          _initialValues['dateOfBirth'] = getFormatDate(_initialValues['dateOfBirth'] || '1990-01-01', 'yyyy-MM-dd');
          response && setInitialValues(response.data);
          const responseRoleOptions = await roleService.get();
          let newRoleOptions = responseRoleOptions.data.list;
          responseRoleOptions && setRoleOptions(newRoleOptions);
        } catch (error: any) {
          setLoadingErrorMsg(error.message);
        }
      };
      getDetail();
    }
    setErrors({});
    setInitialValues(emptyUserValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, fieldId]);

  const { showMessage } = useAlert();

  useEffect(() => {
    if (!submitState?.loading && submitState?.data) {
      onSubmitSuccess && onSubmitSuccess(submitState.data);
      showMessage('Successfully', STATES.SUCCESS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitState?.loading]);

  const handleCloseConfirm = (value: any) => {
    setOpenConfirm(false);
    if (value === 'ok') {
      onClose();
    }
  };

  const handleClose = () => {
    if (isDirty()) {
      setOpenConfirm(true);
      return;
    }
    onClose();
  };

  return (
    <>
      <Modal open={openDialog} onClose={handleClose} animation>
        <Form noValidate onSubmit={handleSubmit}>
          <Modal.Header>{action === 'edit' ? 'Edit user' : 'Add user'}</Modal.Header>

          <Modal.Body>
            <Grid row spacing={1}>
              <Grid xs={12} sm={6}>
                <Form.Control
                  disabled
                  placeholder="User Id"
                  name="userId"
                  {...(fieldProps('userId', { required: true }) as any)}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Control
                  placeholder="Username"
                  label={'Username'}
                  name="username"
                  {...(fieldProps('username', { required: true }) as any)}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Control placeholder="Email" label={'Email'} name="email" {...(fieldProps('email', {}) as any)} />
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Control placeholder="Phone" name="phone" {...(fieldProps('phone', {}) as any)} />
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Control
                  placeholder="Display Name"
                  name="displayName"
                  {...(fieldProps('displayName', {}) as any)}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Select
                  placeholder="Status"
                  name="status"
                  value={values['status']}
                  onChange={handleChange('status')}
                >
                  <Form.Select.Option value={Status.Active}>Active</Form.Select.Option>
                  <Form.Select.Option value={Status.Inactive}>Inactive</Form.Select.Option>
                  <Form.Select.Option value={Status.Suspense}>Suspense</Form.Select.Option>
                  <Form.Select.Option value="">None</Form.Select.Option>
                </Form.Select>
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Select
                  placeholder="Gender"
                  name="gender"
                  value={values['gender']}
                  onChange={handleChange('gender')}
                >
                  <Form.Select.Option value="">None</Form.Select.Option>
                  <Form.Select.Option value={Gender.Female}>Female</Form.Select.Option>
                  <Form.Select.Option value={Gender.Male}>Male</Form.Select.Option>
                </Form.Select>
              </Grid>

              <Grid xs={12} sm={6}>
                <Form.Control placeholder="Title" name="title" {...(fieldProps('title', {}) as any)} />
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Control placeholder="Position" name="position" {...(fieldProps('position', {}) as any)} />
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Select
                  placeholder="Roles"
                  name="roles"
                  value={values['roles'] || []}
                  onChange={handleChange('roles')}
                >
                  {roleOptions.map((value) => (
                    <Form.Select.Option key={value.roleId} value={value.roleId}>
                      {value.roleName}
                    </Form.Select.Option>
                  ))}
                </Form.Select>
              </Grid>
              <Grid xs={12} sm={6}>
                <Form.Control
                  type="date"
                  placeholder="DOB"
                  name="dateOfBirth"
                  {...(fieldProps('dateOfBirth', {}) as any)}
                />
              </Grid>
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} disabled={submitState?.loading} color="danger">
              Cancel
            </Button>
            <Button type="submit" disabled={submitState?.loading} color="primary">
              Save {submitState?.loading && <Spinner size="sm" />}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <ConfirmationDialog
        size="sm"
        open={openConfirm}
        onClose={handleCloseConfirm}
        backdrop={false}
        dialogClassName="shadow-lg"
        content={<p>Are you want to discard changes?</p>}
        cancelText="Back"
        confirmText="Discard"
        headerText={
          <h5 className="d-flex align-items-center">
            <Tooltip text="Hello">
              <div className="me-2">
                <HiOutlineExclamationCircle />
              </div>
            </Tooltip>{' '}
            Confirm your action
          </h5>
        }
      />
    </>
  );
});

export default UserFormDialog;
