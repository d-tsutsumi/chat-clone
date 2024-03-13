import { MigrationInterface, QueryRunner } from "typeorm";

export class TsutsumiChat1709618167555 implements MigrationInterface {
    name = 'TsutsumiChat1709618167555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."messages" DROP CONSTRAINT "FK_830a3c1d92614d1495418c46736"
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."user_join_tables_rooms" DROP CONSTRAINT "FK_b0601efa202dfa5c3e53624ec1f"
        `);
        await queryRunner.query(`
            COMMENT ON COLUMN "tsutsumi_chat"."user"."id" IS 'ユーザーId'
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."user"
            ALTER COLUMN "id"
            SET DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            COMMENT ON COLUMN "tsutsumi_chat"."messages"."user_id" IS 'ユーザーId'
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."messages"
            ADD CONSTRAINT "FK_830a3c1d92614d1495418c46736" FOREIGN KEY ("user_id") REFERENCES "tsutsumi_chat"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."user_join_tables_rooms"
            ADD CONSTRAINT "FK_b0601efa202dfa5c3e53624ec1f" FOREIGN KEY ("userId") REFERENCES "tsutsumi_chat"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."user_join_tables_rooms" DROP CONSTRAINT "FK_b0601efa202dfa5c3e53624ec1f"
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."messages" DROP CONSTRAINT "FK_830a3c1d92614d1495418c46736"
        `);
        await queryRunner.query(`
            COMMENT ON COLUMN "tsutsumi_chat"."messages"."user_id" IS 'ユーザーID'
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."user"
            ALTER COLUMN "id" DROP DEFAULT
        `);
        await queryRunner.query(`
            COMMENT ON COLUMN "tsutsumi_chat"."user"."id" IS 'ユーザーID'
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."user_join_tables_rooms"
            ADD CONSTRAINT "FK_b0601efa202dfa5c3e53624ec1f" FOREIGN KEY ("userId") REFERENCES "tsutsumi_chat"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "tsutsumi_chat"."messages"
            ADD CONSTRAINT "FK_830a3c1d92614d1495418c46736" FOREIGN KEY ("user_id") REFERENCES "tsutsumi_chat"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
