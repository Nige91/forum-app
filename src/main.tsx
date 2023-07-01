import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {deepOrange, deepPurple} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: deepPurple,
    secondary: deepOrange,
    background: {
      default: "#333333"
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set Roboto as the default font
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
