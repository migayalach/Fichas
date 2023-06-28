import { GET_USERS } from "./actions";
const initialState = {
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...initialState, users: action.payload };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
