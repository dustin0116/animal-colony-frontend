import React from 'react';
import { useProfileProvider } from 'contexts/profile';
import { Container, CssBaseline, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Cart = () => {
  const { state: { cart } } = useProfileProvider();

  /** Material-UI */
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(name, cost) {
    return { name, cost };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  ];

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <h2>{JSON.stringify(cart)}</h2>
    </Container >
  );
};

export default Cart;
