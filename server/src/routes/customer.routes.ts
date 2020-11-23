import { Router } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';
import customerRepository from '../repositories/CustomerRepository';
import DeleteCustomerService from '../services/DeleteCustomerService';

const customerRouter = Router();

customerRouter.get('/', async (request, response) => {
  try {
    const customers = await customerRepository.find();
    return response.json(customers);
  } catch (error) {
    return response.json(400).json({ err: error.message });
  }
});

customerRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      street,
      city,
      state,
      country,
      weight,
      lat,
      lng,
    } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
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
  } catch (error) {
    return response.json(400).json({ err: error.message });
  }
});

customerRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.execute(id);

    return response.json().send();
  } catch (err) {
    return response.status(400).json({ err: err.message });
  }
});

export default customerRouter;
