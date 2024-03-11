import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function LoadingSpinner() {
  return <ActivityIndicator animating={true} color={MD2Colors.blue400} />;
}
