import { FlatList } from 'react-native';
import { useRoomsByUserId } from '@/entities/room/api/room';

import RoomListItem from './roomListItem';
import { LoadingSpinner } from '@/shared/ui';

export default function RoomList() {
  const { rooms } = useRoomsByUserId('5a511667-6a5f-4d38-bf30-8ed1380575af');
  if (!rooms) return <LoadingSpinner />;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={rooms}
      renderItem={({ item: room }) => <RoomListItem room={room} />}
    />
  );
}
