import React, {memo, useCallback} from 'react';
import {View, Pressable, SafeAreaView, StatusBar, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Animated, {SharedTransition, withTiming} from 'react-native-reanimated';

const BorderRadiusExampleScreen1 = () => {
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
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar />
      <View>
        <View>
          <Pressable onPress={onBackPress}>
            <Text text={'Back'} />
          </Pressable>
          <Text text={'Border Example Screen 1'} />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('BorderRadiusExampleScreen2');
          }}>
          <Animated.View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              padding: 5,
            }}
            sharedTransitionTag="animTag"
            // sharedTransitionStyle={transition}
          >
            <Text style={{flex: 1, color: 'white', textAlign: 'center', textAlignVertical: 'center'}}>
              {'Border Radius 10'}
            </Text>
          </Animated.View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default memo(BorderRadiusExampleScreen1);
