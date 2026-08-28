import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import {CHAT_LIST} from '../data/mockChats';
import {Colors} from '../theme/colors';

export default function ChatListScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [chats] = useState(CHAT_LIST);
  const isDark = useColorScheme() === 'dark';

  const filtered = chats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[styles.item, {borderBottomColor: isDark ? '#222' : '#eee'}]}
      onPress={() => navigation.navigate('Chat', {userId: item.userId, name: item.name, avatar: item.avatar})}>
      <View style={styles.avatarWrap}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        {item.online && <View style={styles.onlineDot} />}
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={[styles.name, {color: isDark ? '#fff' : '#000'}]} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.lastMsg, {color: isDark ? '#8696A0' : '#667781'}]} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: isDark ? '#111B21' : '#fff'}]}>
      <View style={[styles.searchBox, {backgroundColor: isDark ? '#202C33' : '#F0F2F5'}]}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search or start new chat"
          placeholderTextColor={isDark ? '#8696A0' : '#667781'}
          style={[styles.searchInput, {color: isDark ? '#fff' : '#000'}]}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList data={filtered} keyExtractor={i => i.id} renderItem={renderItem} contentContainerStyle={{paddingBottom: 80}} />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {fontSize: 16, marginRight: 8},
  searchInput: {flex: 1, fontSize: 16},
  item: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  avatarWrap: {position: 'relative'},
  avatar: {width: 52, height: 52, borderRadius: 26, backgroundColor: '#ddd'},
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.accent,
    borderWidth: 2,
    borderColor: '#fff',
  },
  content: {flex: 1, marginLeft: 12},
  row: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  name: {fontSize: 17, fontWeight: '600', flex: 1},
  time: {fontSize: 12, color: '#667781', marginLeft: 8},
  lastMsg: {fontSize: 14, flex: 1, marginTop: 2},
  unreadBadge: {
    backgroundColor: Colors.accent,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginLeft: 8,
  },
  unreadText: {color: '#fff', fontSize: 12, fontWeight: '700'},
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {color: '#fff', fontSize: 30, lineHeight: 32},
});
