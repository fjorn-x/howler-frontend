import React from "react";
import {navigation} from "./NavigationMenu";
import {useNavigate} from "react-router-dom";
import {Avatar, Button, IconButton, Menu, MenuItem} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const image = {
  width: "50px",
  height: "50px",
};
const Navigation = () => {
  const username = "Hamza Shaikh";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("logout");
    handleClose();
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between h-screen sticky top-0">
      <div>
        <div className="pt-2 pb-5">
          <img src="/images/icon.png" alt="" style={image} />
        </div>
        <div className="space-y-6">
          {navigation.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() => (item.title === "Profile" ? navigate(`/${5}`) : navigate(item.path))}
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#b91c1c",
            }}
            variant="contained"
          >
            HOWL
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 mb-5">
        <div className="flex items-center space-x-3">
          <Avatar alt={{username}} src="/images/profile.jpeg" />
          <div>
            <span>Hamza Shaikh</span>
            <span className="opacity-70">@hamzashaikh</span>
          </div>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon size="small" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
