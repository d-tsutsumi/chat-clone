import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { GetRoomsByUserIdQuery } from '@/types/__generated__/client/graphql';
import { HeadingText, Divider } from '@/shared/ui';
import { Icon } from '@/shared/ui/icon';
type Props = {
  room: GetRoomsByUserIdQuery["user_join_tables_rooms"][0]['room'];
};

export default function RoomListItem({ room }: Props) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.4} style={styles.listContainer}>
        <HeadingText size="small">{room.name}</HeadingText>
        <View style={styles.iconLayout}>
          <Icon size={24} name="arrowright" />
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
