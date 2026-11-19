import { LoginUseCase } from "../../application/login.usecase";
import { CommandHandler } from "./command-handler";

export class LoginHandler implements CommandHandler {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  execute(args: string[]): void {
    const username = args[0];

    if (!username) {
      console.log("Usage: login <username>");
      return;
    }

    try {
      const customer = this.loginUseCase.execute(username);

      console.log(`Welcome back, ${customer.username}!`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong.");
      }
    }
  }
}