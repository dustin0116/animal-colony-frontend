import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useReducer, useContext } from 'react';

const initialState = { loggedIn: false, name: {} };
const store = createContext(initialState);
const { Provider } = store;

const BASE_URL = 'http://localhost:5000/api';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    switch (type) {
      case LOGIN: {
        // Store the profile data in the state
        return { ...prevState, loggedIn: true, ...payload };
      }

      case REGISTER: {
        return { ...prevState, loggedIn: true, ...payload };
      }

      case LOGOUT: {
        // Reset state to logged out
        return initialState;
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useProfileProvider = () => {
  const { state, dispatch } = useContext(store);

  const login = credentials => axios
    .post(`${BASE_URL}/login`, credentials)
    .then(({ data }) => {
      dispatch({ type: LOGIN, payload: data });
    });


  const register = credentials => axios
    .post(`${BASE_URL}/user`, credentials)
    .then(({ data }) => {
      dispatch({ type: REGISTER, payload: data })
    });

  const logout = () => dispatch({
    type: LOGOUT,
  });

  const addItem = credentials => axios
    .post(`${BASE_URL}/cart`, credentials)
    .then(({data}) => {
      dispatch({ payload: data })
    });

  return {
    state,
    dispatch,
    login,
    logout,
    register,
    addItem
  };
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProfileProvider, useProfileProvider };
