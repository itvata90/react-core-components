import { Tracking } from 'src/interfaces/tracking';

export enum Gender {
  Male = 'M',
  Female = 'F',
  Empty = '',
}

export enum Status {
  Inactive = 'I',
  Active = 'A',
  Suspense = 'S',
}

export interface IUser extends Tracking {
  userId: string;
  username: string;
  email: string;
  displayName: string;
  imageURL?: string;
  status: string;
  gender?: string;
  phone?: string;
  title?: string;
  position?: string;
  roles?: string[];
  dateOfBirth?: string;
}

export interface DataResponse {}
