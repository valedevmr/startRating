import { ChangeEvent, useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import { Star } from "@mui/icons-material";
import {
  Box,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { StartComponent } from "./components/StartComponent";

function App() {

  const [actuallyStart, setActuallyStar] = useState<number>(5);

  const handleChange = (event) => {
    console.log(event);
    setActuallyStar(event.target.value);
    
  };


  const selectedClick = (indice:number)=>{
    console.log(indice);
    
  }

  return (
    <Grid
      sx={{
        height: "100vh", // 100% del viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid size={{ sm: 4, md: 4, xs: 4 }}>
        <Card sx={{ px: 3, py: 4, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "1em", fontWeight: "bold" }}
          >
            Rate Our Service
          </Typography>
          <StartComponent props={{ total: actuallyStart}}  />
          <Box sx={{ marginTop: "1em" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              You rated it {actuallyStart} starts!
            </Typography>
          </Box>

          <Box sx={{ marginTop: "2em" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Number of stars</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={actuallyStart}
                label="number od stars"
                onChange={handleChange}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
