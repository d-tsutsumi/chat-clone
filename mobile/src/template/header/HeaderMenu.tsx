import { Appbar } from 'react-native-paper';
import { useHeaderName } from './lib/useHeaderName';
import { useRouter } from 'expo-router';

export default function HeaderMenu() {
  const headerName = useHeaderName();
  const router = useRouter();

  return (
    <Appbar style={{ justifyContent: 'space-around', height: 32, backgroundColor: 'white' }}>
      <Appbar.BackAction />
      <Appbar.Content title={headerName} />
      <Appbar.Action
        icon="plus"
        onPress={() => {
          router.push('/modal');
        }}
      />
      <Appbar.Action
        icon="magnify"
        onPress={() => {
          router.push('/searchModal');
        }}
      />
    </Appbar>
  );
}
