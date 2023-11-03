import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import { AccountCircle } from "@mui/icons-material";
// import { Menu, MenuItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LoansChart from "./LoansChart";
import Installment from "./Installment";
import PaidAndOverdueInst from "./PaidAndOverdueInst";
import BankAccountsCards from "./BankAccountsCards";
import Cards from "./Cards";
import TotalAmounts from "./TotalAmounts";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const [count, setCount] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ borderRadius: "24px" , top:'10px' , right:'0px',marginLeft:''}} open={open} color="success">
        <Toolbar>
          <IconButton
            onClick={handleDrawerClose}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
              ...(!open && { display: "none" }),
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Slam Dashboard
          </Typography>
          <div>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu> */}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6"  component="h1" width>
            Technology Star
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {["Slam Dashboard"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  margin:'10px',
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color:'green',
                  background:'#d8e7da',
                  borderRadius:'16px',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:'green'
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 10 }}>
        <Grid container spacing={3}>
          <BankAccountsCards gridXsCol={12} gridMdCol={3} />
          <LoansChart
            gridXsCol={12}
            gridMdCol={6}
            title="Loan Accounts Stage"
          />
          <Installment gridXsCol={12} gridMdCol={3} title="Installment" />
          <Grid xs={12} md={3}>
            <PaidAndOverdueInst
              gridXsCol={12}
              gridMdCol={12}
              title="nstallment Paid"
            />
            <PaidAndOverdueInst
              gridXsCol={12}
              gridMdCol={12}
              title="Installment Overdue"
            />
          </Grid>
          <Grid xs={12} md={3} spacing={3} >
            <Cards
              gridXsCol={12}
              gridMdCol={12}
              title="Broken Deposit"
              data={120}
            />
            <Cards
              gridXsCol={12}
              gridMdCol={12}
              title="Frozen Savings"
              data={120}
            />
            <Cards
              gridXsCol={12}
              gridMdCol={12}
              title="Current Accounts"
              data={120}
            />
          </Grid>
          <TotalAmounts gridXsCol={12} gridMdCol={9} title="Total Amounts" />
        </Grid>
      </Box>
    </Box>
  );
}
