import { CustomerRepository } from "../infrastructure/repositories/customer.repository";
import { WalletRepository } from "../infrastructure/repositories/wallet.repository";
import { SessionManager } from "./session.manager";

export class TransferUseCase {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly walletRepository: WalletRepository,
    private readonly sessionManager: SessionManager,
  ) {}

  execute(targetUsername: string, amount: number) {
    const sender = this.sessionManager.getCurrentCustomer();

    if (!sender) {
      throw new Error("Please login first.");
    }

    if (sender.username === targetUsername) {
      throw new Error("You cannot transfer money to yourself.");
    }

    const recipient = this.customerRepository.findByUsername(targetUsername);

    if (!recipient) {
      throw new Error("Recipient not found.");
    }

    const senderWallet = this.walletRepository.findByUserId(sender.userId);
    const recipientWallet = this.walletRepository.findByUserId(recipient.userId);

    if (!senderWallet || !recipientWallet) {
      throw new Error("Wallet not found.");
    }

    // Validate before changing either wallet
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Transfer amount must be greater than zero.");
    }

    if (senderWallet.walletBalance < amount) {
      throw new Error("Insufficient balance.");
    }

    senderWallet.withdraw(amount);
    recipientWallet.deposit(amount);

    return {
      senderBalance: senderWallet.walletBalance,
      recipientBalance: recipientWallet.walletBalance,
    };
  }
}