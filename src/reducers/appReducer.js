const initialState = {
  test1: null,
  sagaValue1: null
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_TEST_1":
      return { ...state, test1: action.payload };
    case "UPDATE_SAGA_VALUE_1":
      return { ...state, sagaValue1: action.payload };
    default:
      return state;
  }
}
