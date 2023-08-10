import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} display={{ xs: "none", sm: "block" }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://post.healthline.com/wp-content/uploads/2020/01/friends-732x549-thumbnail.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27-MiHrm1YoDkmMod1itUByPR5xUTwxEuPw&usqp=CAU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZoYPOENdarbtCbSpyIEdaJVZseBHt5_9vg&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSGEKA6ZMEzT_SynMLzkPOzrMvpZmyrU-AQ&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2023/02/09/226456-teddy-day.jpg?itok=dWtnYawC"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9K8wZG6I-x-L5mI4IXuIDmAzIL2LsEmrDMQ&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://plus.unsplash.com/premium_photo-1661962405725-b52d290d658a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhyZWUlMjBmcmllbmRzfGVufDB8fDB8fHww&w=1000&q=80"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://post.healthline.com/wp-content/uploads/2020/01/friends-732x549-thumbnail.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} mt={2} mb={3}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJtz0A8ruDT1g7sTd-tjZ07fK9arjxeQ9QQ&usqp=CAU"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lw6BU4M7F0kVXjs7RGtAOtVxOsadNkg4jA&usqp=CAU"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbj8Bv0ztKWE6-jHcfSZNgKMZU8p4nYK7SPzITpTfvMl_2h5-3v3JW_RnVzaCmV-bTdE&usqp=CAU"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={200} mt={2}>
          Last Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
