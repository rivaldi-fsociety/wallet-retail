import { WalletRepository } from "../infrastructure/repositories/wallet.repository";
import { SessionManager } from "./session.manager";

export class WithdrawUseCase {
  constructor(
    private readonly walletRepository: WalletRepository,
    private readonly sessionManager: SessionManager,
  ) {}

  execute(amount: number): number {
    const customer = this.sessionManager.getCurrentCustomer();

    if (!customer) {
      throw new Error("Please login first.");
    }

    const wallet = this.walletRepository.findByUserId(customer.userId);

    if (!wallet) {
      throw new Error("Wallet not found.");
    }

    return wallet.withdraw(amount);
  }
}