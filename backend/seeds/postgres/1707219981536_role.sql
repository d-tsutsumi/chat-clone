SET check_function_bodies = false;
INSERT INTO public.role (id, name) VALUES (10, 'root');
INSERT INTO public.role (id, name) VALUES (11, 'admin');
INSERT INTO public.role (id, name) VALUES (12, 'member');
SELECT pg_catalog.setval('public.role_id_seq', 12, true);
