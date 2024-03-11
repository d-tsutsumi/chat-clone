import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { GetRoomsByUserIdQuery } from '@/types/__generated__/client/graphql';
import { AntDesign } from '@expo/vector-icons';
import { HeadingText, Divider } from '@/shared/ui';

type Props = {
  room: GetRoomsByUserIdQuery['tsutsumi_chat_user_join_tables_rooms'][0]['room'];
};

export default function RoomListItem({ room }: Props) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.4} style={styles.listContainer}>
        <HeadingText size="small">{room.name}</HeadingText>
        <View style={styles.iconLayout}>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <Divider />
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconLayout: {
    justifyContent: 'center',
  },
});
