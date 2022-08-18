import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Slot from './component/Slot';

function App() {
  return (
    <ChakraProvider >
      <Box >
        <Slot/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
