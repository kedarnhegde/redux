import { useDispatch, useSelector } from "react-redux";
import { Deposit, Withdraw } from "../store/actions";

function Counter() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance);

  const handleIncrement = () => {
    dispatch(Deposit());
  };

  const handleDecrement = () => {
    dispatch(Withdraw());
  };

  return (
    <div className="App">
      <p>Balance: ${balance}</p>
      <button onClick={handleIncrement}>Depost $10</button>
      <button onClick={handleDecrement}>Withdraw $10</button>
    </div>
  );
}

export default Counter;
