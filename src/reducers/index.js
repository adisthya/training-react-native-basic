const initialState = {
  counter: 0,
};

const dataReducer = (currentState = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...currentState,
        counter: Number(currentState.counter) + 1,
      };
    default:
      return currentState;
  }
};

export default dataReducer;
