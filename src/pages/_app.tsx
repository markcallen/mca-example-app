import '@/styles/globals.css';
import { withDVCProvider } from '@devcycle/devcycle-react-sdk';

const App = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default withDVCProvider({
  sdkKey: 'client-8e6ab66d-a40b-438e-bb17-d7fd5d7eb391'
})(App);
