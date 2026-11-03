import React from 'react';
import {View, Text, Image, StyleSheet, useColorScheme, ScrollView} from 'react-native';
import {Colors} from '../theme/colors';

export default function ProfileScreen({route}) {
  const {name, avatar, userId} = route.params || {};
  const isDark = useColorScheme() === 'dark';
  return (
    <ScrollView style={[styles.container, {backgroundColor: isDark ? Colors.backgroundDark : Colors.background}]} contentContainerStyle={{alignItems: 'center', padding: 24}}>
      <Image source={{uri: avatar || `https://i.pravatar.cc/150?img=${userId || 1}`}} style={styles.avatar} />
      <Text style={[styles.name, {color: isDark ? Colors.textDark : Colors.text}]}>{name || 'User Profile'}</Text>
      <Text style={styles.sub}>+91 9XXXX XXXXX • Mobile</Text>

      <View style={styles.actions}>
        <View style={styles.action}><Text style={styles.actionIcon}>☎</Text><Text style={styles.actionLabel}>Call</Text></View>
        <View style={styles.action}><Text style={styles.actionIcon}>⌁</Text><Text style={styles.actionLabel}>Message</Text></View>
        <View style={styles.action}><Text style={styles.actionIcon}>🔔</Text><Text style={styles.actionLabel}>Mute</Text></View>
      </View>

      <View style={[styles.card, {backgroundColor: isDark ? Colors.surfaceDark : '#fff'}]}>
        <Text style={[styles.cardTitle, {color: isDark ? Colors.textDark : Colors.text}]}>About</Text>
        <Text style={styles.cardText}>Building ChatApp with React Native CLI 🚀</Text>
        <Text style={styles.updated}>Active today</Text>
      </View>

      <View style={[styles.card, {backgroundColor: isDark ? Colors.surfaceDark : '#fff'}]}>
        <Text style={[styles.cardTitle, {color: isDark ? Colors.textDark : Colors.text}]}>Contact details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>☎</Text>
          <View><Text style={[styles.detailValue, {color: isDark ? Colors.textDark : Colors.text}]}>+91 9XXXX XXXXX</Text><Text style={styles.detailLabel}>Mobile</Text></View>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>✉</Text>
          <View><Text style={[styles.detailValue, {color: isDark ? Colors.textDark : Colors.text}]}>hello@chatapp.dev</Text><Text style={styles.detailLabel}>Email</Text></View>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>⌖</Text>
          <View><Text style={[styles.detailValue, {color: isDark ? Colors.textDark : Colors.text}]}>New Delhi, India</Text><Text style={styles.detailLabel}>Location</Text></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  avatar: {width: 132, height: 132, borderRadius: 66, marginTop: 20, borderWidth: 5, borderColor: Colors.accent},
  name: {fontSize: 24, fontWeight: '800', marginTop: 16},
  sub: {fontSize: 14, color: '#667781', marginTop: 4},
  actions: {flexDirection: 'row', justifyContent: 'center', gap: 28, marginTop: 22},
  action: {alignItems: 'center', minWidth: 60},
  actionIcon: {color: Colors.primary, fontSize: 22, fontWeight: '700'},
  actionLabel: {color: Colors.muted, fontSize: 12, fontWeight: '700', marginTop: 5},
  card: {width: '100%', borderRadius: 20, padding: 18, marginTop: 24, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 12, elevation: 2},
  cardTitle: {fontWeight: '700', fontSize: 16, marginBottom: 6},
  cardText: {color: '#667781', fontSize: 14},
  updated: {color: Colors.muted, fontSize: 12, marginTop: 10},
  detailRow: {flexDirection: 'row', alignItems: 'center', marginTop: 16},
  detailIcon: {width: 34, color: Colors.primary, fontSize: 20, textAlign: 'center', marginRight: 10},
  detailValue: {fontSize: 14, fontWeight: '700'},
  detailLabel: {color: Colors.muted, fontSize: 12, marginTop: 3},
});
