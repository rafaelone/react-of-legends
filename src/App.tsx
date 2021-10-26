import {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {Home} from './pages/Home';
import {SignIn} from './pages/SignIn';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <SignIn /> */}
      <Home />
    </ThemeProvider>
  );
}

export default App;
