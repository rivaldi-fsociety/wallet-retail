import { CustomerRepository } from "../infrastructure/repositories/customer.repository";
import { SessionManager } from "./session.manager";

export class LoginUseCase {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly sessionManager: SessionManager,
  ) {}

  execute(username: string) {
    if (this.sessionManager.isLoggedIn()) {
      const currentCustomer = this.sessionManager.getCurrentCustomer();

      if (currentCustomer?.username === username) {
        throw new Error(`${username} is already logged in.`);
      }

      throw new Error("Please logout before switching users.");
    }

    const customer = this.customerRepository.findByUsername(username);

    if (!customer) {
      throw new Error("User not found. Please register first.");
    }

    this.sessionManager.login(customer);

    return customer;
  }
}