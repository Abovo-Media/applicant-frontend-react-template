export async function getOrders() {
  return fetch("http://localhost:3000/orders");
}
