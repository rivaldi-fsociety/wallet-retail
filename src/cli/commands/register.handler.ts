import { RegisterUseCase } from "../../application/register.usecase";
import { CommandHandler } from "./command-handler";

export class RegisterHandler implements CommandHandler {
  constructor(private readonly registerUseCase: RegisterUseCase) {}

  execute(args: string[]): void {
    const username = args[0];

    if (!username) {
      console.log("Usage: register <username>");
      return;
    }

    try {
      const customer = this.registerUseCase.execute(username);

      console.log(`Account created successfully for ${customer.username}!`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong.");
      }
    }
  }
}