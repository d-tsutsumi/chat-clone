import { gql } from '@/types/__generated__/client';
import { useQuery } from '@apollo/client';

const query = gql("query getRoomDetailInfo($roomId: uuid!) {\n  rooms_by_pk(id: $roomId) {\n    create_at\n    id\n    name\n  }\n  user_join_tables_rooms(where: {roomsId: {_eq: $roomId}}) {\n    user {\n      user_name\n      id\n    }\n  }\n  user_join_tables_rooms_aggregate(where: {roomsId: {_eq: $roomId}}) {\n    aggregate {\n      count\n    }\n  }\n}")
export function useRoomDetailInfo(roomId: string) {
  const { data, error, loading } = useQuery(query, {
    variables: { roomId },
  });

  const roomUserCount = data?.user_join_tables_rooms_aggregate.aggregate?.count || 0;
  const roomInfo = data?.rooms_by_pk;
  const partOfUserByRoom = data?.user_join_tables_rooms;

  return {
    roomUserCount,
    roomInfo,
    partOfUserByRoom,
    error,
    loading
  };
}
