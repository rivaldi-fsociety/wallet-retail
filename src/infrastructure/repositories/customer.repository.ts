import { Customer } from "../../domain/customer";

export class CustomerRepository {
  private customers: Map<string, Customer> = new Map();

  save(customer: Customer): void {
    this.customers.set(customer.username, customer);
  }

  findByUsername(username: string): Customer | undefined {
    return this.customers.get(username);
  }

  existsByUsername(username: string): boolean {
    return this.customers.has(username);
  }
}