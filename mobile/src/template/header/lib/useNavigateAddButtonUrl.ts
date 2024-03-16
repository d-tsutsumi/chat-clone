import { usePathname } from 'expo-router';
import { useMemo } from 'react';
import { match } from 'ts-pattern';

export function useNavigateAddButtonUrl() {
  const pathName = usePathname();

  return useMemo(
    () =>
      match(pathName)
        .with('room', () => '/room/crate')
        .with('/', () => '/room/create')
        .with('user', () => '/user/create')
        .with('dm', () => '/dm/create')
        .otherwise(() => ''),
    [pathName],
  );
}
