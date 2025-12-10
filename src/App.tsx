import React, { useEffect, useState } from 'react';
import AppRouter from './AppRouter'; 
import SplashScreen from './components/SplashScreen'; 

import './App.css';

const App= () => {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen setIsLoading={setIsLoading} />;
  }
  return (
    <AppRouter />
  );
};

export default App;