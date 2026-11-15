import {useEffect, useState} from 'react';
import {Application} from './app/Application';
import {LandingPage} from './landing/pages/LandingPage';

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash.slice(1));
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash.startsWith('/') ? <Application path={hash.replace(/\/$/, '') || '/app'} /> : <LandingPage />;
}
