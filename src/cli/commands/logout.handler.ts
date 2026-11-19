import { LogoutUseCase } from "../../application/logout.usecase";
import { CommandHandler } from "./command-handler";

export class LogoutHandler implements CommandHandler {
  constructor(private readonly logoutUseCase: LogoutUseCase) {}

  execute(): void {
    try {
      this.logoutUseCase.execute();

      console.log("Logged out successfully.");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong.");
      }
    }
  }
}