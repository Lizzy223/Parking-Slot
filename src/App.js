import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Slot from './component/Slot';
import Form from './component/Form';

function App() {
  return (
    <ChakraProvider >
      <Box >
        <Form/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
