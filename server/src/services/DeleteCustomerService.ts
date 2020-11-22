import Customer from '../models/Customer';
import CustomerRepository from '../repositories/CustomerRepository';

class DeleteCustomerService {
  public execute(id: string): Customer[] {
    const customerRepository = new CustomerRepository();

    const customer = customerRepository.findOne(id);

    if (!customer) {
      throw new Error('Customer not exists');
    }

    const deleteCustomer = customerRepository.delete(id);

    return deleteCustomer;
  }
}

export default DeleteCustomerService;
