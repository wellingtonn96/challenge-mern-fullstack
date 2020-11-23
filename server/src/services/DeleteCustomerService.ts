import customerRepository from '../repositories/CustomerRepository';

class DeleteCustomerService {
  public async execute(id: string): Promise<void> {
    const customer = await customerRepository.findById(id);

    if (!customer) {
      throw new Error('Customer not exists');
    }

    await customerRepository.deleteOne({ _id: id });
  }
}

export default DeleteCustomerService;
