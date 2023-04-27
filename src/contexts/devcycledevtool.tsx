import React, { useState, useEffect, createContext } from 'react';
import { DVCClient } from '@devcycle/devcycle-js-sdk';
import { useDVCClient } from '@devcycle/devcycle-react-sdk';

interface DVCContext {
  client: DVCClient;
}

export const DVCDevToolContext = createContext<DVCContext | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

const DVCDevToolProvider: React.FC<Props> = ({ children }) => {
  const [dvcClient, setDvcClient] = useState<DVCContext | undefined>();
  const client = useDVCClient();

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
                  data: JSON.stringify(client.allVariables())
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
    setDvcClient({ client });
  }, [client]);

  return (
    <DVCDevToolContext.Provider value={dvcClient}>
      {children}
    </DVCDevToolContext.Provider>
  );
};

export { DVCDevToolProvider };
