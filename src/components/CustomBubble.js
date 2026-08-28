import React from 'react';
import {Bubble} from 'react-native-gifted-chat';
import {useColorScheme} from 'react-native';
import {Colors} from '../theme/colors';

export default function CustomBubble(props) {
  const isDark = useColorScheme() === 'dark';
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: isDark ? Colors.bubbleMeDark : Colors.bubbleMe,
          borderRadius: 16,
          padding: 4,
        },
        left: {
          backgroundColor: isDark ? Colors.bubbleOtherDark : Colors.bubbleOther,
          borderRadius: 16,
          padding: 4,
        },
      }}
      textStyle={{
        right: {color: isDark ? '#E9EDEF' : '#000'},
        left: {color: isDark ? '#E9EDEF' : '#000'},
      }}
      timeTextStyle={{
        right: {color: isDark ? '#8696A0' : '#667781'},
        left: {color: isDark ? '#8696A0' : '#667781'},
      }}
    />
  );
}
