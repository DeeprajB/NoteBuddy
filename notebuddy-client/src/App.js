import { ChakraProvider } from '@chakra-ui/react'

import Home from './pages/Home'

import theme from './theme'
import '@fontsource/quicksand/variable.css';
import '@fontsource/montserrat/variable.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Home />
    </ChakraProvider>
  );
}

export default App;
