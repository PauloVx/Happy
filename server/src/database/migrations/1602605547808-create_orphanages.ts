import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602605547808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const orphanagesTable = new Table({
      name: 'orphanages',
      columns: [
        { name: 'id', type: 'integer', unsigned: true, isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
        { name: 'name', type: 'varchar' },
        { name: 'latitude', type: 'decimal', scale: 10, precision: 2 },
        { name: 'longitude', type: 'decimal', scale: 10, precision: 2 },
        { name: 'about', type: 'text' },
        { name: 'instructions', type: 'text' },
        { name: 'opening_hours', type: 'varchar' },
        { name: 'open_on_weekends', type: 'boolean', default: false },
      ],
    });

    await queryRunner.createTable(orphanagesTable);
  }

   public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable('orphanages');
   }
}
