import { ICustomer } from '../models/Customer';
import customerRepository from '../repositories/CustomerRepository';

interface IRequest {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  weight: number;
  lat: number;
  lng: number;
}

class CreateCustomerService {
  public async execute(data: IRequest): Promise<ICustomer> {
    const customer = customerRepository.create(data);

    return customer;
  }
}

export default CreateCustomerService;
