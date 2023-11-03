import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PropTypes from "prop-types";

const Cards = ({ gridXsCol, gridMdCol,title,data }) => {
  return (
    <Grid xs={gridXsCol} md={gridMdCol}>
      <Box
        sx={{ marginTop: "12px" }}
        borderRadius={8}
        height={150}
        width
        boxShadow={3}
        padding={2}
      >
        <Typography variant="body1" component="h3" gutterBottom>
          {title}
        </Typography>
        <Divider color="white" />

        <Typography variant="h3" align="center" p={2} component="h1" width>
          {data}
        </Typography>
      </Box>
    </Grid>
  );
};

Cards.propTypes = {
  gridXsCol: PropTypes.number,
  gridMdCol: PropTypes.number,
  title: PropTypes.string,
  data: PropTypes.number,
};

export default Cards;
