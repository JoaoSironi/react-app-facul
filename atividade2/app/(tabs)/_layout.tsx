import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDxH5PBYkaSovFc6LwYA1qRlfKZoXrsYFk",
  authDomain: "tasklist-un.firebaseapp.com",
  databaseURL: "https://tasklist-un-default-rtdb.firebaseio.com",
  projectId: "tasklist-un",
  storageBucket: "tasklist-un.appspot.com",
  messagingSenderId: "1093057204533",
  appId: "1:1093057204533:web:1909e903c3934e27647c7c",
  measurementId: "G-7SCM85PB2X"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const analytics = getAnalytics(db);

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="lista"
        options={{
          title: 'Lista de Tarefas',
          tabBarIcon: ({ color }) => <Entypo name="text" size={24} color="white" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="addTask"
        options={{
          title: 'Adicionar Tarefa',
          tabBarIcon: ({ color }) => <Entypo name="add-to-list" size={24} color="white" />,
        }}
      />
    </Tabs>
  );
}
