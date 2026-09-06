import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, useColorScheme, StyleSheet, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GiftedChat} from 'react-native-gifted-chat/lib/GiftedChat/index.js';
import {InputToolbar} from 'react-native-gifted-chat/lib/InputToolbar.js';
import {Send} from 'react-native-gifted-chat/lib/Send.js';
import CustomBubble from '../components/CustomBubble';
import {INITIAL_MESSAGES, USERS} from '../data/mockChats';
import {Colors} from '../theme/colors';

export default function ChatScreen({route, navigation}) {
  const {userId, name, avatar} = route.params;
  const isDark = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', {userId, name, avatar})} style={{marginRight: 4}}>
          <Text style={{color: '#fff', fontSize: 20}}>ℹ️</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, userId, name, avatar]);

  useEffect(() => {
    const initial = INITIAL_MESSAGES[userId] || [
      {
        _id: 1,
        text: `Hi ${name}! This is the start of your chat.`,
        createdAt: new Date(),
        user: {_id: 2, name, avatar},
      },
    ];
    setMessages(initial);
  }, [userId, name, avatar]);

  const onSend = useCallback((newMsgs = []) => {
    setMessages(prev => [...prev, ...newMsgs]);
    // Mock auto-reply after 1s
    setTimeout(() => {
      const replies = [
        'Got it! 👍',
        'Sounds good!',
        'Let me check and get back.',
        '🔥🔥🔥',
        'On my way!',
        'Can we hop on a quick call?',
      ];
      const reply = {
        _id: Math.random().toString(),
        text: replies[Math.floor(Math.random() * replies.length)],
        createdAt: new Date(),
        user: {_id: 2, name, avatar},
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  }, [name, avatar]);

  return (
    <View style={[styles.container, {backgroundColor: isDark ? Colors.backgroundDark : Colors.background}]}>
      <GiftedChat
        messages={messages}
        onSend={msgs => onSend(msgs)}
        user={{_id: 1}}
        renderBubble={props => <CustomBubble {...props} />}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: isDark ? '#202C33' : '#F0F2F5',
              borderTopWidth: 0,
              padding: 6,
            }}
          />
        )}
        renderSend={props => (
          <Send {...props} containerStyle={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 8}}>
            <View style={styles.sendBtn}>
              <Text style={{color: '#fff', fontSize: 18}}>➤</Text>
            </View>
          </Send>
        )}
        placeholder="Type a message"
        bottomOffset={Platform.OS === 'ios' ? insets.bottom : 0}
        alwaysShowSend
        showAvatarForEveryMessage={false}
        isTyping={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  sendBtn: {
    backgroundColor: Colors.primaryLight,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
