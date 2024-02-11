
BEGIN;
INSERT INTO  public.role (name) VALUES ('root'), ('admin'), ('member');

-- 組織のモックデータ
INSERT INTO  public.organization (name) VALUES
  ('株式会社テスト'),
  ('テストカンパニー'),
  ('テストコーポレーション');

-- ルームのモックデータ
INSERT INTO  public.rooms (name, organization_id) VALUES
  ('営業所', (SELECT id FROM organization WHERE name = '株式会社テスト')),
  ('Romdom', (SELECT id FROM organization WHERE name = 'テストカンパニー')),
  ('開発', (SELECT id FROM organization WHERE name = '株式会社テスト'));

-- ユーザーのモックデータ
INSERT INTO  public.users (user_name, password, role_id, organization_id) VALUES
  ('tsutsumi', 'password1', 1, (SELECT id FROM organization WHERE name = '株式会社テスト')),
  ('sakamaki', 'password2', 2, (SELECT id FROM organization WHERE name = 'テストカンパニー')),
  ('yonashiro', 'password3', 3, (SELECT id FROM organization WHERE name = '株式会社テスト'));

-- メッセージのモックデータ
INSERT INTO  public.messages (create_at, message, user_id, room_id) VALUES
  (now(), 'Message 1', (SELECT id FROM users WHERE user_name = 'tsutsumi'), (SELECT id FROM rooms WHERE name = '営業所')),
  (now(), 'Message 2', (SELECT id FROM users WHERE user_name = 'sakamaki'), (SELECT id FROM rooms WHERE name = 'Romdom')),
  (now(), 'Message 3', (SELECT id FROM users WHERE user_name = 'yonashiro'), (SELECT id FROM rooms WHERE name = '開発')),
  -- 以下同様に追加
  (now(), 'Message 4', (SELECT id FROM users WHERE user_name = 'tsutsumi'), (SELECT id FROM rooms WHERE name = '営業所')),
  (now(), 'Message 5', (SELECT id FROM users WHERE user_name = 'sakamaki'), (SELECT id FROM rooms WHERE name = 'Romdom')),
  (now(), 'Message 6', (SELECT id FROM users WHERE user_name = 'yonashiro'), (SELECT id FROM rooms WHERE name = '開発')),
  -- 以下同様に追加
  (now(), 'Message 7', (SELECT id FROM users WHERE user_name = 'tsutsumi'), (SELECT id FROM rooms WHERE name = '営業所')),
  (now(), 'Message 8', (SELECT id FROM users WHERE user_name = 'sakamaki'), (SELECT id FROM rooms WHERE name = 'Romdom')),
  (now(), 'Message 9', (SELECT id FROM users WHERE user_name = 'yonashiro'), (SELECT id FROM rooms WHERE name = '開発'));

COMMIT;
