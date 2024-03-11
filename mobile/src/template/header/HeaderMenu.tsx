import { Appbar } from 'react-native-paper';
import { useHeaderName } from './lib/useHeaderName';

export default function HeaderMenu() {
  const headerName = useHeaderName();
  return (
    <Appbar style={{ justifyContent: 'space-around', height: 32, backgroundColor: "white" }}>
      <Appbar.BackAction />
      <Appbar.Content title={headerName} />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar>
  );
}
