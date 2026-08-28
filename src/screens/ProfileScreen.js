import React from 'react';
import {View, Text, Image, StyleSheet, useColorScheme, ScrollView} from 'react-native';

export default function ProfileScreen({route}) {
  const {name, avatar, userId} = route.params || {};
  const isDark = useColorScheme() === 'dark';
  return (
    <ScrollView style={[styles.container, {backgroundColor: isDark ? '#111B21' : '#fff'}]} contentContainerStyle={{alignItems: 'center', padding: 24}}>
      <Image source={{uri: avatar || `https://i.pravatar.cc/150?img=${userId || 1}`}} style={styles.avatar} />
      <Text style={[styles.name, {color: isDark ? '#fff' : '#000'}]}>{name || 'User Profile'}</Text>
      <Text style={styles.sub}>+91 9XXXX XXXXX • Mobile</Text>

      <View style={[styles.card, {backgroundColor: isDark ? '#202C33' : '#F0F2F5'}]}>
        <Text style={[styles.cardTitle, {color: isDark ? '#fff' : '#000'}]}>About</Text>
        <Text style={styles.cardText}>Building ChatApp with React Native CLI 🚀</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  avatar: {width: 120, height: 120, borderRadius: 60, marginTop: 20},
  name: {fontSize: 22, fontWeight: '700', marginTop: 16},
  sub: {fontSize: 14, color: '#667781', marginTop: 4},
  card: {width: '100%', borderRadius: 12, padding: 16, marginTop: 24},
  cardTitle: {fontWeight: '700', fontSize: 16, marginBottom: 6},
  cardText: {color: '#667781', fontSize: 14},
});
