import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUser1571143104360 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `gender` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `city` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `avatar` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `signature` varchar(30) NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `signature`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `avatar`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `city`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `gender`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL", undefined);
    }

}
