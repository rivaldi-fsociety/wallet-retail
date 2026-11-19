import { TransferUseCase } from "../../application/transfer.usecase";
import { CommandHandler } from "./command-handler";

export class TransferHandler implements CommandHandler {
  constructor(private readonly transferUseCase: TransferUseCase) {}

  execute(args: string[]): void {
    const targetUsername = args[0];
    const amountInput = args[1];

    if (!targetUsername || !amountInput) {
      console.log("Usage: transfer <username> <amount>");
      return;
    }

    const amount = Number(amountInput);

    if (!Number.isFinite(amount) || amount <= 0) {
      console.log("Amount must be a valid number greater than zero.");
      return;
    }

    try {
      const result = this.transferUseCase.execute(targetUsername, amount);

      console.log("Transfer successful!");
      console.log(`Your new balance: ${result.senderBalance}`);
      console.log(`Recipient new balance: ${result.recipientBalance}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong.");
      }
    }
  }
}