export const updateTest1 = payload => {
  return {
    type: 'UPDATE_TEST_1',
    payload: payload,
  };
};

export const sagaTest1 = payload => {
  return {
    type: 'SAGA_TEST_1',
    payload: payload,
  };
};
