import test from "node:test";
import assert from "node:assert/strict";
import { Wallet } from "./wallet";

test("wallet should start with the initial balance", () => {
  const wallet = new Wallet("emma", 100);

  assert.equal(wallet.walletBalance, 100);
});

test("wallet should deposit money successfully", () => {
  const wallet = new Wallet("emma", 100);

  wallet.deposit(50);

  assert.equal(wallet.walletBalance, 150);
});

test("wallet should withdraw money successfully", () => {
  const wallet = new Wallet("emma", 100);

  wallet.withdraw(30);

  assert.equal(wallet.walletBalance, 70);
});

test("wallet should reject zero deposit", () => {
  const wallet = new Wallet("emma", 100);

  assert.throws(() => wallet.deposit(0));
  assert.equal(wallet.walletBalance, 100);
});

test("wallet should reject withdrawal exceeding balance", () => {
  const wallet = new Wallet("emma", 100);

  assert.throws(() => wallet.withdraw(150));
  assert.equal(wallet.walletBalance, 100);
});