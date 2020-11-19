import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

interface  ICustomer {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  weight: number;
  lat: number;
  lng: number;
}

const customers: ICustomer[] = []

app.get('/customer', (request, response) => {
  return response.json(customers)
})

app.post('/customer', (request, response) => {
  const { 
    name,
    street,
    city,
    state,
    country,
    weight,
    lat,
    lng ,
  } = request.body

  const customer = {
    id: Math.random().toString(),
    name,
    street,
    city,
    state,
    country,
    weight,
    lat,
    lng ,
  } as ICustomer

  customers.push(customer)

  return response.json(customer)
})

app.delete('/customer/:id', (request, response) => {
  const { id } = request.params

  const findIndex = customers.findIndex(item => item.id === id)

  const deletedCustomer = customers.splice(findIndex, 1)

  return response.json(deletedCustomer)
})

app.listen(3333, () => console.log('Web server running on port 3333'))