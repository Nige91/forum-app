import { auth } from "../firebase/firebase.ts";
import {SetStateAction, useContext, useState} from "react";
import DialogContext from "../context/DialogContext.tsx";
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@mui/material';
import {Settings} from '@mui/icons-material'
import {UserContext} from "../context/UserContext.tsx";

function AppToolbar() {
  const { openDialog } = useContext(DialogContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const userContext = useContext(UserContext)
  if(!userContext) throw new Error('Used UserContext outside of provider');
  const { user, updateUser } = userContext;

  const handleSignOut = () => {
    auth.signOut().then(()=>{
      updateUser(null)
    }).catch((error) => {
      if (error.message) {
        openDialog(error.message)
      } else {
        openDialog('unknown error')
      }
    })
  }

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      label: "Sign Out",
      action: handleSignOut,
    },
    {
      label: "Settings",
      action: () => openDialog('Your message here'),
    },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Welcome, {user && user.name}
        </Typography>
        <IconButton color="inherit" onClick={handleClick}>
          <Settings />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem onClick={() => {option.action(); handleClose();}} key={index}>
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
