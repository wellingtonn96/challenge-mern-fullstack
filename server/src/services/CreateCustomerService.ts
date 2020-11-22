import Customer from '../models/Customer';
import CustomerRepository from '../repositories/CustomerRepository';

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
  public execute(data: IRequest): Customer {
    const customerReposity = new CustomerRepository();

    const customer = customerReposity.create(data);

    return customer;
  }
}

export default CreateCustomerService;
