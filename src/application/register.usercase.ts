import { Customer } from "../domain/customer";
import { Wallet } from "../domain/wallet";
import { CustomerRepository } from "../infrastructure/repositories/customer.repository";
import { WalletRepository } from "../infrastructure/repositories/wallet.repository";

export class RegisterUseCase {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly walletRepository: WalletRepository,
  ) {}

  execute(username: string): Customer {
    if (this.customerRepository.existsByUsername(username)) {
      throw new Error("Username already exists.");
    }

    const customer = new Customer(username);
    const wallet = new Wallet(customer.userId);

    this.customerRepository.save(customer);
    this.walletRepository.save(wallet);

    return customer;
  }
}