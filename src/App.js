import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import AppbarComponent from './components/AppbarComponent';
import { ThemeProvider, createTheme} from '@mui/material';


function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#f8991f',
      },
      secondary: {
        main: '#232e3e',
      },
      success: {
        main: '#0c611a',
      },
      danger: {
        main: '#ff3a3a',
      },
      white: {
        main: '#ffffff'
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppbarComponent/>
      <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
