import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import CanvasBoard from './components/CanvasBoard';
import store from './store';

const App = () => {
  return (
    <Provider store = { store }>
      <ChakraProvider>
        <Container maxW = 'container.lg' centerContent>
          <Heading as = 'h1' size = 'xl'>SNAKE GAME</Heading>
          <CanvasBoard height = { 600 } width = { 1000 } />
        </ Container>
      </ ChakraProvider>
    </ Provider>
  );
}

export default App;