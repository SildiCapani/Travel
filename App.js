import "react-native-gesture-handler";
import React from 'react';

import HomeScreen from './src/screens/Home';

import {StatusBar} from 'react-native';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <>


      <StatusBar barStyle="dark-content" />
      <Router />

    
    </>
  );
}
