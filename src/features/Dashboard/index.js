import React from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';

const Dashboard = () => {
  const { state: { name: { first } } } = useProfileProvider();

  return (
    <div className="dashboard">
      <h1>{`Welcome ${first}!`}</h1>
      <p>Login Successful.</p>
      <Logout />
    </div>
  );
};

export default Dashboard;
