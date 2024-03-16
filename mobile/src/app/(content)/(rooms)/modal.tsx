import { View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, Text, Button, Modal as PepperModal, Portal } from 'react-native-paper';
import useAddRoom from '@/use-case/create-room/api/useAddRoom';
import { LoadingSpinner } from '@/shared/ui';
type FormState = {
  roomName: string;
};

export default function Modal() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({ defaultValues: { roomName: '' } });
  const { addRoomMutation, loading, cacheUpdate, error } = useAddRoom();

  const onSubmit = handleSubmit(async ({ roomName }) => {
    const { data } = await addRoomMutation({
      variables: { Input: { roomName, userId: '5a511667-6a5f-4d38-bf30-8ed1380575af' } },
    });
    if (data) {
      const { id, name } = data.addRoom;
      cacheUpdate(
        { userId: '5a511667-6a5f-4d38-bf30-8ed1380575af' },
        { __typename: 'rooms', id, name },
      );
      router.back();
    }
  });
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', padding: 20, gap: 20 }}>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput
            placeholder="ルーム名"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="roomName"
      />
      {errors.roomName && <Text>This is required.</Text>}
      {error && <Text>{error.message}</Text>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Button mode="contained" onPress={onSubmit} style={{ margin: 10 }}>
          作成
        </Button>
      )}
      <StatusBar style="light" />
    </View>
  );
}
