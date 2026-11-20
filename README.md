# Retail Wallet CLI

A command-line application that simulates customer interactions with a retail wallet system.

## 1. Required Runtime

- Node.js 20+
- npm (included with Node.js)

The application is built using TypeScript and runs on Node.js.

## 2. Setup and Run

### Run the application

Clone the repository and navigate to the project directory:

```bash
cd retail-wallet
```

Make the startup script executable:

```bash
chmod +x start.sh
```

Start the application:

```bash
./start.sh
```

The startup script will automatically:

1. Install dependencies.
2. Compile the TypeScript source code.
3. Start the CLI application.

### Manual setup

Alternatively, you can run the application manually:

```bash
npm install
npm run build
npm start
```

## 3. Running Tests

The project uses Node.js's built-in test runner (`node:test`) and TypeScript.

Run the test suite using:

```bash
npm test
```

This command compiles the TypeScript code and executes the test suite.

## 4. Key Decisions and Assumptions

- **In-memory storage:** Customer and wallet data are stored in memory using `Map`-based repositories. No external database is required.
- **Fresh environment:** Every application execution starts with an empty state. Data is not persisted between runs.
- **Registration before login:** Users must register with a username before they can log in.
- **Username uniqueness:** Each username must be unique. Usernames are case-sensitive.
- **Single active session:** Only one customer can be logged in at a time. The current user must log out before switching accounts.
- **Initial wallet balance:** Every newly registered customer receives a wallet with an initial balance of zero.
- **Transfer behavior:** Transfers are performed between existing users. Users cannot transfer money to themselves or transfer more than their available balance.
- **Amount validation:** Deposit, withdrawal, and transfer amounts must be valid positive numbers.
- **Runtime dependencies:** The application uses Node.js and npm, with TypeScript for development and compilation.

## 5. Known Limitations and Unfinished Work

- **No persistence:** Customer and wallet data are lost when the application terminates.
- **No transaction history:** Deposits, withdrawals, and transfers are not recorded as transaction history.
- **No authentication credentials:** Login is based on username only; passwords or other authentication mechanisms are not implemented.
- **Limited automated test coverage:** Automated tests currently focus on wallet domain behavior. Application use cases and CLI interactions are not fully covered by automated tests.
- **CLI-only interface:** The application is accessible through a command-line interface without a graphical interface or API.
