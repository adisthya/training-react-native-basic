const initialState = {
  counter: 0,
};

const dataReducer = (currentState = initialState, action) => {
  console.log('ACTION:', action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...currentState,
        counter: currentState.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...currentState,
        counter: currentState.counter - 1,
      };
    default:
      return currentState;
  }
};

export default dataReducer;
