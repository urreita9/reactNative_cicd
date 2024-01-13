import React, {useEffect} from 'react';
import {SafeAreaView, Text, Pressable, Alert, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import Config from 'react-native-config';

const checkPreviousSession = async () => {
  const didCrash = await Crashes.hasCrashedInLastSession();
  if (didCrash) {
    Alert.alert('Sorry for the crash');
  }
};

const App = () => {
  useEffect(() => {
    checkPreviousSession();
  }, []);
  return (
    // <SafeAreaView>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Pressable
        onPress={() => {
          Analytics.trackEvent('Calculate_inflation');
        }}>
        <View>
          <Text style={{color: 'red'}}>Caclulate inflation</Text>
        </View>
        <View>
          <Text style={{color: 'red'}}>{Config.SOME_API_KEY}</Text>
        </View>
      </Pressable>
      <View>
        <Text style={{color: 'red'}}>Feature-1e JAVA_HOME 17</Text>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default App;
