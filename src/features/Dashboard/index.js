import React from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';
import ItemForm from 'components/ItemForm';

const Dashboard = () => {
  const { state } = useProfileProvider();
  const { state: { name: { first } } } = useProfileProvider();

  return (
    <div className="dashboard" style={{textAlign: 'center'}}>
      <h1>{`Welcome ${first}!`}</h1>
      <h2>{JSON.stringify(state)}</h2>
      <p>Login Successful.</p>
      <Logout />
      <ItemForm />
    </div>
  );
};

export default Dashboard;
