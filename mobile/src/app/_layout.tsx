import { Slot } from 'expo-router';
import { GraphQlProvider } from '@/provider';
import { SafeAreaView, StyleSheet } from 'react-native';
import ThemeProvider from '@/provider/paperProvider';

export default function RootLayout() {
  return (
    <GraphQlProvider>
      <ThemeProvider>
        <SafeAreaView>
          <Slot />
        </SafeAreaView>
      </ThemeProvider>
    </GraphQlProvider>
  );
}
