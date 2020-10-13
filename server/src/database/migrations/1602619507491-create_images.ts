import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602619507491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const imagesTable = new Table({
      name: "images",
      columns: [
        { name: 'id', type: 'integer', unsigned: true, isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
        { name: 'path', type: 'varchar' },
        { name: 'orphanage_id', type: 'integer' }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orpahanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    });

    await queryRunner.createTable(imagesTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
