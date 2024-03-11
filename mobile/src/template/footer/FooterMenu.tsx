import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FooterIcon, { FooterIconProps } from './FooterIcon';

const menu: FooterIconProps[] = [
  { label: 'ユーザー', navigateTo: '/user', icon: 'archive' },
  { label: 'ルーム', navigateTo: '/room', icon: 'label' },
  { label: 'DM', navigateTo: '/dm', icon: 'email' },
  { label: '設定', navigateTo: '/setting', icon: 'delete' },
];

export default function FooterMenu() {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      style={{
        ...style.bottom,
        backgroundColor: theme.colors.elevation.level0,
      }}
      safeAreaInsets={{ bottom }}
    >
      {menu.map((props) => (
        <FooterIcon {...props} key={props.navigateTo}/>
      ))}
    </Appbar>
  );
}

const style = StyleSheet.create({
  bottom: {
    justifyContent: 'space-around',
  },
});
