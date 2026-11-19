import { WithdrawUseCase } from "../../application/withdraw.usecase";
import { CommandHandler } from "./command-handler";

export class WithdrawHandler implements CommandHandler {
  constructor(private readonly withdrawUseCase: WithdrawUseCase) {}

  execute(args: string[]): void {
    const amountInput = args[0];

    if (!amountInput) {
      console.log("Usage: withdraw <amount>");
      return;
    }

    const amount = Number(amountInput);

    if (!Number.isFinite(amount) || amount <= 0) {
      console.log("Amount must be a valid number greater than zero.");
      return;
    }

    try {
      const newBalance = this.withdrawUseCase.execute(amount);

      console.log("Withdrawal successful!");
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