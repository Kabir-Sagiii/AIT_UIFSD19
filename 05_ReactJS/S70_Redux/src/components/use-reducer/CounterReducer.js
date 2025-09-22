const counterReducer = (state, action) => {
  var stateResult;
  //Identify which button is clicked
  //or
  //Identify which action need to performed on state

  if (action.type === "increment") {
    stateResult = state + action.countValue;
  } else if (action.type === "decrement") {
    stateResult = state - 1;
  } else {
    stateResult = 0;
  }

  return stateResult;
};

export default counterReducer;
