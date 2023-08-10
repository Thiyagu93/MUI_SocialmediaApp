import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import {Add as AddIcon, DateRange, EmojiEmotions, Person, VideoCameraBack} from "@mui/icons-material"
import ImageIcon from '@mui/icons-material/Image';

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center', 
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={()=>setOpen(true)} title="Add Post" sx={{position:"fixed", bottom: "30px", left:{xs:"calc(50% - 25px)", sm:30} }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{height:300,width: 350, bgcolor:"background.default" ,color:"text.primary", borderRadius: 5, padding: 5, fontWeight: 500}}>
            <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>
            <UserBox >
            <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            <Typography>Sherin</Typography>
            </UserBox>
            <TextField
                id="standard-multiline-static"
                sx={{width:"100%"}}
                multiline
                rows={3}
                placeholder="What's in your Mind"
                variant="standard"
            />
            <Stack direction="row" gap={2} mt={2} mb={3}>
                <EmojiEmotions color="primary"/>
                <VideoCameraBack color="secondary" />
                <ImageIcon color="success"/>
                <Person color="error"/>
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{width:"100px"}}><DateRange/></Button>
            </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
