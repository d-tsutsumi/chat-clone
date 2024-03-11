import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Footer } from '@/template/footer';
import { HeaderMenu } from '@/template/header';

export default function testLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderMenu />
      </View>
      <View style={styles.main}>
        <Slot />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 10,
  },
  footer: {
    flex: 1,
  },
});
