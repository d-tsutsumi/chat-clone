import { gql } from '@/types/__generated__/client';
import { useMutation } from '@apollo/client';
import { query as addRoomQuery } from '@/entities/room/api/room';
import { apolloClient } from '@/provider';

const query = gql(
  'mutation addRoomMutation($Input: CreateRoomDto!) {\n  addRoom(CreateRoomDto: $Input) {\n    create_at\n    id\n    name\n  }\n}',
);

const cacheUpdate = (
  variables: { userId: string },
  updateRoom: { id: string; name: string; __typename: 'rooms' },
) =>
  apolloClient.cache.updateQuery(
    {
      query: addRoomQuery,
      variables,
    },
    (data) => {
      const previousCache = data ? data.user_join_tables_rooms : [];
      return {
        __typename: 'query_root' as 'query_root',
        user_join_tables_rooms: [
          ...previousCache,
          {
            __typename: 'user_join_tables_rooms' as 'user_join_tables_rooms',
            room: updateRoom,
          },
        ],
      };
    },
  );

export default function useAddRoom() {
  const [addRoomMutation, { data, loading, error }] = useMutation(query);

  return {
    addRoomMutation,
    cacheUpdate,
    data,
    loading,
    error,
  };
}
