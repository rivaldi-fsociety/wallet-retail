import { createInterface } from "node:readline";

export class Terminal {
  private readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  async ask(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.readline.question(question, (answer) => {
        resolve(answer.trim());
      });
    });
  }

  close(): void {
    this.readline.close();
  }
}