import { useState } from "react";

function Counter() {
  const [balance, setBalance] = useState(0);
  const handleDeposit = () => {
    setBalance((oldVal) => oldVal + 10);
  };

  const handleWithdraw = () => {
    setBalance((oldVal) => oldVal - 10);
  };

  return (
    <div className="App">
      <p>Balance: ${balance}</p>
      <button onClick={handleDeposit}>Deposit $10</button>
      <button onClick={handleWithdraw}>Withdraw $10</button>
    </div>
  );
}

export default Counter;
