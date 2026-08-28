import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, StyleSheet, useColorScheme} from 'react-native';
import {USERS} from '../data/mockChats';

export default function ContactsScreen({navigation}) {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={[styles.container, {backgroundColor: isDark ? '#111B21' : '#fff'}]}>
      <FlatList
        data={USERS}
        keyExtractor={i => i.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => navigation.replace('Chat', {userId: item.id, name: item.name, avatar: item.avatar})}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View style={{marginLeft: 12}}>
              <Text style={[styles.name, {color: isDark ? '#fff' : '#000'}]}>{item.name}</Text>
              <Text style={styles.status}>{item.lastSeen || 'Tap to chat'}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  row: {flexDirection: 'row', alignItems: 'center', padding: 14, borderBottomWidth: 0.5, borderBottomColor: '#eee'},
  avatar: {width: 48, height: 48, borderRadius: 24},
  name: {fontSize: 16, fontWeight: '600'},
  status: {fontSize: 13, color: '#667781', marginTop: 2},
});
