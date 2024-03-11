import { ReactNode } from 'react';
import { PaperProvider, MD3Theme, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const theme: MD3Theme = {
  ...MD3LightTheme,
};
type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
