const myReducer = (state, action) => {
  var data;
  if (action.type === "NAME") {
    data = action.data;
  }

  return data;
};

export default myReducer;
