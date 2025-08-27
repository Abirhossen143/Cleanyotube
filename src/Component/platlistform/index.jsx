import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { toast } from "react-toastify";

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
  const [state, setState] = useState("");
  const extractPlaylistId = (url) => {
    if (
      !url.includes("youtube.com") &&
      !url.includes("youtu.be") &&
      !url.includes("/")
    ) {
      return url;
    }
    const regex = /[&?]list=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    if (url.includes("youtu.be")) {
      const urkObj = new URL(url);
      const listParam = urkObj.searchParams.get("list");
      if (listParam) return listParam;
    }
    return null;
  };
  const extractedPlaylistId = extractPlaylistId(state);

  const handleSubmit = () => {
    // TODO: handle url later
    if (!state) {
      toast("Please Input PlaylistId Or Link");
    } else if (extractedPlaylistId) {
      getPlaylistId(extractedPlaylistId);
      setState("");
      handleClose();
    } else {
      getPlaylistId(state);
      setState("");
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist please insert the playlist id or playlist link.
          Please make sure the link is correct. Otherwise we won't able to fetch
          the playlist information.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Playlist ID or Link"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Playlist</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistForm;
