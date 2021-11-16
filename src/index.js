import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

// export default function App() {
//   return <Routes />;
// }
