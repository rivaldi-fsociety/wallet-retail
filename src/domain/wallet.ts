export class Wallet {
  private balance: number;

  readonly userId: string;
  readonly createdAt: Date;
  updatedAt: Date;

  constructor(userId: string, initialBalance: number = 0) {
    this.userId = userId;
    this.balance = initialBalance;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  get walletBalance(): number {
    return this.balance;
  }

  deposit(amount: number): number {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }

    this.balance += amount;
    this.updatedAt = new Date();

    return this.balance;
  }

  withdraw(amount: number): number {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }

    this.balance -= amount;
    this.updatedAt = new Date();

    return this.balance;
  }
}