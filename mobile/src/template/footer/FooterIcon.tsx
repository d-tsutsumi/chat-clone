import { Link } from 'expo-router';
import { View, Pressable, StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

type Props = {
  label: string;
  navigateTo: string;
  icon: string;
};

export type FooterIconProps = Props;

export default function FooterIcon({ label, navigateTo, icon }: Props) {
  return (
    <Link href={navigateTo} asChild>
      <Pressable>
        <Appbar.Action style={styles.icon} icon={icon} />
        <View style={styles.label}>
          <Text variant="labelSmall">{label}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
  },
  label: {
    flex: 1,
    alignItems: 'center',
  },
});
