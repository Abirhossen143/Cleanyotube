import { Container, Typography } from "@mui/material";

const Notfound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography variant="h2" align="center">
        404 Not Found
      </Typography>
    </Container>
  );
};
export default Notfound;
