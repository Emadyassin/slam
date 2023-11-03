import { Box, Divider, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";

const Installment = ({gridXsCol,gridMdCol,title}) => {
  const currentMonthData = [
    { month: "January", paid: 2500, overdue: -500 },
    { month: "February", paid: 2800, overdue: -400 },
    { month: "March", paid: 2000, overdue: -2000 },
  ];

  const seriesData = currentMonthData.map((item) => ({
    x: item.month,
    y: [item.paid, item.overdue],
  }));

  const state = {
    series: [
      {
        data: seriesData,
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "rangeBar",
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          isDumbbell: false,
          columnWidth: 3,
          dumbbellColors: [["#008FFB", "#00E396"]],
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        customLegendItems: ["paid", "overdue"],
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          gradientToColors: ["#00E396"],
          inverseColors: true,
          stops: [0, 100],
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        tickPlacement: "on",
      },
    },
  };

  return (
    <Grid xs={gridXsCol} md={gridMdCol}>
      <Box borderRadius={8} width boxShadow={3} padding={2} paddingBottom={0} height>
        <Typography variant="body1" component="h3" gutterBottom>
          {title}
        </Typography>
        <Divider color="white" />
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="rangeBar"
            height={260}
          />
        </div>
      </Box>
    </Grid>
  );
};
Installment.propTypes = {
  gridXsCol: PropTypes.number,
  gridMdCol: PropTypes.number,
  title: PropTypes.string,
};

export default Installment;
