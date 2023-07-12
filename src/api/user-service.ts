import client, { ResponseListDataType, Service } from 'src/api/http-client-setup';
import { IUser } from 'src/interfaces/user';

const userAPI = '/users/';

class UserService implements Service<IUser> {
  get = (queryString: string = '', config?: any) =>
    client.get<ResponseListDataType<IUser>>(userAPI + queryString, config);
  getSingle = (id: string | number, config?: any) => client.get<IUser>(userAPI + id, config);
  add = (body: IUser, config?: any) => client.post<IUser>(userAPI, body, config);
  update = (id: string | number, body: IUser, config?: any) => client.put<IUser>(userAPI + id, body, config);
  remove = (id: string | number, config?: any) => client.delete<IUser>(userAPI + id);
  getByRole = (roleId: string | number, config?: any) => client.get('/users?roleId=' + roleId, config);
}

export default new UserService();
