import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
type Props = {
  children: ReactNode;
  padding?: number;
  gap?: number;
};

export default function ModalLayout({ children, padding = 20, gap = 20 }: Props) {
  return (
    <View style={[styles.modalContainer, { padding, gap }]}>
      {children}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
