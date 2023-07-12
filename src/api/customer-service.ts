import { Customer } from 'src/interfaces/customer';
import client, { Service } from 'src/api/http-client-setup';

const customerAPI = '/customer_detail';

class CustomerService implements Service<Customer> {
  get = (queryString: string = '', config?: any) => client.get<Customer>(customerAPI + queryString, config);
  getSingle = (id: string | number, config?: any) => client.get<Customer>(customerAPI + id, config);
  add = (body: Customer, config?: any) => client.post<Customer>(customerAPI, body, config);
  update = (id: string | number, body: Customer, config?: any) => client.put<Customer>(customerAPI + id, body, config);
  remove = (id: string | number, config?: any) => client.delete<Customer>(customerAPI + id);
}

export default new CustomerService();
