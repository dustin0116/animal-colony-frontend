import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useProfileProvider } from 'contexts/profile';
import './style.css';

const Login = () => {
  const { login } = useProfileProvider();
  const [userDetails, setUserDetails] = useState({});
  const [redirectToRegister, setRedirectToRegister] = useState(false);

  const attemptLogin = (event) => {
    event.preventDefault();
    login(userDetails);
  };

  /**
   * A reusable function to update the state with a key/value pair where the
   * key is the name of the component and the value is its most recent value...
   *
   * This is a great pattern to use if you need to make the UI react to the input
   * in more complex forms and if you need the most recent value of the users'
   * submission before they click submit for validation purposes...
   * @param name
   * @param value
   */
  const updateInput = ({ target: { name, value } }) => {
    setUserDetails(prevState => ({ ...prevState, [name]: value }));
  };

  if (redirectToRegister) {
    return <Redirect to='/registration' />
  };

  return (
    <form className="login-form">
      <div class="center">
        <input name="username" type="text" placeholder="Enter Username" onChange={updateInput} />
        <input name="password" type="password" placeholder="Enter Password" onChange={updateInput} />
        <button type="submit" onClick={attemptLogin} onChange={updateInput}>
          Login
      </button>
      </div>

      <div class="center">
        <button type="submit" onClick={() => setRedirectToRegister(true)}>Not registered? Click here to register.</button>
      </div>
    </form>
  );
};

export default Login;
