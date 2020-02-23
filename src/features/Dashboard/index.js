import React from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';

const Dashboard = () => {
  const { state } = useProfileProvider();
  const { state: { name: { first } } } = useProfileProvider();

  return (
    <div className="dashboard">
      <h1>{`Welcome ${first}!`}</h1>
      <h2>{JSON.stringify(state)}</h2>
      <p>Login Successful.</p>
      <Logout />
    </div>
  );
};

export default Dashboard;
