import { DepositUseCase } from "../../application/deposit.usecase";
import { CommandHandler } from "./command-handler";

export class DepositHandler implements CommandHandler {
  constructor(private readonly depositUseCase: DepositUseCase) {}

  execute(args: string[]): void {
    const amountInput = args[0];

    if (!amountInput) {
      console.log("Usage: deposit <amount>");
      return;
    }

    const amount = Number(amountInput);

    if (!Number.isFinite(amount) || amount <= 0) {
      console.log("Amount must be a valid number greater than zero.");
      return;
    }

    try {
      const newBalance = this.depositUseCase.execute(amount);

      console.log("Deposit successful!");
      console.log(`New balance: ${newBalance}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong.");
      }
    }
  }
}