import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          title: 'ルーム作成',
        }}
      />
      <Stack.Screen
        name="searchModal"
        options={{
          presentation: 'modal',
          title: '検索',
        }}
      />
    </Stack>
  );
}
