import {
    MigrationInterface,
    QueryRunner,
    TableForeignKey,
    TableColumn,
} from 'typeorm';

export default class AddImageToCard1604508434002 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'cards',
            new TableColumn({
                name: 'image_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'cards',
            new TableForeignKey({
                name: 'cardImage',
                columnNames: ['image_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'images',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cards', 'cardImage');
        await queryRunner.dropColumn('cards', 'image_id');
    }
}
