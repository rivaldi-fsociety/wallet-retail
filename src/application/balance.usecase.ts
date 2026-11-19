import { WalletRepository } from "../infrastructure/repositories/wallet.repository";
import { SessionManager } from "./session.manager";

export class BalanceUseCase {
  constructor(
    private readonly walletRepository: WalletRepository,
    private readonly sessionManager: SessionManager,
  ) {}

  execute(): number {
    const customer = this.sessionManager.getCurrentCustomer();

    if (!customer) {
      throw new Error("Please login first.");
    }

    const wallet = this.walletRepository.findByUserId(customer.userId);

    if (!wallet) {
      throw new Error("Wallet not found.");
    }

    return wallet.walletBalance;
  }
}