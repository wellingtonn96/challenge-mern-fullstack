import { Router } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';
import CustomerRepository from '../repositories/CustomerRepository';
import DeleteCustomerService from '../services/DeleteCustomerService';

const customerRouter = Router();

const customerRepository = new CustomerRepository();

customerRouter.get('/', (request, response) => {
  const customers = customerRepository.all();
  return response.json(customers);
});

customerRouter.post('/', (request, response) => {
  const { name, street, city, state, country, weight, lat, lng } = request.body;

  const createCustomer = new CreateCustomerService();

  const customer = createCustomer.execute({
    name,
    street,
    city,
    state,
    country,
    weight,
    lat,
    lng,
  });

  return response.json(customer);
});

customerRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteCustomer = new DeleteCustomerService();

    const customer = deleteCustomer.execute(id);

    return response.json(customer);
  } catch (err) {
    return response.json({ err: err.message });
  }
});

export default customerRouter;
