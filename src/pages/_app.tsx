import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { withDVCProvider } from '@devcycle/devcycle-react-sdk';

import { DVCDevToolProvider } from '../contexts/devcycledevtool';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider>
      <DVCDevToolProvider>
        <Component {...pageProps} />
      </DVCDevToolProvider>
    </ChakraProvider>
  );
};

export default withDVCProvider({
  sdkKey: 'client-8e6ab66d-a40b-438e-bb17-d7fd5d7eb391'
})(App);
