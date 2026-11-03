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
      style={[styles.item, {backgroundColor: isDark ? Colors.surfaceDark : '#fff'}]}
      onPress={() => navigation.navigate('Chat', {userId: item.userId, name: item.name, avatar: item.avatar})}>
      <View style={styles.avatarWrap}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        {item.online && <View style={styles.onlineDot} />}
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={[styles.name, {color: isDark ? '#FFFFFF' : '#182033'}]} numberOfLines={1}>
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
      <View style={[styles.searchBox, {backgroundColor: isDark ? '#171E33' : '#fff'}]}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          placeholder="Search or start new chat"
          placeholderTextColor={isDark ? '#8696A0' : '#667781'}
          style={[styles.searchInput, {color: isDark ? '#fff' : '#000'}]}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, {color: isDark ? '#F4F6FF' : Colors.text}]}>Recent conversations</Text>
        <Text style={styles.sectionCount}>{filtered.length} chats</Text>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No conversations found</Text>}
        contentContainerStyle={{paddingTop: 40, paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
      />

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
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 50,
    borderWidth: 1,
    borderColor: '#E7E9F1',
  },
  searchIcon: {fontSize: 28, lineHeight: 28, color: Colors.primary, marginRight: 8},
  searchInput: {flex: 1, fontSize: 16},
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginHorizontal: 12,
    marginVertical: 3,
    borderRadius: 18,
    alignItems: 'center',
  },
  avatarWrap: {position: 'relative'},
  avatar: {width: 56, height: 56, borderRadius: 28, backgroundColor: '#ddd'},
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
  name: {fontSize: 16, fontWeight: '800', flex: 1},
  time: {fontSize: 12, color: Colors.muted, marginLeft: 8, fontWeight: '600'},
  lastMsg: {fontSize: 14, flex: 1, marginTop: 4, color: Colors.muted},
  unreadBadge: {
    backgroundColor: Colors.primary,
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
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {color: '#fff', fontSize: 30, lineHeight: 32, fontWeight: '300'},
  sectionHeader: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 18, paddingVertical: 12},
  sectionTitle: {fontSize: 13, fontWeight: '800', letterSpacing: 0.4, textTransform: 'uppercase'},
  sectionCount: {fontSize: 12, color: Colors.muted, fontWeight: '600'},
  empty: {textAlign: 'center', color: Colors.muted, marginTop: 50, fontSize: 15},
});
