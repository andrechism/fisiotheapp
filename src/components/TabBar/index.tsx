import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {TouchableOpacity, RectButton} from 'react-native-gesture-handler';

import BaloonIcon from '../../assets/svgs/baloon.svg';
import FolderIcon from '../../assets/svgs/folder.svg';
import DiaryIcon from '../../assets/svgs/diary.svg';

export default function TabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        console.log('name: ', route.name);

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={() => onPress()}
            onLongPress={onLongPress}
            style={{
              width: '33.33%',
              height: 90,
              // minHeight: 50,
              display: 'flex',
              justifyContent: 'center',
              // alignItems: 'center',
              paddingTop: 18,
              flexDirection: 'row',
              // borderWidth: 1,
              // borderColor: 'red',
            }}>
            {route.name === 'Main' && <FolderIcon />}
            {route.name === 'Messages' && <BaloonIcon />}
            {route.name === 'Exercise' && <DiaryIcon />}
            <Text
              style={{
                color: isFocused ? '#673ab7' : '#333',
                textAlign: 'center',
              }}>
              {/* {label} */}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
