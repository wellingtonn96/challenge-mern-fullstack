import Customer from '../models/Customer';

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

class CustomerRepository {
  private customers: Customer[];

  constructor() {
    this.customers = [];
    console.log(this.customers);
  }

  public all(): Customer[] {
    return this.customers;
  }

  public findOne(id: string): Customer | undefined {
    const customer = this.customers.find(item => item.id === id);

    return customer;
  }

  public create({
    name,
    street,
    city,
    state,
    country,
    weight,
    lat,
    lng,
  }: IRequest): Customer {
    const customer = new Customer({
      name,
      street,
      city,
      state,
      country,
      weight,
      lat,
      lng,
    });

    console.log(customer);

    this.customers.push(customer);

    return customer;
  }

  public delete(id: string): Customer[] {
    const findIndex = this.customers.findIndex(item => item.id === id);

    const deletedCustomer = this.customers.splice(findIndex, 1);

    return deletedCustomer;
  }
}

export default CustomerRepository;
