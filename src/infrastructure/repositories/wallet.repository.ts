import { Wallet } from "../../domain/wallet";

export class WalletRepository {
  private wallets: Map<string, Wallet> = new Map();

  save(wallet: Wallet): void {
    this.wallets.set(wallet.userId, wallet);
  }

  findByUserId(userId: string): Wallet | undefined {
    return this.wallets.get(userId);
  }

  existsByUserId(userId: string): boolean {
    return this.wallets.has(userId);
  }
}