import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import IconButton from "@mui/material/IconButton";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import VideocamIcon from "@mui/icons-material/Videocam";
import { cadastrarEleitor } from "./data/datamanager";

const FormVoto = ({ handleVote, toggleModal }) => {
  const [gender, setGender] = React.useState("M");
  const [vote, setVote] = React.useState("branco");
  const [age, setAge] = React.useState("jovem");
  const [location, setLocation] = React.useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("gender", gender);
    data.set("vote", vote);
    data.set("age", age);
    data.set("longitude", location.longitude);
    data.set("latitude", location.latitude);
    cadastrarEleitor(data);
    handleVote(1);
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Typography variant="h3" component="div">
        Registre seu voto
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          label="Nome completo"
          name="nome"
          autoComplete="nome"
          autoFocus
        />
        <FormControl fullWidth>
          <InputLabel id="gender-label">Genero</InputLabel>
          <Select
            labelId="gender-label"
            value={gender}
            label="Genero"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"M"}>Homem</MenuItem>
            <MenuItem value={"F"}>Mulher</MenuItem>
            <MenuItem value={"O"}>Outro</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 2, mr: 2 }}>
          <FormLabel id="vote-label">Escolha seu voto</FormLabel>
          <RadioGroup
            aria-labelledby="vote-label"
            name="controlled-radio-buttons-group"
            value={vote}
            onChange={(e) => setVote(e.target.value)}
          >
            <FormControlLabel
              value="bolsonaro"
              control={<Radio />}
              label="Bolsonaro"
            />
            <FormControlLabel value="lula" control={<Radio />} label="Lula" />
            <FormControlLabel value="outro" control={<Radio />} label="Outro" />
            <FormControlLabel value="nulo" control={<Radio />} label="Nulo" />
            <FormControlLabel
              value="branco"
              control={<Radio />}
              label="Branco"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ mt: 2 }}>
          <FormLabel id="age-label">Faixa etaria</FormLabel>
          <RadioGroup
            aria-labelledby="age-label"
            name="controlled-radio-buttons-group"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <FormControlLabel
              value="jovem"
              control={<Radio />}
              label="18 - 25"
            />
            <FormControlLabel
              value="jovemAdulto"
              control={<Radio />}
              label="26 - 40"
            />
            <FormControlLabel
              value="adulto"
              control={<Radio />}
              label="41 - 65"
            />
            <FormControlLabel value="idoso" control={<Radio />} label="65+" />
          </RadioGroup>
        </FormControl>
        <div style={{ display: "flex", verticalAlign: "middle" }}>
          <Typography variant="p" component="p" sx={{ lineHeight: 4 }}>
            Escolha sua midia:
          </Typography>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              alert("Error 404 - It seems this funcionality is still offline");
            }}
          >
            <GraphicEqIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              alert("Error 404 - It seems this funcionality is still offline");
            }}
          >
            <VideocamIcon />
          </IconButton>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => toggleModal(vote)}
          sx={{ mt: 3, mb: 2 }}
        >
          Votar
        </Button>
      </Box>
    </>
  );
};

export default FormVoto;
