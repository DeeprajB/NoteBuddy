import './App.css';

import { ChakraProvider } from '@chakra-ui/react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
    <ReactQuill theme="snow"/>
    </div>
    </ChakraProvider>
  );
}

export default App;
