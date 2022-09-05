import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './pages/Home'

import theme from './theme'
import '@fontsource/quicksand/variable.css';
import '@fontsource/montserrat/variable.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Provider store={store}>
    <Home />
    </Provider>
    </ChakraProvider>
  );
}

export default App;
