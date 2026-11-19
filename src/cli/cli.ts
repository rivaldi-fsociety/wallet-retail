import { Terminal } from "./terminal";
import { parseCommand } from "./command-parser";

export class CLI {
  private terminal = new Terminal();
  private isRunning = true;

  async start(): Promise<void> {
    console.log("Welcome to Retail Wallet!");
    console.log("Type 'help' to see available commands.\n");

    while (this.isRunning) {
      const input = await this.terminal.ask("> ");

      if (!input) {
        continue;
      }

      const parsed = parseCommand(input);

      await this.handleCommand(parsed.command, parsed.args);
    }

    this.terminal.close();
  }

  private async handleCommand(command: string, args: string[]): Promise<void> {
    switch (command) {
      case "exit":
        this.isRunning = false;
        console.log("Goodbye!");
        break;

      case "help":
        console.log("Available commands: register, login, logout, deposit, withdraw, transfer, balance, exit");
        break;

      default:
        console.log(`Unknown command: ${command}`);
        break;
    }
  }
}