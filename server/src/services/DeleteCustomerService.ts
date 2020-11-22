import { ICustomer } from '../models/Customer';
import customerRepository from '../repositories/CustomerRepository';

class DeleteCustomerService {
  public async execute(id: string): Promise<ICustomer | null> {
    const customer = await customerRepository.findById(id);

    if (!customer) {
      throw new Error('Customer not exists');
    }

    const deleteCustomer = await customerRepository.findByIdAndRemove(id);

    return deleteCustomer;
  }
}

export default DeleteCustomerService;
