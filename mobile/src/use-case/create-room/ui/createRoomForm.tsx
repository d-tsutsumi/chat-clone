import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Text, Button } from 'react-native-paper';
import useAddRoom from '@/use-case/create-room/api/useAddRoom';
import { LoadingSpinner, TextInput } from '@/shared/ui';

type FormState = {
  roomName: string;
};

export default function CreateRoomForm() {
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
    <>
      <Controller
        control={control}
        rules={{ required: true }}
        name="roomName"
        render={({ field }) => (
          <TextInput
            textProps={{
              placeholder: 'ルーム名',
              onBlur: field.onBlur,
              onChangeText: field.onChange,
              value: field.value,
            }}
          />
        )}
      />
      {errors.roomName && <Text>This is required.</Text>}
      {error && <Text>{error.message}</Text>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Button
          disabled={!!errors.roomName}
          mode="contained"
          onPress={onSubmit}
          style={{ margin: 10 }}
        >
          作成
        </Button>
      )}
    </>
  );
}
