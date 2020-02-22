import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useProfileProvider } from 'contexts/profile';

const Register = () => {
  const { register } = useProfileProvider();
  const [userDetails, setUserDetails] = useState({});
  const [redirectLogin, setRedirectLogin] = useState(false);

  const attemptRegister = (event) => {
    event.preventDefault();
    register(userDetails);
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

  if (redirectLogin) {
    return <Redirect to="/" />
  };

  return (
    <form className="registration-form">
      <button onClick={() => setRedirectLogin(true)}>Back to login</button>
      <input name="firstName" type="text" placeholder="Enter First Name" onChange={updateInput} />
      <input name="lastName" type="text" placeholder="Enter Last Name" onChange={updateInput} />
      <input name="username" type="text" placeholder="Enter Username" onChange={updateInput} />
      <input name="password" type="password" placeholder="Enter Password" onChange={updateInput} />
      <button onClick={attemptRegister} onChange={updateInput}>
        Register
      </button>
    </form>
  );
};

export default Register;
