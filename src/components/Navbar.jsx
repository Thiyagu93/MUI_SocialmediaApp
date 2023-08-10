import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Diversity2, Mail, NotificationsActive } from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setUserMenu] = useState(false);
  return (
    <AppBar position="sticky" elevation={0}>
      <StyledToolBar>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          RJTV
        </Typography>
        <Diversity2 sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsActive />
          </Badge>
          <Badge>
            <Avatar
              onClick={() => setUserMenu(true)}
              sx={{ height: "30px", width: "30px" }}
              alt="Remy Sharp"
              src="https://photosfile.com/wp-content/uploads/2022/07/Single-Boy-DP-1.jpeg"
            />
          </Badge>
        </Icon>
        <UserBox>
          <Avatar
            onClick={() => setUserMenu(true)}
            sx={{ height: "30px", width: "30px" }}
            alt="Remy Sharp"
            src="https://photosfile.com/wp-content/uploads/2022/07/Single-Boy-DP-1.jpeg"
          />
          <Typography>Jhon Mir</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setUserMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      > 
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
