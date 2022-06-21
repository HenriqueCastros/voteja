import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import DataVizualizer from "./DataVizualizer";
import Background from "./Background";
import FormVoto from "./FormVoto";
import { setIsLogado, getIsLogado, createDB } from "./data/datamanager";

function App() {
  const [logged, setLogged] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [vote, setVote] = React.useState("branco");
  createDB();

  React.useEffect(() => {
    let isLogado = getIsLogado();
    setLogged(isLogado);
  }, []);

  React.useEffect(() => {
    if (logged !== null && logged !== undefined) {
      setIsLogado(logged ? 1 : 0);
    }
  }, [logged]);

  return (
    <div className="App">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Background
          photo_url={
            "http://itapecerica.mg.gov.br/imagens/1639/imagens_25320221319470.jpg"
          }
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {logged ? (
              <DataVizualizer />
            ) : (
              <FormVoto
                handleVote={setLogged}
                toggleModal={(e) => {
                  setOpen(true);
                  setVote(e);
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      <Modal
        hideBackdrop
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "1px solid #777",
            borderRadius: 2,
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,

            width: 400,
          }}
        >
          <h3>Compartilhe sua intenção de voto</h3>
          <TextField
            multiline
            disabled
            rows={4}
            sx={{ width: "100%" }}
            defaultValue={`Na eleição desse ano eu pretendo votar ${vote.toUpperCase()}! E você? Veja as estatistícas em ${
              window.location.href
            }`}
          />
          <div style={{ display: "flex", verticalAlign: "middle" }}>
            <Typography variant="p" component="p" sx={{ lineHeight: 4 }}>
              Compartilhe!
            </Typography>
            <IconButton component="a" href="https://www.instagram.com/">
              <InstagramIcon />
            </IconButton>
            <IconButton component="a" href="https://www.facebook.com/">
              <FacebookIcon />
            </IconButton>
            <IconButton component="a" href="https://twitter.com/">
              <TwitterIcon />
            </IconButton>
          </div>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
