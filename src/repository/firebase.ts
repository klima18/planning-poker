import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { UserData } from '../types/user';

const firebaseConfig = {
  apiKey: "AIzaSyC_ScqUKNG_Oxg-8Ev7paFconbJDJ5EVOE",
  authDomain: "planning-poker-v001.firebaseapp.com",
  projectId: "planning-poker-v001",
  storageBucket: "planning-poker-v001.appspot.com",
  messagingSenderId: "1068527061199",
  appId: "1:1068527061199:web:10ecf99f579b3a05864fba",
  measurementId: "G-1EZP1YDE7T"
};

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics(app);
const db = firebase.firestore(app);

export const createRoom = async (roomData: { id: string, roomname: string }) => {
  await db.collection('rooms').doc(roomData.id).set(roomData);
}

export const addPlayerToRoom = async (roomId: string, userData: UserData) => {
  await db.collection('rooms').doc(roomId).collection('users').doc(userData.id).set(userData);
}

export const getRoom = async (roomId: string) => {
  return db.collection('rooms').doc(roomId);
}

export const getPlayers = async (roomId: string) => {
  return db.collection('rooms').doc(roomId).collection('users');
}
