import { usePathname } from 'expo-router';
import { useMemo } from 'react';
import { match } from 'ts-pattern';

export  function useHeaderName() {
  const pathName = usePathname();

  return useMemo(
    () =>
      match(pathName)
        .with('room', () => 'ルーム')
        .with('user', () => '友達')
        .with('setting', () => '設定')
        .with('dm', () => 'ダイレクトメッセージ')
        .with("/", () => "ルーム")
        .otherwise(() => 'その他'),
    [pathName],
  );
}
