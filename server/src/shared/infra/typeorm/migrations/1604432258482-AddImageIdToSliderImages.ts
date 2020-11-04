import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AddImageIdToSliderImages1604432258482
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'slider_images',
            new TableColumn({
                name: 'image_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'slider_images',
            new TableForeignKey({
                name: 'imagesSlider',
                columnNames: ['image_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'images',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('slider_images', 'imagesSliders');
        await queryRunner.dropColumn('slider_images', 'image_id');
    }
}
