import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { NhostNextProvider, NhostClient } from '@nhost/nextjs';
import { UserProvider } from '../UserProvider';

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || '',
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <UserProvider>
        <Component {...pageProps} />
        <Toaster />
      </UserProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
