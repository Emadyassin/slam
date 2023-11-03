import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from "prop-types";

const BankAccounts = [
  {
    id: 1,
    AccType: "Loan Accounts",
    AccNo: 130,
  },
  {
    id: 2,
    AccType: "Saving Accounts",
    AccNo: 160,
  },
  {
    id: 3,
    AccType: "Current Accounts",
    AccNo: 59,
  },
  {
    id: 4,
    AccType: "Deposit Accounts",
    AccNo: 30,
  },
];


const BankAccountsCards = ({gridXsCol,gridMdCol}) => {
  return (
    <>
      {BankAccounts.map((acc) => (
        <Grid  xs={gridXsCol} md={gridMdCol} key={acc.id}>
          <Box
            sx={{ marginTop: "12px" }}
            borderRadius={8}
            height={150}
            width
            boxShadow={3}
            padding={2}
          >
            <Typography variant="body1" component="h3" gutterBottom>
              {acc.AccType}
            </Typography>
            <Divider color="white" />

            <Typography variant="h3" align="center" p={2} component="h1" width>
              {acc.AccNo}
            </Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};

BankAccountsCards.propTypes = {
  gridXsCol: PropTypes.number,
  gridMdCol: PropTypes.number,
};

export default BankAccountsCards;
