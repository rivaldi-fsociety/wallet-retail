import { Terminal } from "./terminal";
import { parseCommand } from "./command-parser";
import { CLIDependencies } from "./cli.dependencies";
import { RegisterHandler } from "./commands/register.handler";
import { LoginHandler } from "./commands/login.handler";
import { LogoutHandler } from "./commands/logout.handler";
import { DepositHandler } from "./commands/deposit.handler";
import { WithdrawHandler } from "./commands/withdraw.handler";
import { TransferHandler } from "./commands/transfer.handler";
import { BalanceHandler } from "./commands/balance.handler";
import { HelpHandler } from "./commands/help.handler";

export class CLI {
  private terminal = new Terminal();
  private isRunning = true;

  private registerHandler: RegisterHandler;
  private loginHandler: LoginHandler;
  private logoutHandler: LogoutHandler;
  private depositHandler: DepositHandler;
  private withdrawHandler: WithdrawHandler;
  private transferHandler: TransferHandler;
  private balanceHandler: BalanceHandler;
  private helpHandler: HelpHandler;

  constructor(private readonly dependencies: CLIDependencies) {
    this.registerHandler = new RegisterHandler(
      this.dependencies.registerUseCase,
    );

    this.loginHandler = new LoginHandler(
      this.dependencies.loginUseCase,
    );

    this.logoutHandler = new LogoutHandler(
      this.dependencies.logoutUseCase,
    );

    this.depositHandler = new DepositHandler(
      this.dependencies.depositUseCase,
    );

    this.withdrawHandler = new WithdrawHandler(
      this.dependencies.withdrawUseCase,
    );

    this.transferHandler = new TransferHandler(
      this.dependencies.transferUseCase,
    );

    this.balanceHandler = new BalanceHandler(
      this.dependencies.balanceUseCase,
    );

    this.helpHandler = new HelpHandler();
  }

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
      case "register":
        this.registerHandler.execute(args);
        break;

      case "login":
        this.loginHandler.execute(args);
        break;

      case "logout":
        this.logoutHandler.execute();
        break;

      case "deposit":
        this.depositHandler.execute(args);
        break;

      case "withdraw":
        this.withdrawHandler.execute(args);
        break;

      case "transfer":
        this.transferHandler.execute(args);
        break;

      case "balance":
        this.balanceHandler.execute();
        break;

      case "exit":
        this.isRunning = false;
        console.log("Goodbye!");
        break;

      case "help":
        this.helpHandler.execute(args);
        break;

      default:
        console.log(`Unknown command: ${command}`);
        break;
    }
  }
}