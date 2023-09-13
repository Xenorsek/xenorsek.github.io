import './assets/styles/main.scss'
import Main from './components/Main/Main';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  palette: {
    mode: mode === true ? "dark": "light",
    ...(mode === true
      ? {
        //darkmode
        primary: {
          light: '#e2f5f8',
          main: '#258ab3',
          dark: '#185a7e',
          primary: '#fff'
        },
        secondary:{
          light:"#e1f3eb",
          main:"#6c00b3",
          dark:"#005029",
          primary:'#fff',
        }
      }
      : {
        //lightmode
          primary: {
             main: "#6c00b3" 
            },
          secondary:{
            main: "#0e5dc6"
          },
          text: {
            primary: '#000',
          },
        }),
  },
});


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const selectedDarkMode = JSON.parse(localStorage.getItem("darkmode"));
  const [mode, setMode] = React.useState(selectedDarkMode != null ? selectedDarkMode : prefersDarkMode);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === false ? true : false));
      },
    }),
    [],
  );

  useEffect(()=>{
    var darkmode = localStorage.getItem("darkmode");
    if(!darkmode){
      localStorage.setItem("darkmode", mode);
    }
  })

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
