import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from './pages/Main';
import ExerciseScreen from './pages/Exercise';

import {Image} from 'react-native';

// import Baloon from './assets/svgs/Baloon/baloon.svg';

import TabBar from './components/TabBar';

const {Navigator, Screen} = createBottomTabNavigator();

// const Routes = createAppContainer(
//   createStackNavigator({
//     MainScreen,
//     ExerciseScreen,
//   }),
// );

const icons = {
  Main: require('./assets/folder.png'),
  // Messages: require('./assets/baloon.svg'),
  Exercise: require('./assets/diary.png'),
};

function Routes() {
  return (
    <Navigator
      // sceneContainerStyle={{backgroundColor: '#facada'}}

      tabBar={(props) => {
        console.log('tabBar props: ', props);

        return <TabBar {...props} />;
      }}

      // screenOptions={({route}) => ({})}

      // tabBarOptions={
      //   {
      //     // showLabel: false,
      //   }
      // }
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     return <Image source={icons[route.name]} />;
      //   },
      // })}
    >
      <Screen name="Main" component={MainScreen} />
      <Screen name="Messages" component={MainScreen} />
      <Screen name="Exercise" component={ExerciseScreen} />
    </Navigator>
  );
}

export default Routes;
