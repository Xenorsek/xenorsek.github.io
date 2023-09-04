import './assets/styles/main.scss'
import Main from './components/Main/Main';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#e2f5f8',
            main: '#258ab3',
            dark: '#185a7e',
            contrastText: '#fff'
          },
          secondary:{
            light:"#e1f3eb",
            main:"#4bbc90",
            dark:"#005029",
            contrastText:'#fff',
          }
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
         <Main />
      </ThemeProvider>
      
    </>
  );
}

export default App;
