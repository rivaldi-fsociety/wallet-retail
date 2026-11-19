import { Customer } from "../domain/customer";

export class SessionManager {
  private currentCustomer: Customer | null = null;

  getCurrentCustomer(): Customer | null {
    return this.currentCustomer;
  }

  login(customer: Customer): void {
    if (this.currentCustomer !== null) {
      throw new Error("A user is already logged in.");
    }

    this.currentCustomer = customer;
  }

  logout(): void {
    if (this.currentCustomer === null) {
      throw new Error("No user is currently logged in.");
    }

    this.currentCustomer = null;
  }

  isLoggedIn(): boolean {
    return this.currentCustomer !== null;
  }
}