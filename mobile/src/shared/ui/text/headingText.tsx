import { ReactNode } from 'react';
import { Text } from 'react-native-paper';
import { match } from 'ts-pattern';

type Props = {
  size: 'small' | 'medium' | 'large';
  children: ReactNode;
};

type headlineSize = 'headlineLarge' | 'headlineMedium' | 'headlineSmall';
type size = 'small' | 'medium' | 'large';
export default function HeadingText({ size, children }: Props) {
  const variant = match<size, headlineSize>(size)
    .with('large', () => 'headlineLarge')
    .with('medium', () => 'headlineMedium')
    .with('small', () => 'headlineSmall')
    .exhaustive();
  return <Text variant={variant}>{children}</Text>;
}
