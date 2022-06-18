import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import DataVizualizer from "./DataVizualizer";
import Background from "./Background";
import FormVoto from "./FormVoto";
import { setIsLogado, getIsLogado, createDB } from "./data/datamanager";

function App() {
  const [logged, setLogged] = React.useState();
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
            {logged ? <DataVizualizer/> : <FormVoto handleVote={setLogged} />}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
