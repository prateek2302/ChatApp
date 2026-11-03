import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, StyleSheet, useColorScheme, TextInput} from 'react-native';
import {USERS} from '../data/mockChats';
import {Colors} from '../theme/colors';

export default function ContactsScreen({navigation}) {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={[styles.container, {backgroundColor: isDark ? Colors.backgroundDark : Colors.background}]}>
      <Text style={[styles.heading, {color: isDark ? Colors.textDark : Colors.text}]}>Find your people</Text>
      <TextInput
        placeholder="Search contacts"
        placeholderTextColor={Colors.muted}
        style={[styles.search, {backgroundColor: isDark ? Colors.surfaceDark : '#fff', color: isDark ? Colors.textDark : Colors.text}]}
      />
      <FlatList
        data={USERS}
        keyExtractor={i => i.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.row, {backgroundColor: isDark ? Colors.surfaceDark : '#fff'}]}
            onPress={() => navigation.replace('Chat', {userId: item.id, name: item.name, avatar: item.avatar})}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View style={{marginLeft: 12}}>
              <Text style={[styles.name, {color: isDark ? Colors.textDark : Colors.text}]}>{item.name}</Text>
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
  heading: {fontSize: 26, fontWeight: '800', marginHorizontal: 18, marginTop: 20},
  search: {height: 48, borderRadius: 15, margin: 16, paddingHorizontal: 16, fontSize: 15},
  row: {flexDirection: 'row', alignItems: 'center', padding: 14, marginHorizontal: 12, marginVertical: 3, borderRadius: 17},
  avatar: {width: 48, height: 48, borderRadius: 24},
  name: {fontSize: 16, fontWeight: '600'},
  status: {fontSize: 13, color: '#667781', marginTop: 2},
});
