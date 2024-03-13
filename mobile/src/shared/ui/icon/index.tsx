import { AntDesign } from '@expo/vector-icons';

import type { IconType } from './Icon';

type Props = {
  size?: number;
  color?: string;
  name: IconType;
};

export function Icon({ size = 12, color = 'black', name }: Props) {
  return <AntDesign name={name} size={size} color={color} />;
}
