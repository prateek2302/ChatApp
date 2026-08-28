# ChatApp - React Native CLI (JavaScript)

A modern WhatsApp-style chat app built with React Native CLI.

## Features
- Chat List screen with search, avatars, unread badges
- Chat screen using react-native-gifted-chat
- New Chat / Contacts mock
- Profile screen
- Dark/Light theme support
- Local mock data - no backend needed

## Get Started

1. Install deps:
   npm install
   # iOS only: cd ios && pod install && cd ..

2. Run Metro:
   npm start

3. Run App:
   npm run android
   npm run ios

## Structure
- App.js - Navigation root
- src/screens/ - ChatList, Chat, Contacts, Profile
- src/components/ - Custom bubbles, header
- src/data/ - mockChats.js
- src/theme/ - colors
