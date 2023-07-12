import client, { ResponseListDataType, Service } from 'src/api/http-client-setup';
import { IRole } from 'src/interfaces/role';

const customerAPI = '/roles/';

class RoleService implements Service<IRole> {
  get = (queryString: string = '', config?: any) =>
    client.get<ResponseListDataType<IRole>>(customerAPI + queryString, config);
  getSingle = (id: string | number, config?: any) => client.get<IRole>(customerAPI + id, config);
  add = (body: IRole, config?: any) => client.post<IRole>(customerAPI, body, config);
  update = (id: string | number, body: IRole, config?: any) => client.put<IRole>(customerAPI + id, body, config);
  remove = (id: string | number, config?: any) => client.delete<IRole>(customerAPI + id, config);
  assign = (roleId: string | number, body: string[]) => client.put('/roles/' + roleId + '/assign', body);
}

export default new RoleService();
