import { CommandHandler } from "./command-handler";

export class HelpHandler implements CommandHandler {
  execute(args: string[]): void {
    console.log(`
Available commands:

  register <username>          Create a new account
  login <username>           Login to your account
  logout                    Logout from your account
  deposit <amount>           Deposit money into your wallet
  withdraw <amount>          Withdraw money from your wallet
  transfer <username> <amount> Transfer money to another user
  balance                   Check your current balance
  help                      Show available commands
  exit                      Exit the application
`);
  }
}