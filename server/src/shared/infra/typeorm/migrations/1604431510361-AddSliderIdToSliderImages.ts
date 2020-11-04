import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AddForeignKeySliderImages1604431510361
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'slider_images',
            new TableColumn({
                name: 'slider_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'slider_images',
            new TableForeignKey({
                name: 'slidersImages',
                columnNames: ['slider_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'sliders',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('slider_images', 'slidersImages');
        await queryRunner.dropColumn('slider_images', 'slider_id');
    }
}
