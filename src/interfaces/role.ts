import { Tracking } from './tracking';

export enum Status {
  Inactive = 'I',
  Active = 'A',
  Suspense = 'S',
}

export interface IRole extends Tracking {
  roleId?: string;
  roleName?: string;
  remark?: string;
  status?: string;
}
