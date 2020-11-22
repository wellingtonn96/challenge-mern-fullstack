import { model } from 'mongoose';

import { CustomerSchema, ICustomer } from '../models/Customer';

export default model<ICustomer>('customer', CustomerSchema);
