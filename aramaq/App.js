import React from 'react';
import { 
  StatusBar, 
  SafeAreaView,
  View 
} from 'react-native';
import { 
  useFonts,
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import Servicos from './src/screens/Servicos/';
import mock from './src/mocks/servicos.js';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fontCarregada) {
    return <View />
  }
  return (
    <SafeAreaView style={{ flex: 1}} >
      <StatusBar barStyle="dark-content"/>
      <Servicos {...mock} />
    </SafeAreaView>
  );
}

