import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Switch, Text, View, SafeAreaView } from 'react-native';
import CustomCarousel from './assets/components/carousel';
import { ItemProps } from './assets/components/carousel';

export default function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const toggleSwitch = () => setIsMonthly(prevState => !prevState);
  const green: string = '#1FCB64';
  const font: string = 'Sohne';



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>Financial coaching and education in your pocket</Text>
      <Text style={styles.p}>Upgrade to get the most out of Parthean</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isMonthly ? '#f5dd4b' : green}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isMonthly}
      />
     {  <CustomCarousel/>}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    textAlign: 'center'
  },
  p: {
    textAlign: 'center'
  },
});
