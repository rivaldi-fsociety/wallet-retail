import { CustomerRepository } from "./infrastructure/repositories/customer.repository";
import { WalletRepository } from "./infrastructure/repositories/wallet.repository";
import { SessionManager } from "./application/session.manager";

import { RegisterUseCase } from "./application/register.usecase";
import { LoginUseCase } from "./application/login.usecase";
import { LogoutUseCase } from "./application/logout.usecase";
import { DepositUseCase } from "./application/deposit.usecase";
import { WithdrawUseCase } from "./application/withdraw.usecase";
import { TransferUseCase } from "./application/transfer.usecase";
import { BalanceUseCase } from "./application/balance.usecase";

import { CLI } from "./cli/cli";

async function main(): Promise<void> {
  // Infrastructure
  const customerRepository = new CustomerRepository();
  const walletRepository = new WalletRepository();

  // Application
  const sessionManager = new SessionManager();

  // Use Cases
  const registerUseCase = new RegisterUseCase(
    customerRepository,
    walletRepository,
  );

  const loginUseCase = new LoginUseCase(
    customerRepository,
    sessionManager,
  );

  const logoutUseCase = new LogoutUseCase(
    sessionManager,
  );

  const depositUseCase = new DepositUseCase(
    walletRepository,
    sessionManager,
  );

  const withdrawUseCase = new WithdrawUseCase(
    walletRepository,
    sessionManager,
  );

  const transferUseCase = new TransferUseCase(
    customerRepository,
    walletRepository,
    sessionManager,
  );

  const balanceUseCase = new BalanceUseCase(
    walletRepository,
    sessionManager,
  );

  // CLI
  const cli = new CLI({
    registerUseCase,
    loginUseCase,
    logoutUseCase,
    depositUseCase,
    withdrawUseCase,
    transferUseCase,
    balanceUseCase,
  });

  await cli.start();
}

main();