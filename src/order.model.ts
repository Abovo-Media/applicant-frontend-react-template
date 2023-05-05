export interface Order {
  id: number;
  customer: Customer;
  product: Product;
  order_date: string;
  price: string;
}

export interface Customer {
  id: number;
  name: string;
  address: string;
  postal_zip: string;
  country: string;
  phone: string;
  email: string;
  latlng: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
}
