
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }

  BankAccount.prototype.deposit = function (amount) {
    if (amount <= 0) {
      console.error("Invalid deposit amount");
      return;
    }
  
    this.balance += amount;
    console.log(`${amount} deposited into account ${this.accountNumber}`);
  };
  

  BankAccount.prototype.withdraw = function (amount) {
    if (amount <= 0) {
      console.error("Invalid withdrawal amount");
      return;
    }
  
    if (amount > this.balance) {
      console.error("Insufficient balance for withdrawal");
      return;
    }
  
    this.balance -= amount;
    console.log(`${amount} withdrawn from account ${this.accountNumber}`);
  };
  
  
  BankAccount.prototype.checkBalance = function () {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  };
  

  BankAccount.prototype.isActive = function () {
    return this.active;
  };
  
  
  const account1 = new BankAccount(12345678, "Souman Doe", "Savings", 1000);
  const account2 = new BankAccount(987654321, "Jainam Smith", "Checking", 500);
  
  account1.deposit(500);
  account2.deposit(200);
  
  account1.withdraw(300);
  account2.withdraw(150);
  
  account1.checkBalance();
  account2.checkBalance();
  
  account2.active = false;
  
  console.log(`Account 1 active: ${account1.isActive()}`);
  console.log(`Account 2 active: ${account2.isActive()}`);
  
  function getTotalBalance() {
    let totalBalance = 0;
    const accounts = [account1, account2];
  
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
  
    return totalBalance;
  }
  
  console.log(`Total balance of active accounts: ${getTotalBalance()}`);
  