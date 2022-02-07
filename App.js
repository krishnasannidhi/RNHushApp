/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './navigation/RootNavigator';

const {width, height} = Dimensions.get('screen');
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <ScrollView pagingEnabled horizontal style={{width, height}}>
    //   {[
    //     require('./assets/images/buddhism-2214532__340.jpeg'),
    //     require('./assets/images/organsmic-meditation-brain-function-neuroscineces-public.jpeg'),
    //   ].map(image => (
    //     <ImageBackground source={image} style={styles.imageBackground}>
    //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //       <RootNavigator />
    //     </ImageBackground>
    //   ))}
    // </ScrollView>

    // <ImageBackground
    //   source={require('./assets/images/buddhism-2214532__340.jpeg')}
    //   style={styles.imageBackground}>
    //   <Text style={{fontSize: 100}}>Test</Text>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <RootNavigator />
    // </ImageBackground>
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
