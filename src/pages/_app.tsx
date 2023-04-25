import { ChakraProvider } from '@chakra-ui/react';
import { withDVCProvider } from '@devcycle/devcycle-react-sdk';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default withDVCProvider({
  sdkKey: 'client-8e6ab66d-a40b-438e-bb17-d7fd5d7eb391'
})(App);
