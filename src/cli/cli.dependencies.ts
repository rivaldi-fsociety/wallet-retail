import { RegisterUseCase } from "../application/register.usecase";
import { LoginUseCase } from "../application/login.usecase";
import { LogoutUseCase } from "../application/logout.usecase";
import { DepositUseCase } from "../application/deposit.usecase";
import { WithdrawUseCase } from "../application/withdraw.usecase";
import { TransferUseCase } from "../application/transfer.usecase";
import { BalanceUseCase } from "../application/balance.usecase";

export interface CLIDependencies {
  registerUseCase: RegisterUseCase;
  loginUseCase: LoginUseCase;
  logoutUseCase: LogoutUseCase;
  depositUseCase: DepositUseCase;
  withdrawUseCase: WithdrawUseCase;
  transferUseCase: TransferUseCase;
  balanceUseCase: BalanceUseCase;
}