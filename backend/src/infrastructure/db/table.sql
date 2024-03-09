-- Create user_role table
CREATE TABLE "tsutsumi_chat"."user_role" (
    "id" SERIAL NOT NULL,
    "name" character varying NOT NULL,
    CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id")
);

-- Create organization table
CREATE TABLE "tsutsumi_chat"."organization" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" character varying(255),
    CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id")
);

-- Create rooms table
CREATE TABLE "tsutsumi_chat"."rooms" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" character varying(255),
    "create_at" date NOT NULL DEFAULT now(),
    "organization_id" uuid,
    CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id")
);

-- Create user table
CREATE TABLE "tsutsumi_chat"."user" (
    "id" uuid NOT NULL,
    "user_name" character varying NOT NULL,
    "join_at" date NOT NULL DEFAULT now(),
    "push_flag" boolean NOT NULL DEFAULT false,
    "role_id" integer,
    "organization_id" uuid,
    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
);

-- Create messages table
CREATE TABLE "tsutsumi_chat"."messages" (
    "id" SERIAL NOT NULL,
    "message" character varying,
    "create_at" date NOT NULL DEFAULT now(),
    "user_id" uuid,
    "room_id" uuid,
    CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id")
);

-- Create user_join_tables_rooms table
CREATE TABLE "tsutsumi_chat"."user_join_tables_rooms" (
    "userId" uuid NOT NULL,
    "roomsId" uuid NOT NULL,
    CONSTRAINT "PK_277622d8fccf7c6445449593eea" PRIMARY KEY ("userId", "roomsId")
);

-- Create indexes for user_join_tables_rooms table
CREATE INDEX "IDX_b0601efa202dfa5c3e53624ec1" ON "tsutsumi_chat"."user_join_tables_rooms" ("userId");
CREATE INDEX "IDX_79b8cc67a12011187575ef0b77" ON "tsutsumi_chat"."user_join_tables_rooms" ("roomsId");

-- Add foreign key constraints
ALTER TABLE "tsutsumi_chat"."rooms"
    ADD CONSTRAINT "FK_85249253c3c41f4d60ef8a3ded0" FOREIGN KEY ("organization_id") REFERENCES "tsutsumi_chat"."organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "tsutsumi_chat"."user"
    ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "tsutsumi_chat"."user_role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "tsutsumi_chat"."user"
    ADD CONSTRAINT "FK_3e103cdf85b7d6cb620b4db0f0c" FOREIGN KEY ("organization_id") REFERENCES "tsutsumi_chat"."organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "tsutsumi_chat"."messages"
    ADD CONSTRAINT "FK_830a3c1d92614d1495418c46736" FOREIGN KEY ("user_id") REFERENCES "tsutsumi_chat"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "tsutsumi_chat"."messages"
    ADD CONSTRAINT "FK_1dda4fc8dbeeff2ee71f0088ba0" FOREIGN KEY ("room_id") REFERENCES "tsutsumi_chat"."rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "tsutsumi_chat"."user_join_tables_rooms"
    ADD CONSTRAINT "FK_b0601efa202dfa5c3e53624ec1f" FOREIGN KEY ("userId") REFERENCES "tsutsumi_chat"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "tsutsumi_chat"."user_join_tables_rooms"
    ADD CONSTRAINT "FK_79b8cc67a12011187575ef0b77a" FOREIGN KEY ("roomsId") REFERENCES "tsutsumi_chat"."rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
