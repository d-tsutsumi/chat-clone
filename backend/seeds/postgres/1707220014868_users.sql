SET check_function_bodies = false;
INSERT INTO public.users (id, user_name, password, join_at, push_flag, role_id, organization_id) VALUES ('63c2660d-9925-416a-9d13-94386688e289', 'tsutsumi', 'password1', '2024-02-04 01:35:30.706906', false, 10, '197c8b9e-d978-4a78-914f-f3614f51e17a');
INSERT INTO public.users (id, user_name, password, join_at, push_flag, role_id, organization_id) VALUES ('89b463d9-9ac2-4cb6-8886-4ed1d3927ef2', 'sakamaki', 'password2', '2024-02-04 01:35:30.706906', false, 11, 'a5aacf65-260f-4353-81ad-94f6d90fad52');
INSERT INTO public.users (id, user_name, password, join_at, push_flag, role_id, organization_id) VALUES ('9f2d6c7e-3d38-47b4-b06e-5d37064eea46', 'yonashiro', 'password3', '2024-02-04 01:35:30.706906', false, 12, '197c8b9e-d978-4a78-914f-f3614f51e17a');
SELECT pg_catalog.setval('public.users_role_id_seq', 1, false);
