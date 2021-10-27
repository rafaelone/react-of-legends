import {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

import {Routes} from './routes';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
