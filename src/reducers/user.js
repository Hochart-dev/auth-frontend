const initialState = {
  id: null,
  email: null,
  displayName: null,
  avatar: null,
  isStaff: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, ...action.user };
    case 'USER_LOGOUT':
      return initialState;
    default:
      return state;
  }
};
