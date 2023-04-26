import React, { useEffect } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { useDVCClient, withDVCProvider } from '@devcycle/devcycle-react-sdk';

const App = ({ Component, pageProps }: any) => {
  const dvcClient = useDVCClient();

  useEffect(() => {
    window.addEventListener(
      'message',
      function (e) {
        // if (e.origin !== 'http://localhost:3001') {
        //  // console.log("wrong");
        //  return;
        //}
        try {
          if (
            e.data &&
            e.data.type === '__DEVCYCLE_DEVTOOL_GLOBAL_HOOK_EVENT'
          ) {
            if (e.data.subType === 'GET_VARIABLES') {
              console.log('react-app: GET_VARIABLES');
              window.postMessage(
                {
                  type: '__DEVCYCLE_DEVTOOL_GLOBAL_HOOK_EVENT',
                  subType: 'VARIABLES',
                  data: JSON.stringify(dvcClient.allVariables())
                },
                '*'
              );
            }
          }
        } catch (err) {
          console.log(e);
          console.error(err);
        }
      },
      false
    );
  }, [dvcClient]);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default withDVCProvider({
  sdkKey: 'client-8e6ab66d-a40b-438e-bb17-d7fd5d7eb391'
})(App);
