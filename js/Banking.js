// deposit button even handler
const handleDeposit = () => {
  const enteredDepositNumber = inputNumberConversion("deposit");
  if (enteredDepositNumber > 0) {
    updateWithdrawAndDeposit("current-deposit", enteredDepositNumber);
    updateBalance(enteredDepositNumber, true);
  }
};
// withdraw button even handler
const handleWithdraw = () => {
  const currentBalance = document.getElementById("current-balance");
  const currentBalanceAmount = currentBalance.innerText;
  const currentBalanceNumber = parseFloat(currentBalanceAmount);
  const enteredWithdrawNumber = inputNumberConversion("withdraw");
  if (
    enteredWithdrawNumber > 0 &&
    currentBalanceNumber > enteredWithdrawNumber
  ) {
    updateWithdrawAndDeposit("current-withdraw", enteredWithdrawNumber);
    updateBalance(enteredWithdrawNumber, false);
  }
  if (currentBalanceNumber < enteredWithdrawNumber) {
    alert("You have not enough amount");
  }
};
// input number conversion
const inputNumberConversion = (id) => {
  const enteredAmount = document.getElementById(id).value;
  const enteredAmountNumber = parseFloat(enteredAmount);
  document.getElementById(id).value = "";
  return enteredAmountNumber;
};
// update withdraw and deposit
const updateWithdrawAndDeposit = (id, amount) => {
  const currentAmount = document.getElementById(id).innerText;
  const currentAmountNumber = parseFloat(currentAmount);
  document.getElementById(id).innerText = currentAmountNumber + amount;
};

// balance update
const updateBalance = (amount, isTrue) => {
  const currentBalance = document.getElementById("current-balance");
  const currentBalanceAmount = currentBalance.innerText;
  const currentBalanceNumber = parseFloat(currentBalanceAmount);
  if (isTrue === true) {
    currentBalance.innerText = currentBalanceNumber + amount;
  } else {
    currentBalance.innerText = currentBalanceNumber - amount;
  }
};
