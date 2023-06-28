import axios from "axios";
export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/usuario");
      const users = response.data;
      // console.log(users);
      dispatch({
        type: GET_USERS,
        payload: users,
      });
    } catch (error) {
      alert(error);
    }
  };
};

// https://jsonplaceholder.typicode.com/users