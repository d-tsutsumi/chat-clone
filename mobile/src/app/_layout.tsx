import { Slot } from 'expo-router';
import { GraphQlProvider } from '@/provider';

export default function RootLayout() {
  return (
    <GraphQlProvider>
      <Slot />
    </GraphQlProvider>
  );
}
