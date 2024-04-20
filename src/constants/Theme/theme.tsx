import { createTheme } from "@mui/material";
import TapestryRegular from '../../assets/fonts/Tapestry-Regular.ttf'
import AveriaBoldItalic from "../../assets/fonts/AveriaSerifLibre-BoldItalic.ttf";
const theme = createTheme({
    palette: {
        primary:{
            main: "#6c757d",
            light: "#f8f9fa",
            dark:"#495057"
        },
        secondary:{
            main: "#83c5be",
            light:"#caf0f8",
            dark:"#00b4d8"
        },
        error:{
            main:"#e29578"
        },
        mode:"light",
        background: {
            default:"#f6fff8"
        }
    },
    typography: {
        h3:{
            fontSize:"2.5rem"
        },
        h2: {
            fontSize:"3.2rem"
        },
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Tapestry"',
            '"Averia Serif Libre"'
          ].join(',')
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Tapestry';
              font-style: normal;
              font-display: swap;
              font-weight: 700;
              src: local('Tapestry'), local('Tapestry-Regular'), url(${TapestryRegular}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
                font-family: Averia Serif Libre,serif;
                font-style: italic;
                font-weight: 700;
                src: local('Averia'), local('Averia-Bold'), url(${AveriaBoldItalic}) format('ttf');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
          `,

        },
      },
    

});

export {theme}