import { gql } from '@/types/__generated__/client';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
const query = gql(
  'query getRoomsByUserId($userId: uuid!) {\n  tsutsumi_chat_user_join_tables_rooms(where: {userId: {_eq: $userId}}) {\n    room {\n      name\n      id\n    }\n  }\n}',
);

export function useRoomsByUserId(userId: string) {
  const { data, error } = useQuery(query, {
    variables: { userId },
    pollInterval: 10000,
  });

  const rooms = useMemo(
    () => data?.tsutsumi_chat_user_join_tables_rooms.map((room) => ({ ...room.room })),
    [data],
  );
  return { rooms, error };
}
