export interface CommandHandler {
  execute(args: string[]): void;
}