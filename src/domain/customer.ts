import { randomUUID } from "node:crypto";

export class Customer {
  readonly userId: string;
  readonly username: string;
  readonly createdAt: Date;

  constructor(username: string) {
    this.userId = randomUUID();
    this.username = username;
    this.createdAt = new Date();
  }
}