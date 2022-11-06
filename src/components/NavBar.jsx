// import { Book, Pets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  styled,
  Avatar,
  Button,
  Box,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EmailIcon from "@mui/icons-material/Email";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

// Custom styling to components
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const UserActions = styled("div")(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserProfile = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function NavBar() {
  const [profileMenuDisplayStatus, setProfileMenuDisplayStatus] =
    useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#EFEFEF" }}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
              color: "#717171",
            },
          }}
        >
          CrowdHelp
        </Typography>
        <StorefrontIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        {/* <SearchBar>
          <InputBase placeholder="Search.." />
        </SearchBar> */}
        {/* {isLoggedIn && ( */}

        <UserActions >
          <Box sx={{m: 0}}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Campaign
            </Button>
          </Box>
          {isLoggedIn ? (
            <>
              <Badge badgeContent={9} color="error">
                <EmailIcon />
              </Badge>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
              <Avatar
                onClick={() => setProfileMenuDisplayStatus(true)}
                sx={{ width: 30, height: 30 }}
                alt="User"
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              />
            </>
          ) : (
            <>
              <Button
                type="submit"
                // fullWidth
                variant="text"
                // sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </>
          )}
        </UserActions>
        {/*  */}
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={profileMenuDisplayStatus}
        onClose={(e) => setProfileMenuDisplayStatus(false)}
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
}

export default NavBar;
