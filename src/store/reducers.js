const initialState = 0;

export function BalanceReducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + 10;
    case "WITHDRAW":
      return state - 10;
    default:
      return state;
  }
}
