export const USERS = [
  {id: '1', name: 'Aarav Sharma', avatar: 'https://i.pravatar.cc/150?img=1', lastSeen: 'online'},
  {id: '2', name: 'Priya Patel', avatar: 'https://i.pravatar.cc/150?img=5', lastSeen: 'last seen today at 9:12 AM'},
  {id: '3', name: 'Vikram Singh', avatar: 'https://i.pravatar.cc/150?img=8', lastSeen: 'online'},
  {id: '4', name: 'Design Team', avatar: 'https://i.pravatar.cc/150?img=12', lastSeen: '', isGroup: true},
  {id: '5', name: 'Mom ❤️', avatar: 'https://i.pravatar.cc/150?img=16', lastSeen: 'last seen today at 7:30 AM'},
  {id: '6', name: 'Rohan Mehta', avatar: 'https://i.pravatar.cc/150?img=15', lastSeen: 'online'},
];

export const CHAT_LIST = [
  {
    id: '1',
    userId: '1',
    name: 'Aarav Sharma',
    avatar: USERS[0].avatar,
    lastMessage: 'Bhai, the build is ready 🔥',
    time: '10:42 AM',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    userId: '2',
    name: 'Priya Patel',
    avatar: USERS[1].avatar,
    lastMessage: 'Can you check the Figma?',
    time: '09:15 AM',
    unread: 0,
    online: false,
  },
  {
    id: '3',
    userId: '3',
    name: 'Vikram Singh',
    avatar: USERS[2].avatar,
    lastMessage: 'Meeting at 4 PM confirmed.',
    time: 'Yesterday',
    unread: 1,
    online: true,
  },
  {
    id: '4',
    userId: '4',
    name: 'Design Team',
    avatar: USERS[3].avatar,
    lastMessage: 'Aarav: I pushed the new icons',
    time: 'Yesterday',
    unread: 5,
    online: false,
  },
  {
    id: '5',
    userId: '5',
    name: 'Mom ❤️',
    avatar: USERS[4].avatar,
    lastMessage: 'Beta, dinner ready hai',
    time: 'Yesterday',
    unread: 0,
    online: false,
  },
];

export const INITIAL_MESSAGES = {
  '1': [
    {
      _id: 3,
      text: 'Bhai, the build is ready 🔥',
      createdAt: new Date(Date.now() - 1000 * 60 * 2),
      user: {_id: 2, name: 'Aarav Sharma', avatar: USERS[0].avatar},
    },
    {
      _id: 2,
      text: 'Nice! Sending to QA now',
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      user: {_id: 1},
    },
    {
      _id: 1,
      text: 'Hey! Check the new ChatApp?',
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      user: {_id: 2, name: 'Aarav Sharma', avatar: USERS[0].avatar},
    },
  ],
  '2': [
    {
      _id: 1,
      text: 'Can you check the Figma? I updated the chat bubbles',
      createdAt: new Date(),
      user: {_id: 2, name: 'Priya Patel', avatar: USERS[1].avatar},
    },
  ],
};
