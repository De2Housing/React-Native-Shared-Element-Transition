import React, {memo, useCallback} from 'react';
import {View, Pressable, SafeAreaView, StatusBar, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Animated, {SharedTransition, withTiming} from 'react-native-reanimated';

const Screen2 = () => {
  const navigation = useNavigation();

  const onBackPress = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  const transition = SharedTransition.custom(values => {
    'worklet';

    return {
      //   height: withTiming(values.targetHeight),
      width: withTiming(values.targetHeight),
    };
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View>
        <View>
          <Pressable onPress={onBackPress}>
            <Text text={'Back'} />
          </Pressable>
          <Text text={'Screen1'} />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Screen1');
          }}>
          <Animated.View
            style={{
              height: 100,
              width: 150,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            sharedTransitionTag="animTag"
            // sharedTransitionStyle={transition}
          >
            <Animated.Text
              sharedTransitionTag="insideTextTag"
              style={{height: 60, width: 60, color: 'white'}}>
              {'Screen2'}
            </Animated.Text>
          </Animated.View>
        </Pressable>
        <Animated.Text
          sharedTransitionTag="textTag"
          style={{height: 100, width: 100, backgroundColor: 'blue'}}>
          {'Screen2'}
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
};

export default memo(Screen2);
