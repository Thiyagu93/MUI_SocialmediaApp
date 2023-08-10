import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import {Home, Article, Group, Storefront, PersonAdd, Settings, AccountBox, ModeNight} from '@mui/icons-material';
const Sidebar = ({mode, setMode}) => {
  return (
    <Box  flex={1} p={2} display={{xs: "none", sm:"block"}} >
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAdd />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={()=>setMode(mode === 'light' ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  </Box>
  )
}

export default Sidebar