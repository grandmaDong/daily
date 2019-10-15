import {MigrationInterface, QueryRunner} from "typeorm";

export class UpDateUserInColumn1571146124766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `blog` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(15) NOT NULL, `content` varchar(255) NOT NULL, `userId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE INDEX `IDX_065d4d8f3b5adb4a08841eae3c` ON `user` (`name`)", undefined);
        await queryRunner.query("ALTER TABLE `blog` ADD CONSTRAINT `FK_fc46ede0f7ab797b7ffacb5c08d` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `blog` DROP FOREIGN KEY `FK_fc46ede0f7ab797b7ffacb5c08d`", undefined);
        await queryRunner.query("DROP INDEX `IDX_065d4d8f3b5adb4a08841eae3c` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `blog`", undefined);
    }

}
