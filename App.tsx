import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, Text} from 'react-native';
import SplashScreen from './src/components/splashScreen';
import OnBoarDing1 from './src/components/boarding/boarding1';
import OnBoarDing2 from './src/components/boarding/boarding2';
import OnBoarDing3 from './src/components/boarding/boarding3';
import LoginScreens from './src/Screen/login';
import SignUpScreens from './src/Screen/signup';
import DetailScreens from './src/Screen/home/trending/detail';
import CommentScreens from './src/Screen/home/trending/detail/comment';
import TrendingScreens from './src/Screen/home/trending';
import NotifiScreens from './src/Screen/home/notification';
import UpNewsScreens from './src/Screen/home/profile/upnews';
import EditProfileScreens from './src/Screen/home/profile/editProfile';
import SettingScreens from './src/Screen/home/profile/setting';
import MainScreens from './src/Screen/home';
import ExploreScreens from './src/Screen/explore';
import BookmarkScreens from './src/Screen/bookmark';
import ProfileScreens from './src/Screen/home/profile';

const Stack = createNativeStackNavigator();
const Tab = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Splash" component={SplashScreen} />
    //     <Stack.Screen name="onBoarDing1" component={OnBoarDing1} />
    //     <Stack.Screen name="onBoarDing2" component={OnBoarDing2} />
    //     <Stack.Screen name="onBoarDing3" component={OnBoarDing3} />
    //     <Stack.Screen name="LoginScreens" component={LoginScreens} />
    //     <Stack.Screen name="SignUpScreens" component={SignUpScreens} />
    //     <Stack.Screen name="DetailScreens" component={DetailScreens} />
    //     <Stack.Screen name="CommentScreens" component={CommentScreens} />
    //     <Stack.Screen name="TrendingScreens" component={TrendingScreens} />
    //     <Stack.Screen name="NotifiScreens" component={NotifiScreens} />
    //     <Stack.Screen name="UpNewsScreens" component={UpNewsScreens} />
    //     <Stack.Screen
    //       name="EditProfileScreens"
    //       component={EditProfileScreens}
    //     />
    //     <Stack.Screen name="SettingScreens" component={SettingScreens} />

    //     {/* four tab */}
    //     <Stack.Screen name="MainScreens" component={MainScreens} />
    //     <Stack.Screen name="ExploreScreens" component={ExploreScreens} />
    //     <Stack.Screen name="BookmarkScreens" component={BookmarkScreens} />
    //     <Stack.Screen name="ProfileScreens" component={ProfileScreens} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreens" component={LoginScreens} />
        <Stack.Screen name="SignUpScreens" component={SignUpScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
