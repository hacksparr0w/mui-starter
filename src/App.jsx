import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          MUI Starter
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          ⚛️📦 React + Webpack + Material UI starter 
        </Typography>
      </Container>
    </Box>
  </ThemeProvider>
);

export default App;
