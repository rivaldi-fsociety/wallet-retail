import { BalanceUseCase } from "../../application/balance.usecase";
import { CommandHandler } from "./command-handler";

export class BalanceHandler implements CommandHandler {
  constructor(private readonly balanceUseCase: BalanceUseCase) {}

  execute(): void {
    try {
      const balance = this.balanceUseCase.execute();

      console.log(`Your current balance: ${balance}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong.");
      }
    }
  }
}