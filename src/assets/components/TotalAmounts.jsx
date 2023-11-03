import { Box, Divider, Typography, Tab, Tabs } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";

const TotalAmounts = ({ gridXsCol, gridMdCol, title }) => {
  const oldAmountData = [
    { Year: 2022, Month: "January", Amount: 512376, AccountType: "loans" },
    { Year: 2022, Month: "February", Amount: 23567, AccountType: "loans" },
    { Year: 2022, Month: "March", Amount: 25161, AccountType: "loans" },
    { Year: 2022, Month: "April", Amount: 45161, AccountType: "loans" },
    { Year: 2022, Month: "May", Amount: 2590, AccountType: "loans" },
    { Year: 2022, Month: "June", Amount: 435280, AccountType: "loans" },
    { Year: 2022, Month: "July", Amount: 54670, AccountType: "loans" },
    { Year: 2022, Month: "August", Amount: 64350, AccountType: "loans" },
    { Year: 2022, Month: "September", Amount: 6450, AccountType: "loans" },
    { Year: 2022, Month: "October", Amount: 4650, AccountType: "loans" },
    { Year: 2022, Month: "November", Amount: 5430, AccountType: "loans" },
    { Year: 2022, Month: "December", Amount: 20432, AccountType: "loans" },
    { Year: 2022, Month: "January", Amount: 76432, AccountType: "Savings" },
    { Year: 2022, Month: "February", Amount: 123467, AccountType: "Savings" },
    { Year: 2022, Month: "March", Amount: 6221, AccountType: "Savings" },
    { Year: 2022, Month: "April", Amount: 6135, AccountType: "Savings" },
    { Year: 2022, Month: "May", Amount: 95430, AccountType: "Savings" },
    { Year: 2022, Month: "June", Amount: 8120, AccountType: "Savings" },
    { Year: 2022, Month: "July", Amount: 704, AccountType: "Savings" },
    { Year: 2022, Month: "August", Amount: 6420, AccountType: "Savings" },
    { Year: 2022, Month: "September", Amount: 5220, AccountType: "Savings" },
    { Year: 2022, Month: "October", Amount: 40434, AccountType: "Savings" },
    { Year: 2022, Month: "November", Amount: 4330, AccountType: "Savings" },
    { Year: 2022, Month: "December", Amount: 1220, AccountType: "Savings" },
    { Year: 2022, Month: "January", Amount: 23414, AccountType: "Currents" },
    { Year: 2022, Month: "February", Amount: 341467, AccountType: "Currents" },
    { Year: 2022, Month: "March", Amount: 12461, AccountType: "Currents" },
    { Year: 2022, Month: "April", Amount: 123461, AccountType: "Currents" },
    { Year: 2022, Month: "May", Amount: 23490, AccountType: "Currents" },
    { Year: 2022, Month: "June", Amount: 231480, AccountType: "Currents" },
    { Year: 2022, Month: "July", Amount: 32470, AccountType: "Currents" },
    { Year: 2022, Month: "August", Amount: 321460, AccountType: "Currents" },
    { Year: 2022, Month: "September", Amount: 213450, AccountType: "Currents" },
    { Year: 2022, Month: "October", Amount: 421340, AccountType: "Currents" },
    { Year: 2022, Month: "November", Amount: 32430, AccountType: "Currents" },
    { Year: 2022, Month: "December", Amount: 324120, AccountType: "Currents" },
    { Year: 2022, Month: "January", Amount: 763214, AccountType: "Deposits" },
    { Year: 2022, Month: "February", Amount: 23467, AccountType: "Deposits" },
    { Year: 2022, Month: "March", Amount: 64351, AccountType: "Deposits" },
    { Year: 2022, Month: "April", Amount: 65461, AccountType: "Deposits" },
    { Year: 2022, Month: "May", Amount: 356290, AccountType: "Deposits" },
    { Year: 2022, Month: "June", Amount: 754380, AccountType: "Deposits" },
    { Year: 2022, Month: "July", Amount: 75470, AccountType: "Deposits" },
    { Year: 2022, Month: "August", Amount: 7360, AccountType: "Deposits" },
    { Year: 2022, Month: "September", Amount: 324550, AccountType: "Deposits" },
    { Year: 2022, Month: "October", Amount: 43740, AccountType: "Deposits" },
    { Year: 2022, Month: "November", Amount: 253130, AccountType: "Deposits" },
    { Year: 2022, Month: "December", Amount: 21520, AccountType: "Deposits" },
    { Year: 2023, Month: "January", Amount: 12376, AccountType: "loans" },
    { Year: 2023, Month: "February", Amount: 3567, AccountType: "loans" },
    { Year: 2023, Month: "March", Amount: 5161, AccountType: "loans" },
    { Year: 2023, Month: "April", Amount: 4561, AccountType: "loans" },
    { Year: 2023, Month: "May", Amount: 290, AccountType: "loans" },
    { Year: 2023, Month: "June", Amount: 43280, AccountType: "loans" },
    { Year: 2023, Month: "July", Amount: 5670, AccountType: "loans" },
    { Year: 2023, Month: "August", Amount: 4350, AccountType: "loans" },
    { Year: 2023, Month: "September", Amount: 450, AccountType: "loans" },
    { Year: 2023, Month: "October", Amount: 4650, AccountType: "loans" },
    { Year: 2023, Month: "November", Amount: 430, AccountType: "loans" },
    { Year: 2023, Month: "December", Amount: 2032, AccountType: "loans" },
    { Year: 2023, Month: "January", Amount: 7642, AccountType: "Savings" },
    { Year: 2023, Month: "February", Amount: 12367, AccountType: "Savings" },
    { Year: 2023, Month: "March", Amount: 6221, AccountType: "Savings" },
    { Year: 2023, Month: "April", Amount: 615, AccountType: "Savings" },
    { Year: 2023, Month: "May", Amount: 9540, AccountType: "Savings" },
    { Year: 2023, Month: "June", Amount: 820, AccountType: "Savings" },
    { Year: 2023, Month: "July", Amount: 70467, AccountType: "Savings" },
    { Year: 2023, Month: "August", Amount: 640, AccountType: "Savings" },
    { Year: 2023, Month: "September", Amount: 220, AccountType: "Savings" },
    { Year: 2023, Month: "October", Amount: 4034, AccountType: "Savings" },
    { Year: 2023, Month: "November", Amount: 4330, AccountType: "Savings" },
    { Year: 2023, Month: "December", Amount: 1220, AccountType: "Savings" },
    { Year: 2023, Month: "January", Amount: 2314, AccountType: "Currents" },
    { Year: 2023, Month: "February", Amount: 34467, AccountType: "Currents" },
    { Year: 2023, Month: "March", Amount: 1241, AccountType: "Currents" },
    { Year: 2023, Month: "April", Amount: 12361, AccountType: "Currents" },
    { Year: 2023, Month: "May", Amount: 2340, AccountType: "Currents" },
    { Year: 2023, Month: "June", Amount: 23480, AccountType: "Currents" },
    { Year: 2023, Month: "July", Amount: 3470, AccountType: "Currents" },
    { Year: 2023, Month: "August", Amount: 32460, AccountType: "Currents" },
    { Year: 2023, Month: "September", Amount: 21350, AccountType: "Currents" },
    { Year: 2023, Month: "October", Amount: 42130, AccountType: "Currents" },
    { Year: 2023, Month: "November", Amount: 3230, AccountType: "Currents" },
    { Year: 2023, Month: "December", Amount: 32120, AccountType: "Currents" },
    { Year: 2023, Month: "January", Amount: 76214, AccountType: "Deposits" },
    { Year: 2023, Month: "February", Amount: 2467, AccountType: "Deposits" },
    { Year: 2023, Month: "March", Amount: 6451, AccountType: "Deposits" },
    { Year: 2023, Month: "April", Amount: 6461, AccountType: "Deposits" },
    { Year: 2023, Month: "May", Amount: 35690, AccountType: "Deposits" },
    { Year: 2023, Month: "June", Amount: 75380, AccountType: "Deposits" },
    { Year: 2023, Month: "July", Amount: 7570, AccountType: "Deposits" },
    { Year: 2023, Month: "August", Amount: 760, AccountType: "Deposits" },
    { Year: 2023, Month: "September", Amount: 32550, AccountType: "Deposits" },
    { Year: 2023, Month: "October", Amount: 4370, AccountType: "Deposits" },
    { Year: 2023, Month: "November", Amount: 23130, AccountType: "Deposits" },
    { Year: 2023, Month: "December", Amount: 2120, AccountType: "Deposits" },
  ];

  const [year, setyear] = useState(2023);
  const [amountData, setAmountData] = useState(
    oldAmountData.filter((data) => data.Year === year)
  );
  const handleChange = (event,newValue) => {
    setyear(Number(newValue));
    setAmountData(
      oldAmountData.filter((data) => data.Year === Number(newValue))
    );
  };

  const chartState = {
    series: [
      {
        name: "Loans",
        data: amountData
          .filter((item) => item.AccountType === "loans")
          .map((data) => data.Amount),
      },
      {
        name: "Savings",
        data: amountData
          .filter((item) => item.AccountType === "Savings")
          .map((data) => data.Amount),
      },
      {
        name: "Currents",
        data: amountData
          .filter((item) => item.AccountType === "Currents")
          .map((data) => data.Amount),
      },
      {
        name: "Deposits",
        data: amountData
          .filter((item) => item.AccountType === "Deposits")
          .map((data) => data.Amount),
      },
    ],
    options: {
    //   colors: ["#00E396", "#00C5A4", "#00A5A4", "#00A5A4", "#00A5A4"],
      chart: {
        height: 390,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: amountData
          .filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.Month === item.Month)
          )
          .map((item) => item.Month),
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <Grid xs={gridXsCol} md={gridMdCol}>
      <Box borderRadius={8} width boxShadow={3} padding={2} height>
        <Typography variant="body1" component="h3" gutterBottom>
          {title}
        </Typography>
        <Divider color="white" />
        <Tabs
          value={year}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="2022" value={2022} />
          <Tab label="2023" value={2023} />
        </Tabs>
        <div id="chart">
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="area"
            height={400}
          />
        </div>
      </Box>
    </Grid>
  );
};

TotalAmounts.propTypes = {
  gridXsCol: PropTypes.number,
  gridMdCol: PropTypes.number,
  title: PropTypes.string,
};

export default TotalAmounts;
