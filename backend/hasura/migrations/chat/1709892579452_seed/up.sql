SET check_function_bodies = false;
CREATE TABLE public.messages (
    id integer NOT NULL,
    message character varying,
    create_at date DEFAULT now() NOT NULL,
    user_id uuid,
    room_id uuid
);
COMMENT ON COLUMN public.messages.id IS 'メッセージID';
COMMENT ON COLUMN public.messages.message IS 'メッセージ';
COMMENT ON COLUMN public.messages.create_at IS '作成日時';
COMMENT ON COLUMN public.messages.user_id IS 'ユーザーId';
COMMENT ON COLUMN public.messages.room_id IS 'ルームid';
CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;
CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);
CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
CREATE TABLE public.organization (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(255)
);
COMMENT ON COLUMN public.organization.id IS '組織id';
CREATE TABLE public.rooms (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(255),
    create_at date DEFAULT now() NOT NULL,
    organization_id uuid
);
COMMENT ON COLUMN public.rooms.id IS 'ルームid';
COMMENT ON COLUMN public.rooms.name IS 'ルーム名';
COMMENT ON COLUMN public.rooms.create_at IS '作成日時';
COMMENT ON COLUMN public.rooms.organization_id IS '組織id';
CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_name character varying NOT NULL,
    join_at date DEFAULT now() NOT NULL,
    push_flag boolean DEFAULT false NOT NULL,
    role_id integer,
    organization_id uuid
);
COMMENT ON COLUMN public."user".id IS 'ユーザーId';
COMMENT ON COLUMN public."user".user_name IS 'ユーザー名';
COMMENT ON COLUMN public."user".join_at IS '参加日時';
COMMENT ON COLUMN public."user".push_flag IS 'プッシュ通知';
COMMENT ON COLUMN public."user".role_id IS 'ロールid';
COMMENT ON COLUMN public."user".organization_id IS '組織id';
CREATE TABLE public.user_join_tables_rooms (
    "userId" uuid NOT NULL,
    "roomsId" uuid NOT NULL
);
CREATE TABLE public.user_role (
    id integer NOT NULL,
    name character varying NOT NULL
);
COMMENT ON COLUMN public.user_role.id IS 'ロールid';
COMMENT ON COLUMN public.user_role.name IS 'ロール名';
CREATE SEQUENCE public.user_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_role_id_seq OWNED BY public.user_role.id;
ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);
ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
ALTER TABLE ONLY public.user_role ALTER COLUMN id SET DEFAULT nextval('public.user_role_id_seq'::regclass);
ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY (id);
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY (id);
ALTER TABLE ONLY public.user_join_tables_rooms
    ADD CONSTRAINT "PK_277622d8fccf7c6445449593eea" PRIMARY KEY ("userId", "roomsId");
ALTER TABLE ONLY public.organization
    ADD CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY (id);
ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY (id);
CREATE INDEX "IDX_79b8cc67a12011187575ef0b77" ON public.user_join_tables_rooms USING btree ("roomsId");
CREATE INDEX "IDX_b0601efa202dfa5c3e53624ec1" ON public.user_join_tables_rooms USING btree ("userId");
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "FK_1dda4fc8dbeeff2ee71f0088ba0" FOREIGN KEY (room_id) REFERENCES public.rooms(id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_3e103cdf85b7d6cb620b4db0f0c" FOREIGN KEY (organization_id) REFERENCES public.organization(id);
ALTER TABLE ONLY public.user_join_tables_rooms
    ADD CONSTRAINT "FK_79b8cc67a12011187575ef0b77a" FOREIGN KEY ("roomsId") REFERENCES public.rooms(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "FK_830a3c1d92614d1495418c46736" FOREIGN KEY (user_id) REFERENCES public."user"(id);
ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT "FK_85249253c3c41f4d60ef8a3ded0" FOREIGN KEY (organization_id) REFERENCES public.organization(id);
ALTER TABLE ONLY public.user_join_tables_rooms
    ADD CONSTRAINT "FK_b0601efa202dfa5c3e53624ec1f" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY (role_id) REFERENCES public.user_role(id);
