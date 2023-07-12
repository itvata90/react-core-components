import useForm from 'src/core/hooks/use-form';
import useSubmit from 'src/core/hooks/use-submit';
import { memo, useEffect, useState } from 'react';
import Modal from 'src/core/components/modal/modal';
import Form from 'src/core/components/form/form';
import Grid from 'src/core/components/grid/grid';
import { IRole, Status } from 'src/interfaces/role';
import Button from 'src/core/components/button/button';
import roleService from 'src/api/role-service';
import Feedback from 'src/core/components/feedback/feedback';
import Spinner from 'src/core/components/spinner/spinner';
import { STATES, useAlert } from 'src/core/hooks/alert-context';
import ConfirmationDialog from 'src/shared/demo-management/confirmation-dialog';
import Tooltip from 'src/core/components/tooltip/tooltip';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export enum ACTIONS {
  EDIT = 'edit',
  ADD = 'add',
}

export const emptyRoleValues = {
  roleId: '',
  roleName: '',
  status: '',
  remark: '',
};

interface RoleFormDialogProps {
  fieldId?: string | number;
  openDialog: boolean;
  onClose: () => void;
  action: ACTIONS;
  onSubmitSuccess?: (responseData?: any, error?: string) => void;
}

const RoleFormDialog = memo(({ openDialog, onClose, action, onSubmitSuccess, fieldId }: RoleFormDialogProps) => {
  const [initialValues, setInitialValues] = useState<IRole>(emptyRoleValues);
  const [loadingErrorMsg, setLoadingErrorMsg] = useState<string | undefined>(undefined);
  const [openConfirm, setOpenConfirm] = useState(false);

  const { fieldProps, errors, handleSubmit, values, handleChange, submitState, watch } = useSubmit(
    useForm({ initialValues }),
    action === ACTIONS.EDIT
      ? fieldId
        ? (formData: IRole, config?: any) => roleService.update(fieldId, formData, config)
        : () => {}
      : roleService.add,
  );
  useEffect(() => {
    setInitialValues({ ...emptyRoleValues });
    if (openDialog) {
      if (action === ACTIONS.EDIT && fieldId) {
        const getDetail = async () => {
          try {
            const response = await roleService.getSingle(fieldId);
            response && setInitialValues(response.data);
          } catch (error: any) {
            setLoadingErrorMsg(error.message);
          }
        };
        getDetail();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, fieldId, openDialog]);

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
    if (watch() !== initialValues) {
      setOpenConfirm(true);
      return;
    }
    onClose();
  };

  return (
    <>
      <Modal open={openDialog} onClose={handleClose} animation backdrop>
        <Form noValidate onSubmit={handleSubmit}>
          <Modal.Header as="h5">{action === 'edit' ? 'Edit role' : 'Add role'}</Modal.Header>

          <Modal.Body>
            <Grid row spacing={1}>
              <Grid item xs={12} sm={6}>
                <Form.Control
                  placeholder="Role Id"
                  label="Role Id"
                  name="roleId"
                  {...(fieldProps('roleId', { required: true }) as any)}
                  feedbackType={!!errors['roleId'] ? 'is-invalid' : undefined}
                />
                <Feedback>{errors['roleId']}</Feedback>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.Control
                  placeholder="roleName"
                  label={'roleName'}
                  name="roleName"
                  {...(fieldProps('roleName', {
                    required: true,
                    maxLength: 27,
                  }) as any)}
                  feedbackType={!!errors['roleName'] ? 'is-invalid' : undefined}
                />
                <Feedback>{errors['roleName']}</Feedback>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.Control
                  placeholder="Remark"
                  label={'Remark'}
                  name="remark"
                  {...(fieldProps('remark', { required: true }) as any)}
                  feedbackType={!!errors['remark'] ? 'is-invalid' : undefined}
                />
                <Feedback>{errors['remark']}</Feedback>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Form.Select
                  placeholder="Status"
                  name="status"
                  // {...fieldProps('status', { required: true })}
                  value={values['status']}
                  onChange={handleChange('status')}
                  // defaultValue={initialValues['status']}
                  feedbackType={!!errors['status'] ? 'is-invalid' : undefined}
                >
                  <Form.Select.Option value={''}>None</Form.Select.Option>
                  <Form.Select.Option value={Status.Active}>Active</Form.Select.Option>
                  <Form.Select.Option value={Status.Inactive}>Inactive</Form.Select.Option>
                  <Form.Select.Option value={Status.Suspense}>Suspense</Form.Select.Option>
                </Form.Select>
                <Feedback>{errors['status']}</Feedback>
              </Grid>
            </Grid>
          </Modal.Body>
          <Modal.Footer divider>
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

export default RoleFormDialog;
