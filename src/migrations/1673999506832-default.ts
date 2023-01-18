import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673999506832 implements MigrationInterface {
    name = 'default1673999506832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room_suubject" ("room_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_623d1b11fe3f8effea9dde92657" PRIMARY KEY ("room_id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7a5742124a6f7fd7818d191d35" ON "room_suubject" ("room_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_58db6ed3e7613ef534976788f0" ON "room_suubject" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "room_suubject" ADD CONSTRAINT "FK_7a5742124a6f7fd7818d191d357" FOREIGN KEY ("room_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_suubject" ADD CONSTRAINT "FK_58db6ed3e7613ef534976788f06" FOREIGN KEY ("subject_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_suubject" DROP CONSTRAINT "FK_58db6ed3e7613ef534976788f06"`);
        await queryRunner.query(`ALTER TABLE "room_suubject" DROP CONSTRAINT "FK_7a5742124a6f7fd7818d191d357"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_58db6ed3e7613ef534976788f0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7a5742124a6f7fd7818d191d35"`);
        await queryRunner.query(`DROP TABLE "room_suubject"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
