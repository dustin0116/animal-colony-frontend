import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useProfileProvider } from 'contexts/profile';

const RegistrationForm = () => {
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
    return <Redirect to='/' />
  };

  return (
    <form className="registration-form">
      <button type="submit" onClick={() => setRedirectLogin(false)}>Back to login</button>
      <input name="firstName" type="text" onChange={updateInput} />
      <input name="lastName" type="text" onChange={updateInput} />
      <input name="username" type="text" onChange={updateInput} />
      <input name="password" type="password" onChange={updateInput} />
      <button type="submit" onClick={attemptRegister} onChange={updateInput}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
