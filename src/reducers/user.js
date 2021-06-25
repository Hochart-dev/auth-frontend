const initialState = {
  id: null,
  email: null,
  displayName: null,
  avatar: null,
  isStaff: 0,
};

export default (state = initialState, action) => {
  if (action.type === 'USER_LOGIN') {
    return { ...state, ...action.user };
  }
  if (action.type === 'USER_LOGOUT') {
    return initialState;
  }
  return state;
};
