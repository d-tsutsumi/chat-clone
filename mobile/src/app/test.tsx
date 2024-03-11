import { useRoomsByUserId } from '@/entities/room/api/room';
import { Footer } from '@/template/footer';
import { FlatList, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Page() {
  const { rooms, error } = useRoomsByUserId('5a511667-6a5f-4d38-bf30-8ed1380575af');
  if (error) return <Text style={{ padding: 80 }}>{JSON.stringify(error)}</Text>;
  return (
    <View style={style.container}>
      <FlatList
        style={{ display: 'flex', flexDirection: 'row' }}
        data={rooms}
        renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>}
      />
      <Footer />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
