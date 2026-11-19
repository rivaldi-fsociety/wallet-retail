import { SessionManager } from "./session.manager";

export class LogoutUseCase {
  constructor(private readonly sessionManager: SessionManager) {}

  execute(): void {
    if (!this.sessionManager.isLoggedIn()) {
      throw new Error("No user is currently logged in.");
    }

    this.sessionManager.logout();
  }
}