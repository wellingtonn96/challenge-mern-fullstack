class Customer {
  id: string;

  name: string;

  street: string;

  city: string;

  state: string;

  country: string;

  weight: number;

  lat: number;

  lng: number;

  constructor({
    name,
    street,
    city,
    state,
    country,
    weight,
    lat,
    lng,
  }: Omit<Customer, 'id'>) {
    this.id = Math.random().toString();
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.weight = weight;
    this.lat = lat;
    this.lng = lng;
  }
}

export default Customer;
