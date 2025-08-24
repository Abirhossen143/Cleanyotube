import { Container, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Favourite from "../favouritelist/Favourite";
import { useNavigate } from "react-router-dom";

const FavandRec = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Fav-list/fav");
  };
  const handleButtonRecent = () => {
    navigate("/Recent-list/recent");
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button onClick={handleButtonClick}> Favorite List </Button>
      <Button onClick={handleButtonRecent}>Recent List</Button>
    </Container>
  );
};

export default FavandRec;
