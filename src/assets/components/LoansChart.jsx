import { Box, Divider, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";

const LoansChart = ({gridXsCol,gridMdCol,title}) => {
  const LoanStageData = [
    { Stage: "Request", LoanNo: 76 },
    { Stage: "Study", LoanNo: 67 },
    { Stage: "review", LoanNo: 61 },
    { Stage: "Active", LoanNo: 61 },
    { Stage: "Complete", LoanNo: 90 },
  ];
  const [chartState] = useState({
    series: LoanStageData.map((data) => data.LoanNo),
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#00563f", "#00563f", "#006400", "#2e8b57", "#2e8b57"],
      labels: LoanStageData.map((data) => data.Stage),
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 20,
        offsetY: -15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  return (
    <Grid xs={gridXsCol} md={gridMdCol}>
      <Box borderRadius={8} width boxShadow={3} padding={2} height>
        <Typography variant="body1" component="h3" gutterBottom>
         {title}
        </Typography>
        <Divider color="white" />
        <div id="chart">
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="radialBar"
            height={300}
          />
        </div>
      </Box>
    </Grid>
  );
};

LoansChart.propTypes = {
  gridXsCol: PropTypes.number,
  gridMdCol: PropTypes.number,
  title: PropTypes.string,
};

export default LoansChart;
